<script setup>
import { ref } from 'vue'
import AppModal from '@/components/AppModal.vue'
import resumeSrc from '@/assets/Resume.pdf'

const isOpen = ref(false)
const openModal = () => (isOpen.value = true)
</script>

<template>
  <div id="home">
    <div id="profile">
      <img id="pp" src="../assets/Profile.svg" alt="Me">
    </div>
    <h1>Wendy Thach</h1>
    <img id="line" src="../assets/LineMobile.svg" />
    <button id="resumeButton" class="button_style" @click="openModal">
      <span id="resume" class="button_text">RESUME</span>
    </button>
    <AppModal v-if="isOpen" @close="isOpen = false">
      <button id="download" class="button_style"><a :href="resumeSrc" download="Wendy_Thach_Resume.pdf"><span
            id="downloadText" class="button_text"><img id="downloadIcon"
              src="../assets/DownloadIcon.png">&nbsp;DOWNLOAD</span></a></button>
      <img src="../assets/Resume.png" class="content" />
    </AppModal>
  </div>
</template>

<style scoped>
#home {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FFFCE6;
  width: 336px;
  height: 442px;
  text-align: center;
}

#profile {
  margin-top: 38px;
  margin-bottom: -40px;
}

#pp {
  width: 225px;
}

#line {
  width: 253px;
  margin: -27px;
}

h1 {
  color: #D9A5A9;
  text-align: center;
  font-size: 48px;
  font-weight: 700;
}

#download {
  width: auto;
  margin-bottom: 15px;
}

#resumeButton {
  margin-top: 40px;
}

#downloadText {
  padding: 5px;
}

#downloadIcon {
  width: 15px;
  height: 14px;
}

#resumeButton.button_style {
  width: 88px;
  height: 36px;
}

#resume.button_text {
  margin: -2px;
  font-weight: 850;
  font-size: 17px;
  line-height: 28px;
}

a {
  text-decoration: none;
}
</style>
