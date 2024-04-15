import { SetStateAction, useEffect, useState } from "react";
import "./app.module.css";
import BodyTest from "./components/Body/Body";
import HeaderTest from "./components/Header/Header";
import getTimerValue from "./functions/getTimerValue";
import { setTimeOver } from "./store/slices/appSlice";
import { useDispatch } from "react-redux";

function App() {
  const [progress, setProgress] = useState(0);
  const [endDate] = useState<SetStateAction<Date | null>>(null);
  const [startDate, setStartDate] = useState<SetStateAction<Date | null>>(
    new Date()
  );
  const [timer, setTimer] = useState(getTimerValue(endDate, startDate));
  const dispatch = useDispatch();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer(getTimerValue(endDate, startDate));
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [endDate, startDate]);

  useEffect(() => {
    timer.seconds === 30 ? setStartDate(null) : "";
  }, [timer.seconds]);

  useEffect(() => {
    startDate === null ? dispatch(setTimeOver(true)) : "";
  }, [startDate]);

  return (
    <div>
      <HeaderTest timer={timer} setStartDate={setStartDate} />
      <BodyTest progress={progress} setProgress={setProgress} />
    </div>
  );
}

export default App;
