import React, { useEffect } from "react";
import "./BillingForm.css";

export default function BillingForm({ onValidationChange }) {
  const formRef = React.useRef(null);

  const handleChange = () => {
    if (formRef.current) {
      onValidationChange(formRef.current.checkValidity());
    }
  };

  useEffect(() => {
    if (formRef.current) {
      onValidationChange(formRef.current.checkValidity());
    }
  }, [onValidationChange]);
  return (
    <div className="billing-container">
      <h5 className="billing-title">BILLING DETAILS</h5>

      <form className="custom-form" ref={formRef} onChange={handleChange}>
        <div className="input-group-row">
          <div className="input-field">
            <label>
              First Name <strong style={{ color: "red" }}>*</strong>
            </label>
            <input type="text" required style={{ border: " 1px solid red" }} />
          </div>
          <div className="input-field">
            <label>
              Last Name <strong style={{ color: "red" }}>*</strong>
            </label>
            <input type="text" required />
          </div>
        </div>

        <div className="input-field">
          <label>
            Country <strong style={{ color: "red" }}>*</strong>
          </label>
          <select required>
            <option value="">Select a country</option>
            <option>Pakistan</option>
            <option>United States</option>
          </select>
        </div>

        <div className="input-field">
          <label>
            Street Address <strong style={{ color: "red" }}>*</strong>
          </label>
          <input
            type="text"
            placeholder="Street Address"
            className="margin-bottom"
            required
          />
          <label>Apartment, suite, unit (optional)</label>
          <input
            style={{ border: "1px solid black" }}
            type="text"
            placeholder="Apartment, suite, unit etc (optional)"
          />
        </div>

        <div className="input-field">
          <label>
            Town/City <strong style={{ color: "red" }}>*</strong>
          </label>
          <input type="text" required />
        </div>

        <div className="input-field">
          <label>
            State/Province <strong style={{ color: "red" }}>*</strong>
          </label>
          <input type="text" required />
        </div>
        <div className="input-field">
          <label>
            Postcode/ZIP <strong style={{ color: "red" }}>*</strong>
          </label>
          <input type="text" required />
        </div>

        <div className="input-group-row">
          <div className="input-field">
            <label>
              Phone <strong style={{ color: "red" }}>*</strong>
            </label>
            <input type="text" required />
          </div>
          <div className="input-field">
            <label>
              Email <strong style={{ color: "red" }}>*</strong>
            </label>
            <input type="email" required />
          </div>
        </div>

        <div className="checkbox-section">
          <label className="checkbox-item">
            <input type="checkbox" />
            <strong className="box"></strong>
            Create an account?
          </label>
          <p className="help-text">
            Create an account by entering the information below. If you are a
            returning customer, please login at the top of the page.
          </p>
        </div>
      </form>
    </div>
  );
}
