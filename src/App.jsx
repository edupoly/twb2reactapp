import { useEffect, useRef } from "react";
import Navbar from "./component/Navbar";
import Counter from "./features/Counter";
import Another from "./Another";
function App() {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();

  useEffect(() => {
    ref1.current.focus();
  }, []);
  function handleRef1(ev) {
    if (ev.key === "Enter") {
      ref2.current.focus();
    }
  }
  function handleSecondInput(e) {
    if (e.key === "Enter") {
      ref3.current.focus();
    }
  }
  return (
    <div className="m-5 p-5 border border-2 border-danger rounded">
      <Navbar></Navbar>
      <h1>Hello App</h1>
      <input
        type="text"
        ref={ref1}
        onKeyUp={(e) => {
          handleRef1(e);
        }}
      />
      <br />
      <br />
      <br />
      <input
        type="text"
        ref={ref2}
        onKeyUp={(ev) => {
          handleSecondInput(ev);
        }}
      />
      <Another aref={ref3} cref={ref4}></Another>
      <br />
      <br />
      <input type="text" placeholder="Enter city name" ref={ref4} />
    </div>
  );
}

export default App;
