<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import SkillsDesktop from '@/components/SkillsDesktop.vue'
import SkillsMobile from '@/components/SkillsMobile.vue'

const isMobile = ref(window.innerWidth <= 769)

const handleResize = () => {
  isMobile.value = window.innerWidth <= 769
}

onMounted(() => window.addEventListener('resize', handleResize))
onUnmounted(() => window.removeEventListener('resize', handleResize))
</script>

<template>
  <component :is="isMobile ? SkillsMobile : SkillsDesktop" />
</template>
