import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../data.json";

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(data);
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition"
        >
          <img src={recipe.image} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{recipe.title}</h2>
            <p className="text-gray-600 mb-4">{recipe.summary}</p>
            <Link
              to={`/recipe/${recipe.id}`}
              className="text-blue-500 font-semibold"
            >
              View Recipe →
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
