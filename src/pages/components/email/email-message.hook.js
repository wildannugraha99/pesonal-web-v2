import { useRef } from "react";
import { message } from "antd";
import emailjs from "@emailjs/browser";
import { validators } from "./validators/useSendEmail.validator";

export const useSendEmail = () => {
  const form = useRef();

  const handleSubmitData = (e, formData) => {
    const { name, email, message: messagess } = formData;

    if (name && email && messagess !== "") {
      message.loading({ content: "Loading...", key: "updatable" });
      emailjs
        .sendForm("gmail", "test-temp", form.current, "v8vKjhc4544PvRhT-")
        .then((result) => {
          if (result.text === "OK") {
            message.success({
              content: "Your message has success to sent",
              key: "updatable",
              duration: 3,
            });
            e.target.reset();
          } else {
            message.error({
              content: "Your message has failed to sent",
              key: "updatable",
              duration: 3,
            });
            e.target.reset();
          }
        });
    } else {
      validators(formData);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const formData = {};
    Array.from(e.currentTarget.elements).map((item) => {
      if (!item.name) return null;
      formData[item.name] = item.value;
    });
    handleSubmitData(e, formData);
  };

  return { sendEmail, form };
};
