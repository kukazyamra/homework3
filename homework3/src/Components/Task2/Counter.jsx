import { useCallback, useState } from "react";
import List from "./List";

function Counter() {
  const [count, setCount] = useState(0);
  const increaseCount = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const decreaseCount = useCallback(() => {
    setCount((prev) => prev - 1);
  }, []);

  return (
    <div className="task">
      <h2>Задание 2</h2>
      <p>Счетчик: {count}</p>
      <button type="button" onClick={increaseCount}>
        Увеличить
      </button>
      <button type="button" onClick={decreaseCount}>
        Уменьшить
      </button>
      <List increase={increaseCount} decrease={decreaseCount} />
    </div>
  );
}

export default Counter;
