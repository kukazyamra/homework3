import { memo } from "react";

const List = memo(function List({ increase, decrease, withCallback }) {
  console.log(withCallback ? "Рендер списка с useCallback": "Рендер списка без useCallback");
  return (
    <>
      <p>{withCallback ? "В этот список переданы функции с useCallback": "В этот список переданы функции с useCallback"}</p>
      <ul>
        <li>Элемент 1</li>
        <li>Элемент 2</li>
        <li>Элемент 3</li>
      </ul>
    </>
  );
});

export default List;
