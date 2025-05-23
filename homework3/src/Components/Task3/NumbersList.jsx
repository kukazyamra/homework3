import { useMemo, useState, useEffect } from "react";

function NumbersList() {
  const [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState([]);

  const generateNumbers = () => {
    const newNumbers = Array.from(
      { length: 5 },
      () => Math.floor(Math.random() * 100) + 1
    );
    setNumbers(newNumbers);
  };

  const increaseCount = () => {
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    generateNumbers();
  }, []);

  const sum = useMemo(() => {
    console.log("Пересчет суммы");
    return numbers.reduce((a, b) => a + b, 0);
  }, [numbers]);

  return (
    <div className={`task`}>
      <h2>Задание 3</h2>
      <p className="inline">Счетчик: {count}</p>
      <button className={`inline`} type="button" onClick={increaseCount}>
        Увеличить счетчик
      </button>
      <p>Список чисел: {numbers.join(", ")}</p>
      <p>Сумма чисел: {sum}</p>
      <button onClick={generateNumbers} type="button">
        Сгенерировать новые числа
      </button>
    </div>
  );
}

export default NumbersList;
