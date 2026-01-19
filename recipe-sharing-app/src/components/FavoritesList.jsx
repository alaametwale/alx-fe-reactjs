import { useRecipeStore } from "../store/recipeStore";

const FavoritesList = () => {
  const favorites = useRecipeStore((state) =>
    state.favorites.map((id) =>
      state.recipes.find((recipe) => recipe.id === id)
    )
  );

  if (favorites.length === 0) return null;

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.map(
        (recipe) =>
          recipe && (
            <div key={recipe.id}>
              <h4>{recipe.title}</h4>
            </div>
          )
      )}
    </div>
  );
};

export default FavoritesList;
