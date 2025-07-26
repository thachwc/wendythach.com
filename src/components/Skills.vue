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
    padding: 39px 91px 0px 91px;
}

img {
    max-width: 100%;
    height: 202px;
    padding: 25px 35px 25px 35px;
}
</style>