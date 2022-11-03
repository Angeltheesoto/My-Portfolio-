import "./footer.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Contact() {
  return (
    <div className="form-container">
      <h4>Contact me</h4>

      <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
        <Form.Control type="text" placeholder="Name" />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>

      <FloatingLabel controlId="floatingTextarea2" label="Comments">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: "100px" }}
          className="mb-3"
        />
      </FloatingLabel>

      <Button type="submit" className="button">
        Submit form
      </Button>
      <div id="map"></div>
    </div>
  );
}

export default Contact;
