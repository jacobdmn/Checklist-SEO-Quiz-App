import React from "react";
import TextField from "@mui/material/TextField";
import "./style.css";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Button from "@mui/material/Button";

const UpdateCRO = ({ checklists }: { checklists: any }) => {
  const handleUpdateCRO = (e: any) => {
    e.preventDefault();
  };
  return (
    <div className='updateCRO__wrapper'>
      <h1>Update CRO Checklists</h1>
      <form className='settings_container' onSubmit={handleUpdateCRO}>
        {checklists.map((checklist: any) => (
          <div className='checklist' key={checklist.title + new Date()}>
            <h2>
              <TextField type='text' value={`Title: ${checklist.title}`} />
            </h2>
            {checklist.questions.map((question: any, qst_index: number) => (
              <div
                className='question'
                key={question.questionTitle + checklist.title}>
                <h3>
                  {`Audit ${qst_index + 1}: `}
                  <TextareaAutosize
                    value={question.questionTitle}
                    style={{
                      width: "100%",
                      padding: "1em",
                      background: "none",
                      color: "white",
                    }}
                  />
                </h3>
                <ul>
                  Answers:
                  {question.options.map((option: any) => (
                    <li key={option + checklist.title}>
                      <TextareaAutosize
                        value={option}
                        style={{
                          width: "100%",
                          padding: "1em",
                          background: "none",
                          color: "white",
                        }}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}

        <div className='submit_container'>
          <Button type='submit'>Submit changes</Button>
        </div>
      </form>
    </div>
  );
};

export default UpdateCRO;
