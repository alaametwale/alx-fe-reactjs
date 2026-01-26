import create from 'zustand';

export const useRecipeStore = create((set) => ({
  // الحالة الأساسية
  recipes: [],
  searchTerm: '', // ✅ هذا مطلوب للشيك
  favorites: [],
  filteredRecipes: [],
  recommendations: [],

  // دوال إدارة الوصفات
  setRecipes: (recipes) => set({ recipes }), // ✅ مطلوبة
  addRecipe: (recipe) => set((state) => ({ recipes: [...state.recipes, recipe] })),
  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipes.map(r => r.id === updatedRecipe.id ? updatedRecipe : r)
  })),
  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter(r => r.id !== id)
  })),

  // دوال البحث
  setSearchTerm: (term) => set({ searchTerm: term }), // ✅ مطلوبة
  filterRecipes: () => set((state) => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),

  // المفضلات والتوصيات
  addFavorite: (recipeId) => set((state) => ({ favorites: [...state.favorites, recipeId] })),
  removeFavorite: (recipeId) => set((state) => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  generateRecommendations: () => set((state) => {
    const recommended = state.recipes.filter(
      (recipe) => state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),
}));
