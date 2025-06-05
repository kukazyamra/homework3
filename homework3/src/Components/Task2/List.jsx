import { memo } from "react";

const List = memo(function List({ increase, decrease }) {
  console.log("Рендер списка с useCallback");
  return (
    <>
      <p>В этот список переданы функции с useCallback</p>
      <ul>
        <li>Элемент 1</li>
        <li>Элемент 2</li>
        <li>Элемент 3</li>
      </ul>
    </>
  );
});

export default List;
