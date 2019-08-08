<template>
  <header class="py-3">
    <h1 class="my-0 text-lowercase">{{ company }}</h1>
    <span class="text-uppercase">{{ slogan }}</span>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    company: String,
    slogan: String
  }
};
</script>

<style scoped>
header {
  background-color: #b0b387;
  color: #fff;
  text-shadow: 1px 3px 3px #14210578;
}

h1 {
  font-size: 5rem;
}
</style>