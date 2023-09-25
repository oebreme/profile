<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: 'NavItem',
  props: {
    label: { type: String, required: true },
    link: { type: String, required: true }
  },
  mounted: function(): void {
  },
});

</script>

<template>
  <a v-bind:href="link" class="nav-item">
    {{ label }}
  </a>
</template>

<style scoped>

.nav-item {
  margin-left: 1rem;
  margin-right: 1rem;
  padding: 2rem;
}
</style>