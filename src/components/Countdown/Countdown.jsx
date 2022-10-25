import { useState, useEffect } from "react";
import { CountdownView } from "./Countdown.styles";

export const Countdown = ({ resend }) => {
  const [resendCount, setResendCount] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= 1) {
      setTimeout(() => {
        setCount(count - 1);
      }, 1000);
    }
  }, [count]);

  const handleResend = () => {
    setCount(90);
    setResendCount(resendCount + 1);
    resend();
  };

  return (
    <CountdownView>
      {count ? (
        <p className="countdown">
          <span>Resend SMS </span>
          <span className="time">{`${Math.floor(count / 60)} : ${Math.floor(
            count % 60
          )}`}</span>
        </p>
      ) : (
        <button
          className="resend"
          onClick={(e) => (!count ? handleResend() : null)}
        >
          {resendCount ? "Resend Code" : "Send Code"}
        </button>
      )}
    </CountdownView>
  );
};
