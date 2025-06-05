import { memo } from "react";

const ListWithoutCallBack= memo(function List({ increase, decrease }) {
  console.log("Рендер списка без useCallback");
  return (
    <>
      <p>В этот список переданы функции без useCallback</p>
      <ul>
        <li>Элемент 1</li>
        <li>Элемент 2</li>
        <li>Элемент 3</li>
      </ul>
    </>
  );
});

export default ListWithoutCallBack;
