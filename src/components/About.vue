<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import AboutDesktop from '@/components/AboutDesktop.vue'
import AboutMobile from '@/components/AboutMobile.vue'

const isMobile = ref(window.innerWidth <= 769)

const handleResize = () => {
  isMobile.value = window.innerWidth <= 769
}

onMounted(() => window.addEventListener('resize', handleResize))
onUnmounted(() => window.removeEventListener('resize', handleResize))
</script>

<template>
  <component :is="isMobile ? AboutMobile : AboutDesktop" />
</template>
