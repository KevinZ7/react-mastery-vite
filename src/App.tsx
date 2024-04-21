import { Link } from "react-router-dom";
import "./App.css";
import { NavigationButton } from "./components/shared";

function App() {
  return (
    <div className="App">
      <h1>
        Welcome to React-Mastery-Vite, this is a collection of cool react
        components
      </h1>

      <p>Click any button below to go to the component!</p>

      <Link to="/pagination">
        <NavigationButton>Pagination Page</NavigationButton>
      </Link>
      <Link to="/bookstore">
        <NavigationButton>Bookstore Page</NavigationButton>
      </Link>
      <Link to="/wordle">
        <NavigationButton>Wordle</NavigationButton>
      </Link>
    </div>
  );
}

export default App;
