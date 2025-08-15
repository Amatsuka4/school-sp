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

/* カラムレイアウト */
.about-column {
    width: 100%;
    padding: 40px 10%;
    gap: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #f0f0f0;
    text-align: center;

    /*　IntersectionObserver用 */
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 1s ease, transform 1s ease;
}

.about-column:nth-child(even) {
    background-color: #fff;
    flex-direction: row-reverse;
}

.about-column.is-visible {
    opacity: 1;
    transform: translateY(0);
}

.about-content {
    width: 50%;
}

/* 画像エリア */
.about-image {
    height: 400px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.about-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* レスポンシブ */
@media (max-width: 768px) {
    .about-column {
        flex-direction: column;
        padding: 30px 5%;
        gap: 30px;
        text-align: center;
    }

    .about-column:nth-child(even) {
        flex-direction: column;
    }

    .about-content {
        width: 100%;
        order: 2;
    }

    .about-content h1 {
        font-size: 1.5rem;
        margin-bottom: 15px;
    }

    .about-content p {
        font-size: 0.95rem;
        line-height: 1.6;
    }

    .about-image {
        width: 100%;
        max-width: 300px;
        height: 300px;
        margin: 0 auto;
        order: 1;
    }

    .about-image img {
        aspect-ratio: 1;
        border-radius: 10px;
    }
}
</style>
