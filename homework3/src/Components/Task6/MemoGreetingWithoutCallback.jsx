//Компонент зависит от имени, но не зависит от счетчика
import { memo } from "react";
const MemoGreetingWithoutCallback = memo(function Greeting({ name }) {
  console.log("Рендер MemoGreeting без useCallback");
  return (
    <div className="greeting">
      <p>Привет, {name}</p>
    </div>
  );
});
export default MemoGreetingWithoutCallback;
