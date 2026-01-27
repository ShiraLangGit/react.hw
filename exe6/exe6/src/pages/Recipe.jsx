import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function Recipe() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipe = async () => {
      setLoading(true);
      try {
        const resp = await fetch(`https://dummyjson.com/recipes/${id}`);
        if (!resp.ok) throw new Error();
        const data = await resp.json();
        setRecipe(data);
      } catch (err) {
        setRecipe(null);
      } finally {
        setLoading(false);
      }
    };
    fetchRecipe();
  }, [id]);

  if (loading) return <p>טוען...</p>;

  if (!recipe) return <h2>מתכון לא קיים.</h2>;

  return (
    <div>
      <h1>{recipe.name}</h1>
      <img src={recipe.image} width="200" alt={recipe.name} />
      <p>מנות: {recipe.servings}</p>
      <ul>
        {recipe.ingredients.map((ing, i) => (
          <li key={i}>{ing}</li>
        ))}
      </ul>
    </div>
  );
}
