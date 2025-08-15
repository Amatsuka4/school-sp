<template>
    <div class="about">
        <div class="about-container">
            <div class="about-column" v-for="(column, index) in aboutColumns" :key="index">
                <div class="about-content">
                    <h1>{{ column.title }}</h1>
                    <p>{{ column.description }}</p>
                </div>
                <div class="about-image">
                    <img :src="column.image" :alt="column.title" />
                </div>
            </div>
            <List />
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const aboutColumns = ref([
    {
        title: "This is title. 1",
        description: "This is description.",
        image: "https://picsum.photos/id/100/400/400.jpg",
    },
    {
        title: "This is title. 2",
        description: "This is description.",
        image: "https://picsum.photos/id/100/400/400.jpg",
    },

    {
        title: "This is title. 3",
        description: "This is description.",
        image: "https://picsum.photos/id/100/400/400.jpg",
    },
]);

// スクロールでアニメーション
onMounted(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.5,
        }
    );

    const aboutElements = document.querySelectorAll(".about-column");
    aboutElements.forEach((element) => {
        observer.observe(element);
    });
});
</script>

<style scoped>
.about {
    display: flex;
    flex-direction: column;
}

.about-container {
    width: 100%;
}

.about-column {
    width: 100%;
    margin: 0 auto;
    padding: 40px 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #f0f0f0;
    text-align: center;
}

.about-column:nth-child(even) {
    background-color: #fff;
    flex-direction: row-reverse;
}

.about-content {
    width: 50%;
}

.about-image {
    border-radius: 10px;
    overflow: hidden;
}

.about-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* スクロール時アニメーション */
.about-column {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 1s ease, transform 1s ease;
}

.about-column.is-visible {
    opacity: 1;
    transform: translateY(0);
}
</style>
