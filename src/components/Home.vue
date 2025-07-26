<script setup>
import { ref } from 'vue'
import AppModal from '@/components/AppModal.vue'
import resumeSrc from '@/assets/Resume.pdf'

const isOpen = ref(false)

function openModal() {
    isOpen.value = true
}

</script>

<template>
    <div id="home">
        <div id="profile">
            <img src="../assets/Profile.svg" alt="Me">
        </div>
        <div id="name_container">
            <h1>Wendy Thach</h1>
            <div id="line">
                <img src="../assets/Line.svg" alt="Line Under Name">
                <button class="button_style" @click="openModal()"><span class="button_text">RESUME</span></button>
            </div>
        </div>
        <AppModal v-if="isOpen" @close="isOpen = false">
            <button id="download" class="button_style"><a :href="resumeSrc" download="Wendy_Thach_Resume.pdf"><span
                        id="downloadText" class="button_text"><img id="downloadIcon"
                            src="../assets/DownloadIcon.png">&nbsp;DOWNLOAD</span></a></button>
            <div style="padding: 0.5em;"></div>
            <img src="../assets/Resume.png" class="content" />
        </AppModal>
    </div>
</template>

<style scoped>
#home {
    display: flex;
    background-color: #FFFCE6;
    width: auto;
}

#profile {
    height: 594px;
    width: auto;
    align-content: center;
    padding-left: 79px;
}

#name_container {
    display: flex;
    flex-direction: column;
    width: 780px;
    justify-content: center;
    flex-shrink: 0;
}

#line {
    display: flex;
    justify-content: space-between;
    margin: -10% 0px 10% 17%;
    width: 568px;
}

h1 {
    color: #D9A5A9;
    text-align: center;
    font-size: 100px;
    font-weight: 700;
}

#download {
    width: auto;
}

#downloadText {
    padding: 5px;
}

#downloadIcon {
    width: 15px;
    height: 14px;
}

a {
    text-decoration: none;
}
</style>