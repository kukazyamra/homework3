import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? "Темная тема" : "Светлая тема"}
    </button>
  );
};

export default ThemeToggle;
