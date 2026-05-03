<template>
  <div class="container">
    <div>
      <a href="https://www.facebook.com/wendythach23/" target="_blank"><img class="contact"
          src="../components/icons/Facebook.png" alt="Facebook"></a>
      <a href="https://www.instagram.com/kukkiroll/" target="_blank"><img class="contact"
          src="../components/icons/Instagram.png" alt="Instagram"></a>
      <a href="https://github.com/thachwc" target="_blank"><img class="contact" href="https://github.com/thachwc"
          src="../components/icons/Github.png" alt="Github"></a>
    </div>

  </div>
</template>
<style scoped>
.container {
  align-content: center;
  justify-items: center;
}

.contact {
  margin: 12px;
  width: 70px;
  height: 70px;
  cursor: pointer;
  transition: 0.3s;
}

.contact:hover {
  opacity: 0.5;
}

.contact:active {
  transform: scale(0.95);
}
</style>
