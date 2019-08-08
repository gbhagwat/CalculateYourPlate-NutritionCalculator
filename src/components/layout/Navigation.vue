<template>
  <nav class="mt-3">
    <ul>
      <li v-for="link in links" :key="link.id">
        <a :href="link.url">{{ link.title }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  data: function() {
    return {
      links: [
        { title: "Home", url: "http://www.test.com" },
        { title: "About", url: "http://www.test.com" },
        { title: "Menu", url: "http://www.test.com" },
        { title: "Order Online", url: "http://www.test.com" },
        { title: "Nutrition Information", url: "http://www.test.com" },
        { title: "Calculate Your Plate", url: "http://www.test.com" },
        { title: "Contact Us", url: "http://www.test.com" }
      ]
    };
  }
};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: center;
}
nav ul {
  display: flex;
}
nav li {
  list-style: none;
}
nav a {
  font-size: 1.25rem;
  color: rgba(40, 66, 28);
  padding: 1rem;
}
</style>