<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMobile = ref(window.innerWidth <= 769)

const handleResize = () => {
  isMobile.value = window.innerWidth <= 769
}

onMounted(() => window.addEventListener('resize', handleResize))
onUnmounted(() => window.removeEventListener('resize', handleResize))
</script>

<template>
  <img v-if="isMobile" src="../assets/bottomMobile.svg" alt="Bottom Curtains">
  <img v-else src="../assets/BottomCurtains.svg" alt="Bottom Curtains">
</template>
<style scoped>
img {
  position: fixed;
  top: 797px;
  width: 1270px;
  border-radius: 0px 0px 20px 20px;
}

@media (max-width: 769px) {
  img {
    position: fixed;
    top: 646px;
    width: 336px;
    border-radius: 0px 0px 20px 20px;
  }
}
</style>
