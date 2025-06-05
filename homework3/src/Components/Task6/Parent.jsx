import { useState, useCallback } from "react";
import MemoGreeting from "./MemoGreeting";
import Greeting from "./Greeting";
import MemoGreetingWithoutCallback from "./MemoGreetingWithoutCallback";
const names = [
  "Артем",
  "Евгений",
  "Алексей",
  "Мария",
  "Иван",
  "Ольга",
  "Дмитрий",
  "Екатерина",
  "Сергей",
  "Анна",
];

function Parent() {
  const getRandomName = () => {
    return names[Math.floor(Math.random() * names.length)];
  };

  const [count, setCount] = useState(0);
  const increaseCount = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

   const increaseCountWithoutCallback = () => {
    setCount((prev) => prev + 1);
  };

  const changeName = () => {
    setName(getRandomName);
  };

  const [name, setName] = useState(getRandomName());

  return (
    <div className="task">
      <h2>Задание 6</h2>
      <p>
        Имя: {name}{" "}
        <button onClick={changeName} type="button">
          Изменить
        </button>
      </p>
      <p>
        Счетчик: {count}{" "}
        <button onClick={increaseCount} type="button">
          Увеличить
        </button>
      </p>
      <div className="container">
        <Greeting name={name} increaseCount={increaseCount} />
        <MemoGreeting name={name} increaseCount={increaseCount} />
        <MemoGreetingWithoutCallback name={name} increaseCount={increaseCountWithoutCallback} /> 
      </div>
    </div>
  );
}

export default Parent;
