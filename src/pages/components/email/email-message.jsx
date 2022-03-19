import { useSendEmail } from "./email-message.hook";

import email from "../../../assets/images/email.png";
import "./email-message.scss";

const EmailMessage = () => {
  const { sendEmail, form } = useSendEmail();

  return (
    <div className="Email" id="MyEmail">
      <div className="Email-title">Send me an email</div>
      <div className="Email--flex">
        <form
          ref={form}
          className="Email-inputContainer"
          onSubmit={(e) => sendEmail(e)}
        >
          <div className="Email-inputContainer--flex">
            <div className="Email-inputContainer--inner">
              <label htmlFor="Name-inp">Name :</label>
              <br />
              <input
                type="text"
                id="Name-inp"
                name="name"
                placeholder="your name"
              />
            </div>
            <div className="Email-inputContainer--inner">
              <label htmlFor="Email-inp">Email :</label>
              <br />
              <input
                type="email"
                id="Email-inp"
                name="email"
                placeholder="your email"
              />
            </div>
          </div>
          <div className="Email-inputContainer--inner">
            <label htmlFor="Message-inp">Message :</label>
            <textarea
              id="Message-inp"
              cols="30"
              rows="10"
              name="message"
              placeholder="your message"
            />
          </div>

          <button type="submit" className="Submit-btn">
            Send email
          </button>
        </form>

        <img
          src={email}
          alt=""
          className="Email-randomImg"
          data-aos="fade-up"
          aos-duration="2000"
        />
      </div>
    </div>
  );
};

export default EmailMessage;
