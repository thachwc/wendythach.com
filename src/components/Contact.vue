<template>
    <div class="container">
        <div>
            <a href="https://www.facebook.com/wendythach23/" target="_blank"><img class="contact"
                    src="../components/icons/Facebook.png" alt="Facebook"></a>
            <a href="https://www.instagram.com/kukkiroll/" target="_blank"><img class="contact"
                    src="../components/icons/Instagram.png" alt="Instagram"></a>
            <a href="https://github.com/thachwc" target="_blank"><img class="contact"
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
    padding: 12px;
    width: 98px;
    height: 98px;
    cursor: pointer;
    transition: 0.3s;
}

.contact:hover {
    opacity: 0.5;
}
</style>