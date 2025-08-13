<template>
    <header>
        <div class="container">
            <NuxtLink to="/"> <h1 class="logo">LOGO</h1> </NuxtLink>
            <div class="nav">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts"></script>

<style scoped>
header {
    background-color: #f0f0f0;
    padding: 10px 20px;
    text-align: center;
    top: 0;
    width: 100%;
}

a {
    text-decoration: none;
    color: #000;
}

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 24px;
    font-weight: bold;
    font-style: italic;
}

.nav {
    display: flex;
    gap: 20px;
}
</style>
