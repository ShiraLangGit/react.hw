import "./App.css";
import { Route } from "react-router";
import { Routes } from "react-router";
import AllRecipes from "./pages/AllRecipes";
import Recipe from "./pages/Recipe";
import NotFounde from "./pages/NotFound";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="all-recipes">
          <Route index element={<AllRecipes />} />
          <Route path=":id" element={<Recipe />} />
        </Route>
        <Route path="*" element={<NotFounde />}></Route>
      </Routes>
    </>
  );
}

export default App;
