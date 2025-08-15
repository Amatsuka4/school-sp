<template>
    <div class="hero">
        <v-carousel hide-delimiters cycle height="70vh">
            <v-carousel-item src="https://picsum.photos/1920/1080.jpg" cover></v-carousel-item>
            <v-carousel-item src="https://picsum.photos/1920/1080.jpg" cover></v-carousel-item>
            <v-carousel-item src="https://picsum.photos/1920/1080.jpg" cover></v-carousel-item>
        </v-carousel>
        <div class="hero-content" id="top">
            <h1>Welcome to my website</h1>
            <p>This is the top page</p>
        </div>
    </div>
    <div class="container">
        <About id="about" />
        <Form id="form" />
    </div>
</template>

<script setup lang="ts">
// console.log(useRuntimeConfig().public.MAPS_API_KEY);
</script>

<style scoped>
.container {
    width: stretch;
    margin: 0 auto;
    overflow-x: hidden;
}

.hero {
    width: stretch;
    height: 70vh;
    background-color: #f0f0f0;
    position: relative;
}

.hero-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #fff;
}

.about {
    width: 100%;
}
</style>
