import { useReducer, useState } from "react";
import Task from "./Task";

function taskReducer(tasks, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...tasks,
        { id: Date.now(), name: action.payload, completed: false },
      ];
    case "TOGGLE_TODO":
      return tasks.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );
    case "DELETE_TODO":
      return tasks.filter((task) => task.id !== action.payload);
    default:
      return tasks;
  }
}

function ToDoList() {
  const [tasks, dispatchTask] = useReducer(taskReducer, []);
  const [taskName, setTaskName] = useState("");

  const handleTaskChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleAddTask = () => {
    if (taskName.trim() !== "") {
      dispatchTask({ type: "ADD_TODO", payload: taskName });
      setTaskName("");
    }
  };

  return (
    <div className="task todo">
      <h2>Задание 5</h2>
      <input onChange={handleTaskChange} value={taskName} type="text" />

      <button onClick={handleAddTask} type="button">
        Добавить задачу
      </button>
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          name={task.name}
          completed={task.completed}
          dispatch={dispatchTask}
        />
      ))}
    </div>
  );
}

export default ToDoList;
