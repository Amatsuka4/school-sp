<template>
    <header>
        <div class="container">
            <a href="#top" class="hover-underline"> <h1 class="logo">LOGO</h1> </a>
            <div class="nav">
                <a href="#about" class="hover-underline">About</a>
                <a href="#form" class="hover-underline">Contact</a>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts"></script>

<style scoped>
header {
    background-color: #f0f0f0;
    padding: 10px 10%;
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
    cursor: pointer;
}

.nav {
    display: flex;
    gap: 20px;
}

.hover-underline {
    border-bottom: 1px solid transparent;
    transition: all 0.3s ease;
}

.hover-underline:hover {
    border-bottom: 1px solid #000;
    transform: scale(1.05);
}
</style>
