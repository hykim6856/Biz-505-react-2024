import { useState, useEffect, useCallback } from "react";
import "../css/TodoMemo.css";

const MemoTime = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  const newTimes = useCallback(() => {
    const now = new Date();
    const formattedTime = formatTime(now);
    const formattedDate = now.toISOString().slice(0, 10);
    setCurrentTime(formattedTime);
    setCurrentDate(formattedDate);
  }, []); // useCallback의 의존성 배열에 빈 배열을 전달하여 함수가 메모이제이션되도록 함

  useEffect(() => {
    newTimes();
  }, [newTimes]); // newTimes 함수를 의존성 배열에 추가

  const formatTime = (time) => {
    const hours = String(time.getHours()).padStart(2, "0");
    const minutes = String(time.getMinutes()).padStart(2, "0");
    const seconds = String(time.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <>
      <input type="text" value={currentDate} readOnly />
      <input type="text" value={currentTime} readOnly />
      <input type="button" onClick={newTimes} value="새로작성" readOnly />
    </>
  );
};

export default MemoTime;
