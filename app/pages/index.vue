<template>
    <div class="hero w-100 position-relative">
        <v-carousel hide-delimiters cycle height="70vh">
            <v-carousel-item src="https://picsum.photos/1920/1080.jpg" cover></v-carousel-item>
            <v-carousel-item src="https://picsum.photos/1920/1080.jpg" cover></v-carousel-item>
            <v-carousel-item src="https://picsum.photos/1920/1080.jpg" cover></v-carousel-item>
        </v-carousel>
        <div class="hero-content position-absolute text-center text-white" id="top">
            <h1>Welcome to my website</h1>
            <p>This is the top page</p>
        </div>
    </div>
    <div class="container w-100 mx-auto overflow-x-hidden">
        <About id="about" />
        <List id="list" />
        <Form id="form" />
    </div>
</template>

<script setup lang="ts">
// console.log(useRuntimeConfig().public.MAPS_API_KEY);
</script>

<style scoped lang="sass">
.hero
    height: 70vh
    background-color: #f0f0f0

.hero-content
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
</style>
