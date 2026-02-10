import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const found = data.find((r) => r.id === parseInt(id));
    setRecipe(found);
  }, [id]);

  if (!recipe) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <img src={recipe.image} className="w-full h-64 object-cover rounded-lg" />

      <h1 className="text-3xl font-bold mt-4">{recipe.title}</h1>

      <h2 className="text-xl font-semibold mt-6">Ingredients</h2>
      <ul className="list-disc pl-6">
        {recipe.ingredients.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mt-6">Instructions</h2>
      <ol className="list-decimal pl-6">
        {recipe.instructions.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ol>
    </div>
  );
}
