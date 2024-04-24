import { useEffect, useRef, useState } from "react";
import "./countdown.module.css";

function CountDown() {
  const [countDown, setCountDown] = useState(10);
  const timer = useRef();

  useEffect(() => {
    timer.current = setInterval(() => {
      setCountDown((prev) => {
        if (prev > 0) {
          return prev - 1;
        } else {
          clearInterval(timer.current);
          return 0;
        }
      });
    }, 1000);
    return () => clearInterval(timer.current);
  }, []);

  return <p className="font-weight-300">{countDown}</p>;
}

export default CountDown;
