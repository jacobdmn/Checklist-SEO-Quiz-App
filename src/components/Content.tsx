import React, { useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { pink } from "@mui/material/colors";
import Radio from "@mui/material/Radio";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { useLocation } from "react-router-dom";
import { RadioGroup } from "@mui/material";

import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";

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

const icon_question =
  "https://rocket-conversions.com/storage/2020/09/cropped-Asset-4@2x-8-192x192.png";

const Content = ({ checklist }: { checklist: any }) => {
  /// track the current question
  const [currentQuestion, setCurrentQuestion] = useState(0);
  /// show the result
  const [showResult, setShowResult] = useState(false);

  /// hide "Next" button when there is only one choice, because the submit action will happen automatically after choosing
  const [hideNext, setHideNext] = useState(
    checklist.questions[0].options.length === 1 ? true : false
  );

  /// to store all answers
  const [answers, setAnswers] = useState<any[]>([]);

  const [checkedAnswersPerQuestion, setCheckedAnswersPerQuestion] = useState<
    boolean[]
  >([]);

  const controlProps = (isUsed: boolean, index: number) => ({
    onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      handleChangeChoice(e, index, isUsed),
    value: `Q${index}_${isUsed}`,
    name: `Q${index}_${isUsed}`,
    inputProps: { "aria-label": `Q${index}_${isUsed}` },
    sx: { transform: "scale(1.5)" },
  });

  const handleChangeChoice = (
    event: React.ChangeEvent<HTMLInputElement>,
    QuestionIndex: number,
    isUsed: boolean
  ) => {
    console.log("before: " + checkedAnswersPerQuestion);

    checkedAnswersPerQuestion[QuestionIndex] = isUsed;
    setCheckedAnswersPerQuestion(checkedAnswersPerQuestion);

    /// hide next button + show it only in the last question
    if (checklist.questions[currentQuestion].options.length === 1) {
      setTimeout(() => {
        handleSubmit();
      }, 300);
    }

    console.log("after: " + checkedAnswersPerQuestion);
    console.log(checkedAnswersPerQuestion);
    console.log("------------------------");
  };

  const handleSubmit = (e?: any) => {
    e && e.preventDefault();

    answers[currentQuestion] = [...checkedAnswersPerQuestion];
    setAnswers(answers);

    if (currentQuestion === checklist.questions.length - 1) {
      setShowResult(true);
      setCheckedAnswersPerQuestion([]);
      setCurrentQuestion(0);
      return;
    }

    setCurrentQuestion((prev) => prev + 1);
    setCheckedAnswersPerQuestion([]);

    checklist.questions[currentQuestion].options.length === 1
      ? setHideNext(true)
      : setHideNext(false);

    // currentQuestion === checklist.questions.length - 2
    //   ? setHideNext(false)
    //   : setHideNext(false);
  };

  const handleComeBack = () => {
    currentQuestion === checklist.questions.length - 1
      ? setCurrentQuestion(0)
      : setCurrentQuestion((prev) => prev - 1);
    setShowResult(false);
  };

  const { pathname } = useLocation();

  useEffect(() => {
    setCurrentQuestion(0);
    setCheckedAnswersPerQuestion([]);
    setShowResult(false);
    setHideNext(checklist.questions[0].options.length === 1 ? true : false);
  }, [pathname]);

  /// calculate options number, to make the score calculation
  let numberOfAllOptions = 0;
  checklist.questions.forEach((qst: any) => {
    numberOfAllOptions += qst.options.length;
  });

  return (
    <div className='checklist__container'>
      <div className='progressBar_container'>
        <div className='progressBar_pages_counter'>
          <div className='circle_gradient'>
            <img src={icon_question} alt='' width='100%' />
          </div>
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
                  (answers.flat().filter((x: boolean) => x === true).length *
                    100) /
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
                <div
                  className={
                    hideNext ? "submit__container hidden" : "submit__container"
                  }
                  onClick={handleSubmit}>
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
              <List className='options' dense>
                {currentQuestion <= checklist.questions.length - 1 &&
                  checklist.questions[currentQuestion].options.map(
                    (option: any, index: number) => (
                      <ListItem
                        className='option'
                        key={`${
                          option.optionTitle
                        }${new Date().getMilliseconds()}`}
                        // onClick={handleToggle(index)}
                        disablePadding>
                        <span className='option_icon'>
                          CRO
                          <br />{" "}
                          <span style={{ whiteSpace: "nowrap" }}>
                            Tip {index + 1}
                          </span>
                        </span>

                        <ListItemButton className='optionWrapper'>
                          <div>
                            <h3>
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
                          <div className='actions'>
                            <RadioGroup
                              sx={{
                                flexDirection: "row",
                                flexWrap: "nowrap",
                                gap: 0,
                              }}>
                              <Radio
                                {...controlProps(true, index)}
                                icon={<DoneIcon />}
                                checkedIcon={
                                  <DoneIcon
                                    sx={{
                                      transform: "scale(1.3)",
                                      border: "1px solid currentColor",
                                      borderRadius: "50%",
                                    }}
                                    color='success'
                                  />
                                }
                              />
                              <Radio
                                {...controlProps(false, index)}
                                icon={<CloseIcon />}
                                checkedIcon={
                                  <CloseIcon
                                    sx={{
                                      transform: "scale(1.3)",
                                      borderRadius: "50%",
                                      color: pink[800],
                                      border: "1px solid currentColor",
                                    }}
                                  />
                                }
                                sx={{
                                  transform: "scale(1.5)",
                                  color: pink[800],
                                  "&.Mui-checked": {
                                    color: pink[600],
                                  },
                                }}
                              />
                            </RadioGroup>
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
