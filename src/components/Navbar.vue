<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import AppModal from '@/components/AppModal.vue'

const isMobile = ref(window.innerWidth <= 769)
const isMenuOpen = ref(false)
const navRef = ref(null)

const handleClickOutside = (event) => {
  if (!navRef.value) return

  if (navRef.value && !navRef.value.contains(event.target)) {
    isMenuOpen.value = false
  }
}

const handleResize = () => {
  isMobile.value = window.innerWidth <= 769
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
  document.addEventListener('click', handleClickOutside)
})
onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  document.removeEventListener('click', handleClickOutside)
})

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  isMenuOpen.value = false
}
</script>

<template>
  <nav v-if="isMobile" class="mobile-nav" ref="navRef">
    <img id="curtain" src="../assets/topMobile.svg" alt="Top Curtains">
    <div class="mobile-header">
      <div class="port-nav">
        <img class="hamburger" @click.stop="isMenuOpen = !isMenuOpen" src="../assets/Hamburger.svg" />
        <img id="icon-mobile" src="../components/icons/PortfolioIcon.png" alt="icon">
        <img id="port-mobile" src="../assets/Portfolio.svg" alt="title">
      </div>

    </div>

    <div v-if="isMenuOpen" class="dropdown-menu">
      <button class="button_style" @click="scrollTo('home')"><span class="button_text">HOME</span></button>
      <button class="button_style" @click="scrollTo('about')"><span class="button_text">ABOUT</span></button>
      <button class="button_style" @click="scrollTo('skills')"><span class="button_text">SKILLS</span></button>
      <button class="button_style" @click="scrollTo('gallery')"><span class="button_text">GALLERY</span></button>
      <button class="button_style" @click="scrollTo('contact')"><span class="button_text">CONTACT</span></button>
    </div>

  </nav>




  <nav v-else id="navbar">
    <img src="../assets/TopCurtains.svg" alt="Top Curtains">
    <div id="navbar-content">
      <div id="title">
        <img id="icon" src="../components/icons/PortfolioIcon.png" alt="icon">
        <img id="port" src="../assets/Portfolio.svg" alt="title">
      </div>
      <div id="buttons">
        <div>
          <button class="button_style" @click="scrollTo('home')"><span class="button_text">HOME</span></button>
        </div>
        <div>
          <button class="button_style" @click="scrollTo('about')"><span class="button_text">ABOUT</span></button>
        </div>
        <div>
          <button class="button_style" @click="scrollTo('skills')"><span class="button_text">SKILLS</span></button>
        </div>
        <div>
          <button class="button_style" @click="scrollTo('gallery')"><span class="button_text">GALLERY</span></button>
        </div>
        <div>
          <button class="button_style" @click="scrollTo('contact')"><span class="button_text">CONTACT</span></button>
        </div>
      </div>
    </div>
  </nav>

</template>

<style scoped>
#navbar {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 95px;
  width: 1270px;
  background: #EED1C6;
  border-radius: 20px 20px 0px 0px;
}

#navbar-content {
  display: flex;
  align-items: center;
  padding: 0px 51px 0px 51px;
  width: auto;
}

#title {
  display: flex;
}

#buttons {
  display: flex;
  justify-content: space-between;
  width: 660px;
}

#icon {
  padding-left: 5px;
  padding-bottom: 4px;
  max-width: 80px;
}

#port {
  padding: 0px 95px 0px 35px;
}

.mobile-nav {
  display: none;
}

@media (max-width: 769px) {
  #navbar {
    display: none;
  }

  .mobile-nav {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 64px;
    width: 336px;
    z-index: 1000;

    background-color: #EED1C6;
    background-image:
      radial-gradient(#f7e1d9 2%, transparent 20%),
      radial-gradient(#f7e1d9 2%, transparent 20%);
    background-size: 25px 25px;
    background-position: 5px 10px;

    border-radius: 20px 20px 0px 0px;
    box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.25);
  }

  .mobile-header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #curtain {
    border-radius: 20px 20px 0px 0;
  }

  .port-nav {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  #port-mobile {
    padding-left: 8px;
    max-width: 215px;
  }

  #icon-mobile {
    padding-left: 4px;
    padding-bottom: 5px;
    width: 55px;
    height: 51px;
  }

  .hamburger {
    cursor: pointer;
    font-size: 35px;
    font-weight: 800;
    color: #D9A5A9;
    box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    transition:
      background-color 0.3s ease,
      color 0.3s ease;
  }

  .hamburger:hover {
    background-color: #e9ccc2;
    cursor: pointer;
  }

  .hamburger:active {
    transform: scale(0.8);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .dropdown-menu {
    width: 336px;
    height: 249px;
    padding: 1px 0 0 0;
    background: #FFFCE6;
    display: flex;
    flex-direction: column;
    gap: 2px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
    animation: dropdownFade 0.6s ease;
  }

  .dropdown-menu button {
    width: 336px;
    height: 48px;
    background: #CF9C9B;
    font-family: Nunito;
    font-size: 20px;
    font-weight: 800;
    color: #FFFCE6;
    text-align: center;
    letter-spacing: 1px;

  }

  .button_style {
    border-radius: 0px;
  }

  .button_text {
    line-height: 32px;
    margin: 8px;
    padding: 3px;
  }

  .dropdown-menu button:hover {
    background-color: #bf8c8c;
  }

  .dropdown-menu button:active {
    transform: scale(0.95);
    border-radius: 10px;
    transition:
      transform 0.2s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  @keyframes dropdownFade {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
</style>
