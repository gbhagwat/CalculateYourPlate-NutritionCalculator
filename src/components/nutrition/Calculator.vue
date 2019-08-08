 <template>
  <div>
    <div class="card">
      <div class="card-header">
        <h4 class="card-title">{{ title }}</h4>
      </div>
      <div class="card-body">
        <dl class="row justify-content-center px-2 py-3">
          <dt class="col-2 col-sm-auto text-left">Calories</dt>
          <dd class="col text-sm-right">{{ (totals.calories > 0) ? totals.calories : '0' }}</dd>
          <div class="w-100"></div>
          <dt class="col-2 col-sm-auto text-left">Total Fat(g)</dt>
          <dd class="col text-sm-right">{{ (totals.fat > 0) ? totals.fat : '0' }}</dd>
          <div class="w-100"></div>
          <dt class="col-2 col-sm-auto text-left">Saturated Fat(g)</dt>
          <dd class="col text-sm-right">{{ (totals.satFat > 0) ? totals.satFat : '0' }}</dd>
          <div class="w-100"></div>
          <dt class="col-2 col-sm-auto text-left">Cholesterol(mg)</dt>
          <dd class="col text-sm-right">{{ (totals.chol > 0) ? totals.chol : '0' }}</dd>
          <div class="w-100"></div>
          <dt class="col-2 col-sm-auto text-left">Sodium(mg)</dt>
          <dd class="col text-sm-right">{{ (totals.sodium > 0) ? totals.sodium : '0' }}</dd>
          <div class="w-100"></div>
          <dt class="col-2 col-sm-auto text-left">Carbs(g)</dt>
          <dd class="col text-sm-right">{{ (totals.carbs > 0) ? totals.carbs : '0' }}</dd>
          <div class="w-100"></div>
          <dt class="col-2 col-sm-auto text-left">Fiber(g)</dt>
          <dd class="col text-sm-right">{{ (totals.fiber > 0) ? totals.fiber : '0' }}</dd>
          <div class="w-100"></div>
          <dt class="col-2 col-sm-auto text-left">Protein(g)</dt>
          <dd class="col text-sm-right">{{ (totals.protein > 0) ? totals.protein : '0' }}</dd>
          <div class="w-100"></div>
          <dt class="col-2 col-sm-auto text-left">Sugars(g)</dt>
          <dd class="col text-sm-right">{{ (totals.sugar > 0) ? totals.sugar : '0' }}</dd>
        </dl>
      </div>
    </div>
  </div>
</template>


<script>
import ingredients from "../../assets/ingredients.json";

export default {
  name: "Calculator",
  props: {
    title: String
  },
  data() {
    return {};
  },
  computed: {
    totals: function() {
      let selectedIngredients = this.$store.state.selectedIngredients;
      let portionSize = this.$store.state.portionSize;
      let facts = {};
      let totalCal = this.$store.state.calories;
      let totalFat = this.$store.state.fat;
      let totalSatFat = this.$store.state.satFat;
      let totalChol = this.$store.state.chol;
      let totalSodium = this.$store.state.sodium;
      let totalCarbs = this.$store.state.carbs;
      let totalFiber = this.$store.state.fiber;
      let totalProtein = this.$store.state.protein;
      let totalSugars = this.$store.state.sugars;

      ingredients.forEach(function(ing) {
        if (selectedIngredients.indexOf(ing.name) > -1) {
          if (portionSize === "half") {
            facts.calories = totalCal += ing.half.calories;
            facts.fat = totalFat += ing.half.fat;
            facts.satFat = totalSatFat += ing.half.satFat;
            facts.chol = totalChol + ing.half.chol;
            facts.sodium = totalSodium + ing.half.sodium;
            facts.carbs = totalCarbs + ing.half.carbs;
            facts.fiber = totalFiber + ing.half.fiber;
            facts.protein = totalProtein + ing.half.protein;
            facts.sugars = totalSugars + ing.half.sugars;
          } else {
            facts.calories = totalCal += ing.full.calories;
            facts.fat = totalFat += ing.full.fat;
            facts.satFat = totalSatFat += ing.full.satFat;
            facts.chol = totalChol + ing.full.chol;
            facts.sodium = totalSodium + ing.full.sodium;
            facts.carbs = totalCarbs + ing.full.carbs;
            facts.fiber = totalFiber + ing.full.fiber;
            facts.protein = totalProtein + ing.full.protein;
            facts.sugars = totalSugars + ing.full.sugars;
          }
        }
      });
      return facts;
    }
  }
};
</script>

<style scoped>
.card-header {
  background-color: #899851;
  color: #fff;
}
</style>
<!--

go to this.$store.state.selectedIngredients

find the matched names in ingredients

use this.$store.state.portionSize to grab data

add each line item up

output each line item to above template code
-->