<script setup>
const modules = import.meta.glob('../skills/*', { import: 'default', eager: true })
const images = Object.values(modules)
</script>

<template>
  <div class="container">
    <img v-for="(src, i) in images" :key="i" :src="src" />
  </div>
</template>

<style scoped>
.container {
  padding: 8px 27px 0px 27px;
}

img {
  max-width: 100%;
  height: 91px;
  padding: 8px 25px 0px 25px;
}
</style>
