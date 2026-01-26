import create from 'zustand';

export const useRecipeStore = create((set) => ({
  // الحالة الأساسية
  recipes: [],

  // دوال الإدارة المطلوبة بالاسم نفسه
  setRecipes: (recipes) => set({ recipes }), // ✅ هنا الدالة المطلوبة
  addRecipe: (recipe) => set((state) => ({ recipes: [...state.recipes, recipe] })),
  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipes.map(r => r.id === updatedRecipe.id ? updatedRecipe : r)
  })),
  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter(r => r.id !== id)
  })),
}));
