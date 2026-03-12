import { useEffect, useState } from "react";

export function useCounter() {
  const [count, setCount] = useState(0);

  function inc() {
    setCount((pc) => pc + 1);
  }
  function dec() {
    setCount((pc) => pc - 1);
  }
  useEffect(() => {
    if (window.localStorage.getItem("count")) {
      setCount(+window.localStorage.getItem("count"));
    } else {
      window.localStorage.getItem("count", 0);
    }
  }, []);
  useEffect(() => {
    window.localStorage.setItem("count", count);
  }, [count]);

  return [count, inc, dec];
}
