 <template>
  <div>
    <h3 class="mt-5">Calculate Your Plate</h3>
    <p
      class="font-italic"
    >Select from the following ingredients for a more complete picture. First, select a portion - Full Size or Half Size to proceed.</p>

    <Servings></Servings>

    <div class="row justify-content-center">
      <div class="col-12 col-lg-8">
        <section class="px-5 py-3 mb-5">
          <h4>{{serving}} Serving Nutrition Facts</h4>
          <!-- choose a base -->
          <h5>Greens</h5>
          <div class="ingredients card-deck mb-4">
            <Ingredients
              ref="ing"
              v-for="item in filterCategory(this.ingredients, 'Greens')"
              :key="item.id"
              :name="item.name"
              :calories="( $store.state.portionSize === 'full') ? item.full.calories : item.half.calories"
              :fat="( $store.state.portionSize === 'full') ? item.full.fat : item.half.fat"
              :satFat="( $store.state.portionSize === 'full') ? item.full.satFat : item.half.satFat"
              :chol="( $store.state.portionSize === 'full') ? item.full.chol : item.half.chol"
              :sodium="( $store.state.portionSize === 'full') ? item.full.sodium : item.half.sodium"
              :carbs="( $store.state.portionSize === 'full') ? item.full.carbs : item.half.carbs"
              :fiber="( $store.state.portionSize === 'full') ? item.full.fiber : item.half.fiber"
              :protein="( $store.state.portionSize === 'full') ? item.full.protein : item.half.protein"
              :sugars="( $store.state.portionSize === 'full') ? item.full.sugars : item.half.sugars"
              :category="item.category"
            ></Ingredients>
          </div>
          <h5>Grains</h5>
          <div class="ingredients card-deck mb-4">
            <Ingredients
              ref="ing"
              v-for="item in filterCategory( this.ingredients , 'Grains')"
              :key="item.id"
              :name="item.name"
              :calories="( $store.state.portionSize === 'full') ? item.full.calories : item.half.calories"
              :fat="( $store.state.portionSize === 'full') ? item.full.fat : item.half.fat"
              :satFat="( $store.state.portionSize === 'full') ? item.full.satFat : item.half.satFat"
              :chol="( $store.state.portionSize === 'full') ? item.full.chol : item.half.chol"
              :sodium="( $store.state.portionSize === 'full') ? item.full.sodium : item.half.sodium"
              :carbs="( $store.state.portionSize === 'full') ? item.full.carbs : item.half.carbs"
              :fiber="( $store.state.portionSize === 'full') ? item.full.fiber : item.half.fiber"
              :protein="( $store.state.portionSize === 'full') ? item.full.protein : item.half.protein"
              :sugars="( $store.state.portionSize === 'full') ? item.full.sugars : item.half.sugars"
              :category="item.category"
            ></Ingredients>
          </div>
          <h5>Crusts</h5>
          <div class="ingredients card-deck mb-4">
            <Ingredients
              ref="ing"
              v-for="item in filterCategory(this.ingredients, 'Crust')"
              :key="item.id"
              :name="item.name"
              :calories="( $store.state.portionSize === 'full') ? item.full.calories : item.half.calories"
              :fat="( $store.state.portionSize === 'full') ? item.full.fat : item.half.fat"
              :satFat="( $store.state.portionSize === 'full') ? item.full.satFat : item.half.satFat"
              :chol="( $store.state.portionSize === 'full') ? item.full.chol : item.half.chol"
              :sodium="( $store.state.portionSize === 'full') ? item.full.sodium : item.half.sodium"
              :carbs="( $store.state.portionSize === 'full') ? item.full.carbs : item.half.carbs"
              :fiber="( $store.state.portionSize === 'full') ? item.full.fiber : item.half.fiber"
              :protein="( $store.state.portionSize === 'full') ? item.full.protein : item.half.protein"
              :sugars="( $store.state.portionSize === 'full') ? item.full.sugars : item.half.sugars"
              :category="item.category"
            ></Ingredients>
          </div>
        </section>
      </div>
      <div class="col-12 col-lg-3">
        <Calculator title="Nutrition Facts"></Calculator>
        <button @click="reset" class="btn btn-secondary">Reset</button>
      </div>
    </div>
  </div>
</template>

<script>
import Calculator from "./nutrition/Calculator";
import Ingredients from "./nutrition/Ingredients";
import Servings from "./nutrition/ServingBtn";

import ingredients from "../assets/ingredients.json";

export default {
  name: "CalculatePlate",
  data() {
    return {
      ingredients: ingredients
    };
  },
  computed: {
    serving: function() {
      return this.$store.state.portionSize;
    }
  },
  components: {
    Calculator,
    Ingredients,
    Servings
  },
  methods: {
    compare: function(a, b) {
      // Use toUpperCase() to ignore character casing
      const itemA = a.name.toUpperCase();
      const itemB = b.name.toUpperCase();

      let comparison = 0;
      if (itemA > itemB) {
        comparison = 1;
      } else if (itemA < itemB) {
        comparison = -1;
      }
      return comparison;
    },
    filterCategory: function(array, cat) {
      var output = array.filter(function(item) {
        return item.category === cat;
      });
      output.sort(this.compare);
      return output;
    },
    reset: function() {
      this.$store.state.selectedIngredients = [];
      this.$refs.ing.forEach(function(el) {
        return (el.isSelected = false);
      });
    }
  }
};
</script>

<style>
section {
  position: relative;
  padding: 10px;
  border-width: 3px;
  border-style: solid;
  border-image: linear-gradient(to top, #899851, #bcd852) 10;
}

h5 {
  font-size: 1.5rem;
  margin: 25px 0 15px 0;
  text-align: left;
  font-style: italic;
}

section h4 {
  position: absolute;
  top: 0;
  font-size: 1.75rem;
  text-transform: uppercase;
  font-weight: 700;
  line-height: 1;
  margin: -9px 0 0; /* half of font-size */
  background: #fff;
  color: #899851;
  padding: 0 3px;
}
button {
  font-size: 2rem;
}
</style>
