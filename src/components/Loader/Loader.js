import Spinner from "react-bootstrap/Spinner";

function Loader() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "70vh", width: "100%" }}
    >
      <Spinner
        animation="border"
        variant="dark"
        role="status"
        style={{ width: "3rem", height: "3rem" }}
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}

export default Loader;
