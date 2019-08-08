<template>
  <div>
    <div class="btn-group my-4">
      <button
        type="button"
        class="btn btn-primary mr-1"
        :class="{ active: showFullFacts }"
        @click="showFullIng"
      >Full Size</button>
      <button
        type="button"
        class="btn btn-primary mr-1"
        :class="{ active: showHalfFacts }"
        @click="showHalfIng"
      >Half Size</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServingBtn",
  data() {
    return {
      showFullFacts: true,
      showHalfFacts: false
    };
  },
  methods: {
    showHalfIng: function() {
      this.showHalfFacts = true;
      this.showFullFacts = false;
      this.$store.state.portionSize = "half";
    },
    showFullIng: function() {
      this.showFullFacts = true;
      this.showHalfFacts = false;
      this.$store.state.portionSize = "full";
    }
  }
};
</script>

<style scoped>
button {
  font-size: 1.25rem;
}
</style>

