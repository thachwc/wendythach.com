<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import ContactDesktop from '@/components/ContactDesktop.vue'
import ContactMobile from '@/components/ContactMobile.vue'

const isMobile = ref(window.innerWidth <= 769)

const handleResize = () => {
  isMobile.value = window.innerWidth <= 769
}

onMounted(() => window.addEventListener('resize', handleResize))
onUnmounted(() => window.removeEventListener('resize', handleResize))
</script>

<template>
  <component :is="isMobile ? ContactMobile : ContactDesktop" />
</template>
