<script setup>
import Header from "@/components/Header.vue";
</script>

<template>
  <header>
    <nav>

    </nav>
  </header>

  <main>
    <Header />
  </main>



</template>

<style scoped>
header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
}
</style>
