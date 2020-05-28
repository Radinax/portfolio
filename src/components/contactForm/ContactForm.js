import React from "react";

const ContactForm = () => {
  return (
    <div className="mb-5" id="contact">
      <h2 className="mb-5 mt-5 text-center">Contact Me!</h2>
      <div className="col-md-8 m-auto">
        <form method="POST" action="https://formspree.io/mdowepoo">
          <div className="form-group">
            <input
              className="form-control form-control-lg"
              type="text"
              name="name"
              placeholder="Your name"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="_replyto"
              placeholder="Your email"
              className="form-control form-control-lg"
              required
            />
          </div>
          <input
            type="hidden"
            name="_subject"
            value="Website contact"
            className="form-control form-control-lg"
          ></input>
          <div className="form-group">
            <textarea
              type="text"
              name="message"
              placeholder="Your message"
              className="form-control form-control-lg"
              required
            ></textarea>
          </div>
          <input type="text" name="_gotcha" style={{ display: "none" }} />
          <input
            className="btn btn-block mt-4 mb-5"
            type="submit"
            value="Send"
            style={{ backgroundColor: "#001f3f", color: "white" }}
          />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
