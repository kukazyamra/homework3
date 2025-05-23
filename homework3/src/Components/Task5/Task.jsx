function Task({ name, id, completed, dispatch }) {
  const handleToggleClick = () => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  };

  const handleDeleteClick = () => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };
  
  return (
    <>
      <p>
        Задача: {name}, Выполнена: <b>{completed ? "Да" : "Нет"}</b>
        <button onClick={handleToggleClick} type="button">
          Переключить
        </button>
        <button onClick={handleDeleteClick} type="button">
          Удалить
        </button>
      </p>
    </>
  );
}

export default Task;
