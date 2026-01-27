import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router";

export default function AllRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [minServings, setMinServings] = useState(0);

  useEffect(() => {
    doApi();
  }, []);

  const doApi = async () => {
    const resp = await fetch("https://dummyjson.com/recipes");
    const data = await resp.json();
    setRecipes(data.recipes);
  };

  const filtered = recipes.filter((item) => item.servings >= minServings);

  return (
    <div style={{ direction: "rtl" }}>
      <input
        type="number"
        placeholder="מינימום מנות..."
        onChange={(e) => setMinServings(Number(e.target.value))}
      />

      <div style={{ display: "flex" }}>
        <ul>
          {filtered.map((item) => (
            <li key={item.id}>
              <Link to={`/all-recipes/${item.id}`}>{item.name}</Link>
            </li>
          ))}
        </ul>

        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
