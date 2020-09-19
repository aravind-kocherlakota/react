import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo
} from "react";

const FunctionComponent = () => {
  const [count, setCount] = useState(0);
  const [divisible, setDivisible] = useState(0);
  let inputRef = useRef(null);

  useEffect(() => {
    console.log("component Did Mount");
    setInterval(() => {
      setCount(prevValue => prevValue + 1);
    }, 1000);
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    console.log("component Did Update");
    let element = document.getElementById("type");
    if (divisible % 2 === 0) {
      element.innerHTML = "Even";
    } else {
      element.innerHTML = "Odd";
    }
  }, [divisible]);

  const increment = () => {
    setDivisible(prevValue => prevValue + 1);
  };

  return (
    <div>
      {count},,,,,{divisible}
      <button onClick={increment}>ON Click </button>
      <p id="type"> </p>
      <input ref={inputRef} type="text" />
    </div>
  );
};

export default React.memo(FunctionComponent);
