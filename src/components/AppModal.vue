<script setup>
import { defineProps, defineEmits, ref } from 'vue'

const emit = defineEmits(['close'])
const props = defineProps({
    caption: {
        type: String,
        default: null
    }
})

</script>

<template>
    <Teleport to="body">
        <div v-if="$slots.default" class="modal-backdrop" @click.self="$emit('close')">
            <transition name="modal" appear>
                <div class="modal-wrapper">
                    <button id="x" class="button_style" @click="$emit('close')">
                        <span class="button_text">&#xd7;</span>
                    </button>
                    <div class="modal-content">
                        <div class="space">
                            <slot />
                        </div>
                    </div>
                    <div v-if="caption" class="fixed-caption">
                        <p class="caption-text">{{ caption }}</p>
                    </div>
                </div>
            </transition>
        </div>
    </Teleport>
</template>

<style scoped>
#x {
    position: absolute;
    top: -50px;
    right: -50px;
    z-index: 10;
}

.button_style {
    padding-bottom: 2px;
    padding-left: 4px;
    border-radius: 7px;
    width: 50px;
    height: 50px;
}

.button_text {
    border-radius: 6px;
    font-size: 50px;
    line-height: 40px;
    width: 40px;
}

.fixed-caption {
    position: relative;
    margin-top: 12px;
    text-align: center;
    width: 100%;
}

.caption-text {
    font-size: 1rem;
    color: #444;
    background: white;
    padding: 8px 16px;
    border-radius: 8px;
}

.modal-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.modal-backdrop {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.modal-content {
    position: relative;
    max-width: 90vw;
    max-height: 70vh;
    overflow: auto;
    background: white;
    border-radius: 8px;
    padding: 16px;
}

.modal-enter-active,
.modal-leave-active {
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
    transform: scale(0.9);
}
</style>