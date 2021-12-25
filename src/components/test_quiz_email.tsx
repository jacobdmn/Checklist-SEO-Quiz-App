import React, { useRef } from "react";
import emailjs from "emailjs-com";

const SendQuizToEmail = () => {
  const form = useRef();

  return (
    <form ref={form}>
      <input type='email' name='email' value='jacob.demmane@gmail.com' />
      <input
        type='button'
        value='Send'
        onClick={() => {
          emailjs
            .sendForm(
              "gmail_service",
              "quiz_result",
              form.current,
              "user_UIdPWAWbp27Vutic3cQO5"
            )
            .then(
              (result) => {
                alert("sent! " + result);
                console.log(form.current);
              },
              (error) => {
                alert("error: " + error.text);
              }
            );
        }}
      />
    </form>
  );
};

export default SendQuizToEmail;
