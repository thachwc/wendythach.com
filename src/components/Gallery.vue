<script setup>
import { ref } from 'vue'
import AppModal from '@/components/AppModal.vue'
import galleryData from '@/assets/galleryData.json'


const imageModules = import.meta.glob('../gallery/*.{jpg,jpeg,png,svg}', { import: 'default', eager: true })
const videoModules = import.meta.glob('../gallery/*.mp4', { import: 'default', eager: true })

const galleryItems = galleryData.map(item => {
    let src
    if (item.type === 'image') {
        src = imageModules[`../gallery/${item.filename}`]
    } else if (item.type === 'video') {
        src = videoModules[`../gallery/${item.filename}`]
    }

    return {
        ...item,
        src
    }
})

const isOpen = ref(false)
const currentSrc = ref(null)
const currentCaption = ref('')
const isImage = ref(true)

function openModal(item) {
    currentSrc.value = item.src
    isImage.value = item.type === 'image'
    currentCaption.value = item.caption || ''
    isOpen.value = true
}

</script>

<template>
    <div class="container">
        <div id="gallery">
            <div v-for="(item, i) in galleryItems" :key="i" class="box" @click="openModal(item)">
                <img v-if="item.type === 'image'" :src="item.src" class="thumbnail" />
                <video v-else muted class="thumbnail">
                    <source :src="item.src" type="video/mp4" />
                </video>
                <div class="caption-hover">{{ item.caption }}</div>
            </div>
        </div>

        <AppModal v-if="isOpen" :caption="currentCaption" @close="isOpen = false">
            <img v-if="isImage" :src="currentSrc" class="content" />
            <video v-else class="content" controls autoplay>
                <source :src="currentSrc" type="video/mp4" />
            </video>
        </AppModal>
    </div>
</template>
<style scoped>
#gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    padding: 61px 33px 0px 33px;
}

.box {
    position: relative;
    height: 225px;
    width: 225px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    border-radius: 20px;
    cursor: pointer;
    transition: 0.3s;
}

.box:hover .caption-hover {
    opacity: 1;
}

.caption-container {
    margin-top: 12px;
    text-align: center;
}

.caption-hover {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 6px 8px;
    background-color: rgba(0, 0, 0, 0.6);
    color: #fff;
    font-size: 0.85rem;
    text-align: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 0 0 20px 20px;
}

.caption-text {
    text-align: center;
    margin-top: 12px;
    font-size: 0.95rem;
    color: #444;
}

img.thumbnail,
video.thumbnail {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: 20px;
}
</style>