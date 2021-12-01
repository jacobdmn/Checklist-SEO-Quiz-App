import React, { useState, useEffect } from "react";
import ShowResult from "./ShowResult";
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

const icon_question =
  "https://rocket-conversions.com/storage/2020/09/cropped-Asset-4@2x-8-192x192.png";

const rocket_img =
  "https://cdn2.iconfinder.com/data/icons/vivid/48/rocket-512.png";
// "https://cdn3.iconfinder.com/data/icons/space-255/64/Flying_Rocket-512.png";

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
    any[]
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

    setTimeout(() => {
      !checkedAnswersPerQuestion.includes(null) && handleSubmit();
    }, 500);

    console.log("after: " + checkedAnswersPerQuestion);
    console.log(checkedAnswersPerQuestion);
    console.log("------------------------");
  };

  const handleSubmit = (e?: any) => {
    e && e.preventDefault();

    answers[currentQuestion] = [...checkedAnswersPerQuestion];
    setAnswers(answers);

    if (currentQuestion === checklist.questions.length - 1) {
      console.log(answers);
      setShowResult(true);
      setCheckedAnswersPerQuestion([]);
      setCurrentQuestion(0);
      return;
    }

    setCurrentQuestion((prev) => prev + 1);
    setCheckedAnswersPerQuestion([]);

    setHideNext(
      checklist.questions[currentQuestion + 1].options.length === 1
        ? true
        : false
    );

    let tmp_arr: any = [];
    for (
      let i = 0;
      i <= checklist.questions[currentQuestion + 1].options.length - 1;
      i++
    )
      tmp_arr[i] = null;

    setCheckedAnswersPerQuestion(tmp_arr);

    console.log(tmp_arr);
  };

  const handleComeBack = () => {
    currentQuestion === checklist.questions.length - 1
      ? setCurrentQuestion(0)
      : setCurrentQuestion((prev) => prev - 1);
    setShowResult(false);
  };

  const { pathname } = useLocation();

  useEffect(() => {
    setAnswers([]);
    setCurrentQuestion(0);
    // setShowResult(false);      /// this is the normal one
    setShowResult(false); //// this is for test
    setHideNext(checklist.questions[0].options.length === 1 ? true : false);

    setCheckedAnswersPerQuestion([]);

    let tmp_arr: any = [];
    for (let i = 0; i <= checklist.questions[0].options.length - 1; i++)
      tmp_arr[i] = null;

    setCheckedAnswersPerQuestion(tmp_arr);

    console.log(tmp_arr);
  }, [pathname]);

  /// calculate options number, to make the score calculation
  let numberOfAllOptions = 0;
  checklist.questions.forEach((qst: any) => {
    numberOfAllOptions += qst.options.length;
  });

  function LinearProgressWithLabel(
    props: LinearProgressProps & { value: number }
  ) {
    return (
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ position: "relative", width: "100%", mr: 1 }}>
          <LinearProgress variant='determinate' {...props} />
          <div
            className={
              checklist.questions.length - 1 === currentQuestion
                ? "lunch_rocket_wow"
                : ""
            }
            style={{
              position: "absolute",
              transition: "all .3s ease-in-out",
              top: "-24px",
              transform: "translateX(-12px) rotate(45deg)",
              left: `${props.value}%`,
              display: "inline-block",
            }}>
            <img className='animated_rocket' src={rocket_img} alt='' />
          </div>
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant='body2' color='white'>{`${Math.round(
            props.value
          )}%`}</Typography>
        </Box>
      </Box>
    );
  }

  return (
    <div className='checklist__container'>
      {!showResult && (
        <div className='progressBar_container'>
          <div className='progressBar_pages_counter'>
            <div className='circle_gradient'>
              <img src={icon_question} alt='' width='100%' />
            </div>
            <div className='counter'>
              Audit {currentQuestion + 1} / {checklist.questions.length}
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
                  // background: "#1BC8F1",   // blue sky
                  background: "#fd8557",
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
      )}

      <form
        className={
          showResult ? "checklist_form_QA showResult" : "checklist_form_QA"
        }
        onSubmit={handleSubmit}>
        <div className='checklist__questions'>
          {showResult ? (
            <ShowResult
              answers={answers}
              numberOfAllOptions={numberOfAllOptions}
            />
          ) : (
            <>
              <div className='form_header'>
                <h3 className='questionTitle'>
                  <span className='text kinda-title'>
                    {currentQuestion <= checklist.questions.length - 1 &&
                      checklist.questions[currentQuestion].questionTitle}
                  </span>
                </h3>
                {/* <div
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
                </div> */}
              </div>
              <List className='options' dense>
                <div className='YesNo'>
                  <div>
                    <DoneIcon color='success' />
                  </div>
                  <div>
                    <CloseIcon color='warning' />
                  </div>
                </div>
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
                                color='success'
                              />
                              <Radio
                                {...controlProps(false, index)}
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
