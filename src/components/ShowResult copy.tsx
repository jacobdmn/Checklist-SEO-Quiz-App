import React, { useRef } from "react";
import emailjs from "emailjs-com";

import TextField from "@mui/material/TextField";
import { styled } from "@mui/system";

import Button from "@mui/material/Button";

const TextFieldStyled = styled(TextField)({
  minWidth: "400px",
  maxWidth: "95vw",
  input: { height: "5em" },
  "*, *:hover": {
    color: "white !important",
    borderColor: "white !important",
  },
});

const ShowResult: React.FC<{
  answers: any;
  numberOfAllOptions: number;
}> = ({ answers, numberOfAllOptions }) => {
  const form = useRef();

  const [loading, setLoading] = React.useState(false);
  const [emailSent, setEmailSent] = React.useState(false);

  const handleSendCRO = (e: any) => {
    e.preventDefault();

    // setLoading(true);

    alert("start");

    emailjs
      .sendForm(
        "gmail_service",
        "quiz_result",
        e.target,
        "user_UIdPWAWbp27Vutic3cQO5"
      )
      .then(
        (result) => {
          // setEmailSent(true);
          // setLoading(false);
          alert("Sent!");
        },
        (error) => {
          alert("Oops ! Problem accured! " + error.text);
          // setLoading(false);
        }
      );
    alert("end");
  };
  return !emailSent ? (
    <h2
      style={{
        alignItems: "center",
        justifyContent: "center",
        gap: "4em",
      }}>
      <div
        style={{
          maxWidth: "400px",
        }}>
        <h2>
          Your score:{" "}
          {`${(
            (answers.flat().filter((x: boolean) => x === true).length * 100) /
            numberOfAllOptions
          ).toFixed(0)}% 🚀`}
          {/* star system here */}
        </h2>
        <br />
        Thanks for using the Rocket CRO tool <br />
        Enter your email to get the Audit + Results + List of action items
        <br />
      </div>
      <form ref={form} className='form_cta' onSubmit={handleSendCRO}>
        <input type='email' name='email' />
        <input type='submit' value='send' />

        {/* <TextFieldStyled name='name' label='Name' variant='outlined' /> */}
        {/* <TextFieldStyled
          name='business_url'
          type='url'
          required={false}
          label='Business URL'
          variant='outlined'
        /> */}
        {/* <TextFieldStyled
          name='email'
          type='email'
          label='Email'
          variant='outlined'
        /> */}

        {/* <Button
          type='submit'
          onClick={handleSendCRO}
          disabled={loading}
          variant='contained'>
          {loading ? "LOADING" : "Send Me!"}
        </Button> */}
      </form>
    </h2>
  ) : (
    <>
      <h2 style={{ display: "grid", gap: "3em" }}>
        <div>
          <h2>Go check your email 🚀 </h2>
          <ul style={{ listStyle: "inside" }}>
            <li>
              we sent you score along with detailed guidelines and instructions
              on how to optimise your page Read through the CRO audit, and send
              it to your team
            </li>
            <li>
              Use the instructions and guidelines to optimise your page for
              maximum conversions
            </li>
          </ul>
        </div>

        <div style={{ display: "grid", gap: "1em" }}>
          <h5
            style={{
              textAlign: "center",
              lineHeight: 1.6,
              marginTop: "1em",
              borderTop: "1px solid currentColor",
              paddingTop: "2em",
            }}>
            Do you know anyone how could benefit from this CRO Audit tool? just
            click below to send them this link
          </h5>
          <Button
            variant='contained'
            sx={{
              width: "90vw",
              marginInline: "auto",
              maxWidth: "300px",
            }}>
            Share
          </Button>
        </div>
      </h2>
    </>
  );
};

export default ShowResult;
