import { memo } from "react";

const List = memo(function List({ increase, decrease }) {
  console.log("Рендер списка");
  return (
    <>
      <p>Список зависим от Counter!</p>
      <ul>
        <li>
          <button onClick={increase} type="button">
            Увеличить
          </button>
        </li>
        <li>
          <button onClick={decrease} type="button">
            Уменьшить
          </button>
        </li>
      </ul>
    </>
  );
});

export default List;
