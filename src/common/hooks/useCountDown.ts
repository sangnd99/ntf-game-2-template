import { useState, useEffect } from "react";

const useCountDown = (targetDate: Date) => {
  const countDownDate = targetDate.getTime();
  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime(),
  );
  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);
    return () => clearInterval(interval);
  }, [countDownDate]);
  return getReturnValue(countDown);
};

const getReturnValue = (countDown: number) => {
  // Calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
  return [
    only2Number(days),
    only2Number(hours),
    only2Number(minutes),
    only2Number(seconds),
  ];
};

export { useCountDown };

const only2Number = (number: number) => {
  const converted = String(number);
  if (converted.length < 2) {
    return `0${converted}`;
  }
  return converted;
};
