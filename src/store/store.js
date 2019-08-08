import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    selectedIngredients: [],
    portionSize: "full",
    calories: 0,
    fat: 0,
    satFat: 0,
    chol: 0,
    sodium: 0,
    carbs: 0,
    fiber: 0,
    protein: 0,
    sugars: 0
  }
});
