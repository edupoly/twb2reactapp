import React, { useState, useRef } from "react";

function Stopwatch() {
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  let t1 = useRef();
  function play() {
    t1.current = setInterval(() => {
      setSec((pv) => {
        if (pv == 60) {
          setMin((pm) => pm + 1);
          return 0;
        } else {
          return pv + 1;
        }
      });
    }, 100);
  }
  function pause() {
    clearInterval(t1.current);
  }
  function stop() {
    clearInterval(t1.current);
    setMin(0);
    setSec(0);
  }
  return (
    <div className="mybox">
      <h1>
        {min}:{sec}
      </h1>
      <button
        onClick={() => {
          play();
        }}
      >
        Play
      </button>
      <button
        onClick={() => {
          pause();
        }}
      >
        Pause
      </button>
      <button
        onClick={() => {
          stop();
        }}
      >
        Stop
      </button>
    </div>
  );
}

export default Stopwatch;
