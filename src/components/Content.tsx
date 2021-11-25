import React, { useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Checkbox from "@mui/material/Checkbox";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";

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

const Content = ({ checklist }: { checklist: any }) => {
  //// hide questions when change... for animation purposes
  const [hidden, setHidden] = React.useState(false);

  /// track the current question
  const [currentQuestion, setCurrentQuestion] = useState(0);
  /// show the result
  const [showResult, setShowResult] = useState(false);

  /// to store all answers
  const [answers, setAnswers] = useState<any[]>([]);

  const [checkedAnswersPerQuestion, setCheckedAnswersPerQuestion] = useState<
    number[]
  >([]);

  /// add checked node to checked list
  const handleToggle = (indexOfOption: number) => () => {
    console.log("before: " + checkedAnswersPerQuestion);
    let tmp;
    if (checkedAnswersPerQuestion.includes(indexOfOption)) {
      tmp = checkedAnswersPerQuestion.filter(
        (index: number) => index !== indexOfOption
      );
    } else {
      tmp = [...checkedAnswersPerQuestion, indexOfOption];
    }
    setCheckedAnswersPerQuestion([...tmp]);
    console.log("after: " + tmp);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setHidden(true);

    answers[currentQuestion] = [...checkedAnswersPerQuestion];
    setAnswers(answers);

    if (currentQuestion === checklist.questions.length - 1) {
      setShowResult(true);
      setCheckedAnswersPerQuestion([]);
      setCurrentQuestion(0);
      return;
    }

    setCurrentQuestion((prev) => prev + 1);
    setTimeout(() => {
      setHidden(false);
    }, 500);
    setCheckedAnswersPerQuestion([]);
  };

  const handleComeBack = () => {
    currentQuestion === checklist.questions.length - 1
      ? setCurrentQuestion(0)
      : setCurrentQuestion((prev) => prev - 1);
    setShowResult(false);
    setHidden(false);
  };

  const { pathname } = useLocation();

  useEffect(() => {
    setCurrentQuestion(0);
    setShowResult(false);
    setHidden(false);
  }, [pathname]);

  let numberOfAllOptions = 0;
  checklist.questions.forEach((qst: any) => {
    numberOfAllOptions += qst.options.length;
  });

  return (
    <div className='checklist__container'>
      <div className='progressBar_container'>
        <div className='progressBar_pages_counter'>
          <div className='circle_gradient'></div>
          <div className='counter'>
            Question {currentQuestion + 1} / {checklist.questions.length}
          </div>
        </div>
        <div className='progressBar_percentage_counter'>
          <LinearProgressWithLabel
            value={100 * ((currentQuestion + 1) / checklist.questions.length)}
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
              {/* equation: get the number of all options on all questions and divide by it */}
              <h1>
                Your score:{" "}
                {`${(
                  (answers.flat().length * 100) /
                  numberOfAllOptions
                ).toFixed(0)}% 🚀`}
                <br />
                Wanna take You website to the next level?
                <br />
                Subscribe to receive Daily SEO Tips
                <TextField
                  id='outlined-name'
                  label='Email'
                  variant='outlined'
                  sx={{
                    width: "300px",
                    input: {
                      height: "5em",
                    },
                  }}
                />
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
                    {currentQuestion <= checklist.questions.length - 1 &&
                      checklist.questions[currentQuestion].questionTitle}
                  </span>
                </h3>
                <div
                  className={
                    currentQuestion === 0 ||
                    currentQuestion === checklist.questions.length - 1
                      ? `back__container hidden-display`
                      : `back__container`
                  }
                  onClick={handleComeBack}>
                  <b>BACK</b>
                </div>
                <div className='submit__container' onClick={handleSubmit}>
                  <b>
                    {currentQuestion === checklist.questions.length - 1
                      ? "FINISH"
                      : "NEXT"}
                  </b>
                  <button type='submit' className='submit'>
                    <ArrowForwardIcon />
                  </button>
                </div>
              </div>
              <List className={hidden ? `options hidden` : `options`} dense>
                {currentQuestion <= checklist.questions.length - 1 &&
                  checklist.questions[currentQuestion].options.map(
                    (option: any, index: number) => (
                      <ListItem
                        className='option'
                        key={`${
                          option.optionTitle
                        }${new Date().getMilliseconds()}`}
                        onClick={handleToggle(index)}
                        secondaryAction={
                          <Checkbox
                            edge='end'
                            onChange={handleToggle(index)}
                            checked={
                              checkedAnswersPerQuestion.indexOf(index) !== -1
                            }
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
  );
};

export default Content;
