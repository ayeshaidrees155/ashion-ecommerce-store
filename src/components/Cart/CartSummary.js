import React from "react";
import "./Cart.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function CartSummary({ items, isFormValid, orderTotal }) {
  const navigate = useNavigate();
  const SubTotal = (items || []).reduce(
    (total, item) => total + (item.price || 0) * (item.qty || 1),
    0,
  );

  const shippingChrges = SubTotal > 3000 ? 0 : 200;
  const discount = SubTotal > 5000 ? 0.1 : 0;
  const afterDis = SubTotal * discount;
  const total = SubTotal - afterDis + shippingChrges;

  const handlePlaceOrder = () => {
    toast.success("Order Confirmed!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,

      onClose: () => {
        localStorage.removeItem("My Cart");
        navigate(-2);
      },
    });
  };
  return (
    <div className="order-summary-container">
      <ToastContainer />
      <h5 className="order-title">YOUR ORDER</h5>

      <div className="order-content">
        <div className="d-flex justify-content-between border-bottom pb-2 mb-3">
          <span className="fw-bold">Product</span>
          <span className="fw-bold">Total</span>
        </div>

        <ol className="order-product-list">
          {items?.map((item) => (
            <li key={item.id} className="order-item">
              <span className="product-name">{item.name}</span>
              <span className="product-price">
                Rs. {(item.price || 0) * (item.qty || 1)}
              </span>
            </li>
          ))}
        </ol>

        <hr />

        <div className="order-totals">
          <div className="total-row">
            <span>Subtotal</span>
            <span className="text-danger fw-bold">Rs. {SubTotal}</span>
          </div>
          {discount > 0 && (
            <div className="total-row">
              <span>Discount ({discount * 100}%)</span>
              <span className="text-danger fw-bold"> Rs. {afterDis}</span>
            </div>
          )}
          <div className="total-row">
            <span>Shipping</span>
            <span className="text-danger fw-bold">
              {shippingChrges === 0 ? "Free" : `Rs. ${shippingChrges}`}
            </span>
          </div>
          <div className="total-row grand-total mt-3 pt-3 border-top">
            <span>Total</span>
            <span className="text-danger fw-bold fs-5">Rs. {total}</span>
          </div>
        </div>
        <div className="payment-method-sec">
          <p className="payment-title">
            Payment Method <strong className="text-danger">*</strong>
          </p>

          <div className="payment-options">
            <label className="payment-label">
              <input type="radio" name="payment" defaultChecked />
              <span className="custom-radio"></span>
              Credit Card
            </label>

            <label className="payment-label">
              <input type="radio" name="payment" />
              <span className="custom-radio"></span>
              Cheque Payment
            </label>

            <label className="payment-label">
              <input type="radio" name="payment" />
              <span className="custom-radio"></span>
              PayPal
            </label>

            <label className="payment-label">
              <input type="radio" name="payment" />
              <span className="custom-radio"></span>
              Bank Transfer
            </label>
          </div>

          <div className="terms-sec mt-3">
            <label
              className="payment-label terms"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                whiteSpace: "nowrap",
                cursor: "pointer",
              }}
            >
              <input type="checkbox" required />
              <span className="custom-checkbox"></span>
              <span>
                I have read and agree to the{" "}
                <a href="#terms" className="text-primary">
                  terms and conditions
                </a>{" "}
                <span className="text-danger">*</span>
              </span>
            </label>
          </div>
        </div>
        <button
          onClick={handlePlaceOrder}
          className="place-order-btn"
          disabled={!isFormValid}
          style={{
            backgroundColor: isFormValid ? "#ca1515" : "#cccccc",
            cursor: isFormValid ? "pointer" : "not-allowed",
          }}
        >
          PLACE ORDER
        </button>
      </div>
    </div>
  );
}
