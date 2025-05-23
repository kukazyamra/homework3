import "./App.css";
import Counter from "./Components/Task2/Counter";
import NumbersList from "./Components/Task3/NumbersList";
import Input from "./Components/Task4/Input";
import ToDoList from "./Components/Task5/ToDoList";
import Parent from "./Components/Task6/Parent";
import { ThemeProvider } from "./ThemeContext";
import ThemeToggle from "./Components/Task1/ThemeToggle";

function App() {
  return (
    <ThemeProvider>
      <ThemeToggle />
      <div className="container">
        <Counter />
        <NumbersList />
        <Input />
      </div>
      <div className="container">
        <ToDoList />
        <Parent />
      </div>
    </ThemeProvider>
  );
}

export default App;
