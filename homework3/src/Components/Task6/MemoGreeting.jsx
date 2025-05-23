//Компонент зависит от имени, но не зависит от счетчика
import { memo } from "react";
const MemoGreeting = memo(function Greeting({ name }) {
  console.log("Рендер MemoGreeting");
  return (
    <div className="greeting">
      <p>Привет, {name}</p>
    </div>
  );
});
export default MemoGreeting;
