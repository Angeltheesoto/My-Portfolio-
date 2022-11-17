// dependencies
import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import "./footer.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ProfilePic from "../../images_icons/picture_of_me.jpg";

function Contact() {
  // Variables
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  // This handles submit form functions
  function sendEmail(e) {
    e.preventDefault();

    if (name && email && comment) {
      emailjs
        .sendForm(
          `service_kq3g3p2`,
          `template_0cl4ohp`,
          e.target,
          `cABl6iw7PSwCXKddN`
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });

      setShow((prevSetShow) => !prevSetShow);

      if (show === false) {
        console.log("show is false");
      } else {
        console.log("show is true");
      }

      return (
        <Button type="submit" className="button btn-color">
          Send
        </Button>
      );
    } else {
      return (
        <Button type="submit" className="button btn-color" disabled>
          Send
        </Button>
      );
    }
  }

  return (
    <div id="contact" className="form-flex">
      <div className="form-container">
        <h4>Contact me</h4>
        <Form onSubmit={sendEmail}>
          <FloatingLabel
            controlId="floatingInput"
            label="Name"
            className="mb-3"
            value={name}
            onChange={(e) => setName(e.target.value)}
          >
            <Form.Control
              type="text"
              name="name"
              placeholder="Name"
              maxLength={15}
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          >
            <Form.Control
              type="email"
              name="user_email is-invalid"
              placeholder="name@example.com"
              maxLength={20}
            />
          </FloatingLabel>

          <FloatingLabel controlId="floatingTextarea2" label="Comments">
            <Form.Control
              as="textarea"
              name="message"
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
              className="mb-3"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </FloatingLabel>

          <Button type="submit" className="button btn-color">
            Send
          </Button>
        </Form>
      </div>
      <div className="footer-links">
        <h4>Profile</h4>
        <img src={ProfilePic} alt="angel soto" className="profilepic" />
      </div>
    </div>
  );
}

export default Contact;
