<template>
    <header>
        <div class="container">
            <a href="#top"> <h1 class="logo">LOGO</h1> </a>
            <div class="nav">
                <a href="#">About</a>
                <a href="#contact">Contact</a>
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
    cursor: pointer;
    transition: all 0.3s ease;
    border-bottom: 1px solid transparent;
}

.logo:hover {
    border-bottom: 1px solid #000;
}

.nav {
    display: flex;
    gap: 20px;
}
</style>
