import { useRef, useState } from "react";

function Input() {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);
  const [previousInputValue, setPreviousInputValue] = useState("");

  const handleInputChange = (e) => {
    setPreviousInputValue(inputValue);
    setInputValue(e.target.value);
  };

  const handleFocusClick = () => {
    inputRef.current.focus();
  };

  return (
    <div className="task">
      <h2>Задание 4</h2>
      <input
        onChange={handleInputChange}
        value={inputValue}
        ref={inputRef}
        type="text"
      />
      <button onClick={handleFocusClick} type="button">
        Фокус
      </button>
      <p>Предыдущее значение: {previousInputValue}</p>
    </div>
  );
}

export default Input;
