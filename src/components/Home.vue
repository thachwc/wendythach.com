<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import HomeDesktop from '@/components/HomeDesktop.vue'
import HomeMobile from '@/components/HomeMobile.vue'

const isMobile = ref(window.innerWidth <= 769)

const handleResize = () => {
  isMobile.value = window.innerWidth <= 769
}

onMounted(() => window.addEventListener('resize', handleResize))
onUnmounted(() => window.removeEventListener('resize', handleResize))
</script>

<template>
  <component :is="isMobile ? HomeMobile : HomeDesktop" />
</template>
