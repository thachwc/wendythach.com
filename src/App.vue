<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Skills from './components/Skills.vue';
import Gallery from './components/Gallery.vue';
import Contact from './components/Contact.vue';
import Foot from './components/Footer.vue';

</script>

<template>
  <div>
    <Navbar />
    <section id="home">
      <Home />
    </section>
    <section id="about">
      <About />
    </section>
    <section id="skills">
      <Skills />
    </section>
    <section id="gallery">
      <Gallery />
    </section>
    <section id="contact">
      <Contact />
    </section>
    <Foot />
  </div>

</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

section {
  width: 595px;
}
</style>
