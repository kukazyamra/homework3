//Компонент зависит от имени, но не зависит от счетчика
import { memo } from "react";
const MemoGreeting = memo(function Greeting({ name, withCallback }) {
  console.log(withCallback ? "Рендер MemoGreeting с useCallback" : "Рендер MemoGreeting без useCallback");
  return (
    <div className="greeting">
      <p>Привет, {name}</p>
    </div>
  );
});
export default MemoGreeting;
