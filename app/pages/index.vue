<template>
    <div class="hero">
        <img src="https://picsum.photos/1920/1080.jpg" alt="Hero" />
        <div class="hero-content" id="top">
            <h1>Welcome to my website</h1>
            <p>This is the top page</p>
        </div>
    </div>
    <div class="container">
        <Form />
    </div>
</template>

<script setup lang="ts">
import Form from "../components/form.vue";
</script>

<style scoped>
.container {
    width: 60vw;
    margin: 0 auto;
    overflow-x: hidden;
}

.hero {
    width: stretch;
    height: 70vh;
    background-color: #f0f0f0;
    position: relative;
}

.hero img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
