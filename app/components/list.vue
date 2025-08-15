<template>
    <div class="about-list-container">
        <div class="about-list">
            <v-btn
                v-for="(item, index) in aboutList"
                :key="index"
                @click="selectItem(index)"
                :color="selectedIndex === index ? 'primary' : 'default'"
                class="mx-1 mb-2"
                size="default"
            >
                {{ item.title }}
            </v-btn>
        </div>
        <div class="about-content">
            <div class="about-description">
                <h2>{{ currentItem?.title }}</h2>
                <p>{{ currentItem?.description }}</p>
            </div>
            <div class="about-image">
                <img :src="currentItem?.image" :alt="currentItem?.title" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

interface AboutItem {
    title: string;
    description: string;
    image: string;
}

const selectedIndex = ref<number>(0);

const aboutList = ref<AboutItem[]>([
    {
        title: "選択肢１",
        description: "選択肢１の説明",
        image: "https://picsum.photos/id/100/400/400.jpg",
    },
    {
        title: "選択肢２",
        description: "選択肢２の説明",
        image: "https://picsum.photos/id/101/400/400.jpg",
    },
    {
        title: "選択肢３",
        description: "選択肢３の説明",
        image: "https://picsum.photos/id/102/400/400.jpg",
    },
    {
        title: "選択肢B",
        description: "選択肢Bの説明",
        image: "https://picsum.photos/id/106/400/400.jpg",
    },
    {
        title: "選択肢４",
        description: "選択肢４の説明",
        image: "https://picsum.photos/id/103/400/400.jpg",
    },
]);

const currentItem = computed(() => aboutList.value[selectedIndex.value]);

function selectItem(index: number) {
    selectedIndex.value = index;
}
</script>

<style scoped>
/* コンテナ */
.about-list-container {
    width: 100%;
    padding: 40px 10%;
    background-color: #fff;
}

/* 選択ボタンエリア */
.about-list {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    flex-wrap: wrap;
}

/* コンテンツエリア */
.about-content {
    display: flex;
    align-items: center;
    gap: 30px;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
}

.about-description {
    flex: 1;
}

.about-description h2 {
    font-size: 1.8rem;
    margin-bottom: 15px;
    font-weight: 600;
    color: #333;
}

.about-description p {
    font-size: 1rem;
    line-height: 1.5;
    color: #666;
}

/* 画像エリア */
.about-image {
    flex: 1;
}

.about-image img {
    width: 100%;
    max-width: 350px;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

/* レスポンシブ */
@media (max-width: 768px) {
    .about-list-container {
        padding: 30px 5%;
    }

    .about-list {
        margin-bottom: 25px;
    }

    .about-content {
        flex-direction: column;
        gap: 25px;
        text-align: center;
    }

    .about-description {
        width: 100%;
        order: 2;
    }

    .about-description h2 {
        font-size: 1.5rem;
        margin-bottom: 12px;
    }

    .about-description p {
        font-size: 0.95rem;
        line-height: 1.6;
    }

    .about-image {
        width: 100%;
        max-width: 280px;
        margin: 0 auto;
        order: 1;
    }

    .about-image img {
        max-width: 100%;
    }
}
</style>
