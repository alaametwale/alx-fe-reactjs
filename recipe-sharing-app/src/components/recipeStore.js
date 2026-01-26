import create from 'zustand';

export const useRecipeStore = create((set) => ({
  // قائمة الوصفات
  recipes: [],

  // إضافة وصفة جديدة
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  // تعيين قائمة الوصفات بالكامل
  setRecipes: (recipes) => set({ recipes }),

  // تحديث وصفة موجودة
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  // حذف وصفة حسب الـ id
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),
}));
