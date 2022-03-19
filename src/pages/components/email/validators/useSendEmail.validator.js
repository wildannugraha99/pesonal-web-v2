import { message } from "antd";

export const validators = (data) => {
  if (data.name === "") {
    message.warning({
      content: "Name must not empty!",
      key: "updatable",
      duration: 3,
    });
  } else if (data.email === "") {
    message.warning({
      content: "Email must not empty!",
      key: "updatable",
      duration: 3,
    });
  } else if (data.message === "") {
    message.warning({
      content: "Your message is still empty!",
      key: "updatable",
      duration: 3,
    });
  }

  return validators;
};
