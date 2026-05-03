<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import GalleryDesktop from '@/components/GalleryDesktop.vue'
import GalleryMobile from '@/components/GalleryMobile.vue'

const isMobile = ref(window.innerWidth <= 769)

const handleResize = () => {
  isMobile.value = window.innerWidth <= 769
}

onMounted(() => window.addEventListener('resize', handleResize))
onUnmounted(() => window.removeEventListener('resize', handleResize))
</script>

<template>
  <component :is="isMobile ? GalleryMobile : GalleryDesktop" />
</template>
