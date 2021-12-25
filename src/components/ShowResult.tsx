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
  checklist: any;
  answers: any;
  numberOfAllOptions: number;
}> = ({ checklist, answers, numberOfAllOptions }) => {
  const form = useRef();

  const [loading, setLoading] = React.useState(false);
  const [emailSent, setEmailSent] = React.useState(false);

  const score = (
    (answers.flat().filter((x: boolean) => x === true).length * 100) /
    numberOfAllOptions
  ).toFixed(0);

  const false_answers = answers
    .map((question: boolean[], index: number) => {
      if (question.includes(false))
        return checklist.questions[index].questionTitle;
      return question;
    })
    .filter((question: any) => !question.includes(true))
    .join("\n")
    .toString();
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
          Your score: {`${score}% 🚀`}
          {/* star system here */}
        </h2>
        <br />
        Thanks for using the Rocket CRO tool <br />
        Enter your email to get:
        <ul>
          <li>the Audit</li>
          <li>Results</li>
          <li>List of action items</li>
        </ul>
        <br />
      </div>
      <form ref={form} className='form_cta'>
        <TextFieldStyled
          name='name'
          type='text'
          required={false}
          label='Name'
          variant='outlined'
        />
        <TextFieldStyled
          name='business_url'
          type='url'
          required={false}
          label='Business URL'
          variant='outlined'
        />
        <TextFieldStyled
          name='email'
          type='email'
          required
          label='Email'
          variant='outlined'
        />

        <input type='hidden' name='checklist' value={checklist.title} />
        <input type='hidden' name='score' value={score} />
        <textarea
          name='false_answers'
          value={false_answers}
          style={{ display: "none", whiteSpace: "pre-wrap" }}
        />
        <Button
          disabled={loading}
          variant='contained'
          onClick={() => {
            setLoading(true);

            emailjs
              .sendForm(
                "gmail_service",
                "quiz_result",
                form.current,
                "user_UIdPWAWbp27Vutic3cQO5"
              )
              .then(
                (result) => {
                  setEmailSent(true);
                  // alert("Sent!");
                  console.log(false_answers);
                },
                (error) => {
                  alert("Oops ! Problem accured! " + error.text);
                  setLoading(false);
                }
              );
          }}>
          {loading ? "LOADING" : "Send Me!"}
        </Button>
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
