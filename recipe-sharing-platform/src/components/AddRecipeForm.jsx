import { useState } from "react";

export default function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!title) newErrors.title = "Title is required";
    if (!ingredients) newErrors.ingredients = "Ingredients are required";
    if (!steps) newErrors.steps = "Steps are required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    alert("Recipe submitted successfully!");
    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 space-y-4 md:p-8"
      >
        <h1 className="text-2xl font-bold mb-4 md:text-3xl">Add New Recipe</h1>

        <div>
          <input
            className="w-full p-3 border rounded shadow-sm font-sans text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Recipe Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <p className="text-red-500 mt-1">{errors.title}</p>}
        </div>

        <div>
          <textarea
            className="w-full p-3 border rounded shadow-sm font-sans text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Ingredients (comma separated)"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
          {errors.ingredients && (
            <p className="text-red-500 mt-1">{errors.ingredients}</p>
          )}
        </div>

        <div>
          <textarea
            className="w-full p-3 border rounded shadow-sm font-sans text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          />
          {errors.steps && <p className="text-red-500 mt-1">{errors.steps}</p>}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-3 rounded shadow-md font-semibold hover:bg-blue-600 transition-colors duration-300"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
}
