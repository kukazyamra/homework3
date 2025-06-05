import { useRef, useState } from "react";

function Input() {
  console.log('rednder input');
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);
  const prevValueRef = useRef(null);

  const handleInputChange = (e) => {
    prevValueRef.current = inputValue;
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
      <p>Предыдущее значение: {prevValueRef.current}</p>
    </div>
  );
}

export default Input;
