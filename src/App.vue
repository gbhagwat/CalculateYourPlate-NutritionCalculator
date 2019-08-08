<template>
  <div id="app">
    <Header company="Gusto" slogan="From Farm to Street"></Header>
    <Navigation></Navigation>
    <Jumbotron
      title="Nutrition Information"
      content="Use our awesome calculator for all your nutritional needs."
    ></Jumbotron>
    <div v-if="showNutritionInfo">
      <NutritionInfo></NutritionInfo>
    </div>
    <div v-if="showCalculatePlate">
      <CalculatePlate></CalculatePlate>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import CalculatePlate from "./components/CalculatePlate";
import NutritionInfo from "./components/NutritionInfo";

export default {
  name: "App",
  data() {
    return {
      showCalculatePlate: true,
      showNutritionInfo: false
    };
  },
  components: {
    CalculatePlate,
    NutritionInfo
  }
};
</script>

<style>
#app {
  font-family: futura-pt, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
}

.btn-primary {
  background-color: #728032;
  border-color: #677527;
}

.btn-group > .btn-group:not(:last-child) > .btn,
.btn-group > .btn:not(:last-child):not(.dropdown-toggle),
.btn-group > .btn-group:not(:first-child) > .btn,
.btn-group > .btn:not(:first-child) {
  border-radius: 0;
}

.btn-primary:not(:disabled):not(.disabled).active,
.btn-primary:not(:disabled):not(.disabled):active,
.show > .btn-primary.dropdown-toggle,
.btn-primary:hover {
  background-color: #899851;
  border-color: #788645;
}

.btn-primary:not(:disabled):not(.disabled).active:focus,
.btn-primary:not(:disabled):not(.disabled):active:focus,
.show > .btn-primary.dropdown-toggle:focus,
.btn-primary.focus,
.btn-primary:focus {
  box-shadow: 0 0 0 0.2rem #bcd852;
}

h3 {
  font-size: 2.5rem;
}

footer {
  background-color: #111305;
  height: 100px;
}

footer nav a {
  color: #fff !important;
}
</style>
