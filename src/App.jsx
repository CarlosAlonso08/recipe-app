import { Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import HomePage from "./pages/HomePage";
import Favorites from "./pages/Favorites";
import RecipeDetails from "./components/RecipeDetails";

function App() {
  return (
    <>
      <div className="flex">
        <SideBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/details/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
