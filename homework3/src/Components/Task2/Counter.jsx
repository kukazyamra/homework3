import { useCallback, useState } from "react";
import List from "./List";
import ListWithoutCallBack from "./ListWithoutCallback";
function Counter() {
  console.log("Рендер counter");
  const [count, setCount] = useState(0);

  const increaseCount = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const decreaseCount = useCallback(() => {
    setCount((prev) => prev - 1);
  }, []);

  const increaseCountWithoutCallback = () => {
    setCount((prev) => prev + 1);
  };

  const decreaseCountWithoutCallback = () => {
    setCount((prev) => prev - 1);
  };

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
      <ListWithoutCallBack increase={increaseCountWithoutCallback} decrease={decreaseCountWithoutCallback} />
    </div>
  );
}

export default Counter;
