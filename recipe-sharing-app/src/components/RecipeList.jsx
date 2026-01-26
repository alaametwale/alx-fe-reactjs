import React from 'react';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  // ✅ تعريف المتغير recipes
  const recipes = useRecipeStore(state => state.recipes);

  return (
    <div>
      <h2>Recipe List</h2>
      {/* ✅ استخدام map لعرض كل وصفة */}
      {recipes.map(recipe => (
        <div key={recipe.id} className="recipe-item">
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
