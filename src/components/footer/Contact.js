// dependencies
import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import "./footer.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ProfilePic from "../../images_icons/picture_of_me.jpg";

function Contact(props) {
  // Variables
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  // This function handles the email being sent and logs when it fails.
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

      // setShow((prevSetShow) => !prevSetShow);
      // if (show === false) {
      //   console.log("show is false");
      // } else {
      //   console.log("show is true");
      // }
    } else {
      console.log("Cannot send email.");
    }
  }

  // This function is the two submit buttons that display different effects in browser when clicked.
  function SubmitButton() {
    if (name && email && comment) {
      // function EmailSent() {
      //   console.log("This button is Not disabled");
      // }
      return (
        <Button
          type="submit"
          className="button btn-color"
          onClick={props.HandleClick}
          // onSubmit={props.HandleClick}
        >
          Send
        </Button>
      );
    } else {
      function EmailDidNotSend(e) {
        e.preventDefault();
      }
      return (
        <Button
          type="submit"
          className="button btn-color"
          onClick={(e) => {
            e.props.HandleDisabledClick;
          }}
          // onChange={(e) => e.preventDefault}
          // onSubmit={EmailDidNotSend}
        >
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
              name="name is-invalid"
              placeholder="Name"
              maxLength={20}
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
              maxLength={25}
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
          <SubmitButton />
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
