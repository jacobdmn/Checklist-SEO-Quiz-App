import React, { useState } from "react";
import "./style/index.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Checkbox from "@mui/material/Checkbox";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import checklists from "./data";

import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant='determinate' {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant='body2' color='white'>{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

function App() {
  /// user choses a checklist, we get its ID

  const [showPages, setShowPages] = useState(true);

  const [currentChecklist, setCcurrentChecklist] = useState(checklists[0]);

  /// track the current question
  const [currentQuestion, setCurrentQuestion] = useState(0);

  /// show the result
  const [showResult, setShowResult] = useState(false);

  const [checked, setChecked] = React.useState<number[]>([]);
  const [answers, setAnswers] = React.useState<number[]>([]);

  //// hide questions when change... for animation
  const [hidden, setHidden] = React.useState(false);

  const quizzes = checklists.map(({ title, description }: any) => ({
    title,
    description,
  }));

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setHidden(true);
    if (currentQuestion === currentChecklist.questions.length - 1) {
      setShowResult(true);
      return;
    }
    // setAnswers((prev) => [...prev, ...checked]);
    // alert(answers);
    setChecked([]);

    setTimeout(() => {
      setCurrentQuestion((prev) => prev + 1);
      setHidden(false);
    }, 500);
  };

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleComeBack = () => {
    currentQuestion === currentChecklist.questions.length - 1
      ? setCurrentQuestion(0)
      : setCurrentQuestion((prev) => prev - 1);
    setShowResult(false);
    setHidden(false);
  };

  if (showPages)
    return (
      <div className='App'>
        <div className='checklist__intro__container'>
          <h1>
            Use these scored checklists to increase your conversion rate and
            revenue.
          </h1>
          <ul className='checklist__ul'>
            {quizzes.map(({ title }: any, idx: number) => (
              <li
                key={idx}
                onClick={() => {
                  setCcurrentChecklist(checklists[idx]);
                  setShowPages(false);
                }}>
                {title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );

  return (
    <div className='App'>
      <div className='checklist__container'>
        {/* <div className='checklist__title'>
          <h2 className='kinda-title'>{currentChecklist.title}</h2>
          <p>{currentChecklist.description}</p>
        </div> */}
        <div className='progressBar_container'>
          <div className='progressBar_pages_counter'>
            <div className='circle_gradient'></div>
            <div className='counter'>
              Question {currentQuestion + 1} /{" "}
              {currentChecklist.questions.length}
            </div>
          </div>
          <div className='progressBar_percentage_counter'>
            <LinearProgressWithLabel
              value={
                100 *
                ((currentQuestion + 1) / currentChecklist.questions.length)
              }
              color='secondary'
              sx={{
                background: "none",
                borderRadius: "1em",
                height: "8px",
                span: {
                  background: "#1BC8F1",
                  transition: "all 0.5s ease",
                  // background: "#469acd",
                  height: "8px",
                  float: "left",
                  display: "block",
                  borderRadius: "10px",
                },
              }}
            />
          </div>
        </div>
        <form className='checklist_form_QA' onSubmit={handleSubmit}>
          <div className='checklist__questions'>
            {showResult ? (
              <>
                {/* the last stage show result  */}
                <h1
                  style={{
                    display: "grid",
                    placeContent: "center",
                    flex: 1,
                  }}>
                  Your score:{" "}
                  {`${
                    (answers.length * currentChecklist.questions.length) / 100
                  }% 🚀`}
                  <button
                    className='submit goBack'
                    onClick={() => setShowPages(true)}>
                    BACK
                  </button>
                </h1>
              </>
            ) : (
              <>
                <div className='form_header'>
                  <h3 className='questionTitle'>
                    <span className='icon'>
                      {String.fromCharCode(65 + currentQuestion)}
                    </span>
                    <span className='text kinda-title'>
                      {
                        currentChecklist.questions[currentQuestion]
                          .questionTitle
                      }
                    </span>
                  </h3>
                  <div
                    className={
                      currentQuestion === 0 ||
                      currentQuestion === currentChecklist.questions.length - 1
                        ? `back__container hidden-display`
                        : `back__container`
                    }
                    onClick={handleComeBack}>
                    <b>BACK</b>
                  </div>
                  <div className='submit__container' onClick={handleSubmit}>
                    <b>
                      {currentQuestion === currentChecklist.questions.length - 1
                        ? "FINISH"
                        : "NEXT"}
                    </b>
                    <button type='submit' className='submit'>
                      <ArrowForwardIcon />
                    </button>
                  </div>
                </div>
                <List className={hidden ? `options hidden` : `options`} dense>
                  {currentChecklist.questions[currentQuestion].options.length >
                    0 &&
                    currentChecklist.questions[currentQuestion].options.map(
                      (option: any, index: number) => (
                        <ListItem
                          className='option'
                          key={index}
                          onClick={handleToggle(index)}
                          secondaryAction={
                            <Checkbox
                              edge='end'
                              onChange={handleToggle(index)}
                              checked={checked.indexOf(index) !== -1}
                              inputProps={{
                                "aria-labelledby": option.optionTitle,
                              }}
                              sx={{
                                transform: "scale(1.5)",
                              }}
                            />
                          }
                          disablePadding>
                          <ListItemButton>
                            <div>
                              <h3>
                                <span className='option_icon'>
                                  <img
                                    src='https://cdn1.iconfinder.com/data/icons/powerful-seo-icon-set/512/rocket_1__.png'
                                    alt=''
                                  />
                                </span>
                                <span className='option_text'>
                                  {option.optionTitle}
                                </span>
                              </h3>
                              {option.optionDescription.length > 0 && (
                                <p className='option_details'>
                                  {option.optionDescription.map(
                                    (optionDescriptionNode: string) => (
                                      <span key={optionDescriptionNode}>
                                        {optionDescriptionNode}
                                      </span>
                                    )
                                  )}
                                </p>
                              )}
                            </div>
                          </ListItemButton>
                        </ListItem>
                      )
                    )}
                </List>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
