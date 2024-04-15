import styles from "../Body/body.module.css";
import { Dispatch, SetStateAction, useEffect } from "react";
import { testDataArray } from "../../testData/testData";
import { useState } from "react";
import { useSelector } from "react-redux";
import store from "../../store/indexStore";

type IRootStoreType = ReturnType<typeof store.getState>;

type ElementType = {
  answerText: string;
  id: number;
  selected: boolean;
};

type AnswerElementType = {
  0: string;
  1: ElementType;
};

type DataArrayElementType = {
  answerVariants: {};
  freeQuestion: boolean;
  id: number;
  questionText: string;
  rightAnswerId: Array<number>;
  singleAnswer: boolean;
  statusChecked: string;
  textAnswer: string | undefined;
};

interface PropsBody {
  progress: number;
  setProgress: Dispatch<SetStateAction<number>>;
}

export default function BodyTest({ progress, setProgress }: PropsBody) {
  const testOverTime: boolean = useSelector(
    (state: IRootStoreType) => state.appRedux.timeOver
  );

  const [testStatusOver, setTestStatusOver] = useState(false);
  const [textValue, setTextValue] = useState("");
  const [workArr, setWorkArr] = useState<typeof testDataArray>([]);
  const [dataRefresh, setDataRefresh] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    workArr.length === 0 ? setWorkArr(testDataArray) : "";
    localStorage.getItem("testDataArrayUpdated") !== null
      ? setWorkArr(
          JSON.parse(localStorage.getItem("testDataArrayUpdated") || "")
        )
      : "";
  }, []);

  function setActiveButton(el: DataArrayElementType) {
    if (el.freeQuestion) {
      let result;
      !textValue && !el.textAnswer ? (result = false) : (result = true);
      return result;
    }
    const newArr: boolean[] = [];
    const allVars: Array<AnswerElementType> = Object.entries(el.answerVariants);
    allVars.forEach((item: AnswerElementType) => {
      newArr.push(item[1].selected);
    });
    const result = textValue
      ? true
      : newArr.find((el) => {
          return el === true;
        });
    return result;
  }
  // изменение линии прогресса
  const navigationBarFunc = (el: DataArrayElementType): void => {
    if (el.statusChecked === "compleat" || el.statusChecked === "current") {
      dataRefresh ? setDataRefresh(false) : setDataRefresh(true);
      setProgress(el.id);
    }
  };
  // кнопка ответить
  const answerButtonClick = (el: DataArrayElementType) => {
    if (setActiveButton(el)) {
      el.statusChecked = "compleat";
      localStorage.setItem("testDataArrayUpdated", JSON.stringify(workArr));
      setTextValue("");
      testDataArray.length - 1 > progress
        ? setProgress(el.id + 1)
        : setTestStatusOver(true);
      setWorkArr(
        JSON.parse(localStorage.getItem("testDataArrayUpdated") || "")
      );
      setError("");
    } else {
      setError("Поля не заполнены");
    }
  };
  //  внесение данных ответа в поля с текстом
  const textAreaHandleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    el: DataArrayElementType
  ): void => {
    setTextValue(e.target.value);
    el.textAnswer = e.target.value;
    dataRefresh ? setDataRefresh(false) : setDataRefresh(true);
  };
  //  внесение данных ответа в поля с одним вариантом ответа
  const radioAnswerClick = (
    el: DataArrayElementType,
    answerVariant?: AnswerElementType
  ): void => {
    const allAnswers = Object.entries(el.answerVariants);
    for (let i = 0; i <= Object.entries(el.answerVariants).length - 1; i += 1) {
      let newData: any = allAnswers[i][1];
      newData.selected = false;
    }
    answerVariant ? (answerVariant[1].selected = true) : "";
    dataRefresh ? setDataRefresh(false) : setDataRefresh(true);
  };
  //  внесение данных ответа в поля с несколькими вариантами
  const checkBoxAnswerClick = (answerVariant?: AnswerElementType): void => {
    if (answerVariant) {
      answerVariant[1].selected
        ? (answerVariant[1].selected = false)
        : (answerVariant[1].selected = true);
    }
    dataRefresh ? setDataRefresh(false) : setDataRefresh(true);
  };

  return (
    <div className={styles.content}>
      {testOverTime && (
        <h3 style={{ position: "absolute", marginTop: "15px", color: "red" }}>
          Время теста вышло
        </h3>
      )}
      {/* progress bar */}
      <div className={styles.content__progress}>
        {workArr?.map((el) => {
          if (el.statusChecked !== "compleat") {
            el.id === progress ? (el.statusChecked = "current") : "";
          }
          return (
            <div
              key={el.id}
              onClick={() => {
                navigationBarFunc(el);
              }}
              className={
                el.statusChecked === "compleat"
                  ? styles.progress__line_ready
                  : el.statusChecked === "current"
                  ? styles.progress__line_active
                  : styles.progress__line_start
              }
            ></div>
          );
        })}
      </div>

      {testStatusOver && (
        <h2 style={{ position: "absolute" }}> Тест завершен </h2>
      )}

      {/* question block */}
      {!testStatusOver && (
        <>
          {workArr?.map((el) => {
            return (
              <div
                key={el.id + 1}
                className={
                  el.id === progress
                    ? styles.content__question_block
                    : styles.item__element_display
                }
              >
                <h2 className={styles.content__question}>{el.questionText}</h2>
                {/* text questions */}
                <div className={styles.content__answers}>
                  {el.freeQuestion && (
                    <textarea
                      value={textValue ? textValue : el.textAnswer}
                      onChange={(e) => {
                        textAreaHandleChange(e, el);
                      }}
                      className={styles.content__answers_item}
                    ></textarea>
                  )}
                  {/* select questions */}
                  {!el.freeQuestion && (
                    <div className={styles.content__answers_item}>
                      {el.answerVariants
                        ? Object.entries(el.answerVariants).map(
                            (answerVariant) => {
                              return (
                                <div
                                  key={answerVariant[1].id + 3}
                                  className={styles.answers_item_element}
                                >
                                  {/* radio */}
                                  {el.singleAnswer && (
                                    <input
                                      checked={answerVariant[1].selected}
                                      type="radio"
                                      onChange={() => {
                                        radioAnswerClick(el, answerVariant);
                                      }}
                                    ></input>
                                  )}
                                  {/* checkBox */}
                                  {!el.singleAnswer && (
                                    <input
                                      checked={answerVariant[1].selected}
                                      type="checkBox"
                                      onChange={() => {
                                        checkBoxAnswerClick(answerVariant);
                                      }}
                                    ></input>
                                  )}
                                  <div>{answerVariant[1].answerText}</div>
                                </div>
                              );
                            }
                          )
                        : ""}
                    </div>
                  )}
                </div>
                {error && (
                  <span style={{ color: "red", position: "absolute" }}>
                    {error}
                  </span>
                )}
                {/* answer button */}
                <button
                  onClick={() => {
                    answerButtonClick(el);
                  }}
                  className={styles.content__button}
                  type="button"
                >
                  Ответить
                </button>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}
