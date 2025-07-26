<script>
export default {
    methods: {
        scrollTo(sectionId) {
            const el = document.getElementById(sectionId);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }
}
</script>

<template>
    <nav id="navbar">
        <img src="../assets/TopCurtains.svg" alt="Top Curtains">
        <div id="navbar-content">
            <div id="title">
                <img id="icon" src="../components/icons/PortfolioIcon.png" alt="Strawberry Milk">
                <img id="port" src="../assets/Portfolio.svg" alt="title">
            </div>
            <div id="buttons">
                <div>
                    <button class="button_style" @click="scrollTo('home')"><span
                            class="button_text">HOME</span></button>
                </div>
                <div>
                    <button class="button_style" @click="scrollTo('about')"><span
                            class="button_text">ABOUT</span></button>
                </div>
                <div>
                    <button class="button_style" @click="scrollTo('skills')"><span
                            class="button_text">SKILLS</span></button>
                </div>
                <div>
                    <button class="button_style" @click="scrollTo('gallery')"><span
                            class="button_text">GALLERY</span></button>
                </div>
                <div>
                    <button class="button_style" @click="scrollTo('contact')"><span
                            class="button_text">CONTACT</span></button>
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
</style>
