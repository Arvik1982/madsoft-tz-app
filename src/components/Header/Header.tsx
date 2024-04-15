import { Dispatch, SetStateAction } from "react";
import styles from "../Header/header.module.css";

interface TimerPropsInterface {
  timer: { minutes: number; seconds: number };
  setStartDate: Dispatch<SetStateAction<Date | null>>;
}

export default function HeaderTest({
  timer,
  setStartDate,
}: TimerPropsInterface) {
  return (
    <div className={styles.content}>
      <h1>Тестирование</h1>
      <div
        onClick={() => {
          setStartDate(null);
        }}
        className={styles.content__timer}
      >
        <div>{timer.minutes}:</div>
        <div>{timer.seconds}</div>
      </div>
    </div>
  );
}
