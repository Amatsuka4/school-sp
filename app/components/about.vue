<template>
    <div class="about d-flex flex-column">
        <div class="about-container w-100">
            <div
                class="about-column text-center w-100 d-flex justify-space-between ga4"
                v-for="(column, index) in aboutColumns"
                :key="index"
            >
                <div class="about-content w-100 w-md-50 d-flex justify-space-between flex-column">
                    <div class="about-text">
                        <h1 class="text-h4 text-md-h3 mb-4">{{ column.title }}</h1>
                        <p class="text-body-1">{{ column.description }}</p>
                    </div>
                    <v-dialog max-width="500">
                        <template v-slot:activator="{ props: activatorProps }">
                            <v-btn v-bind="activatorProps" text="Read More"></v-btn>
                        </template>

                        <template v-slot:default="{ isActive }">
                            <v-card title="Dialog">
                                <v-card-text>
                                    {{ column.dialogMessage }}
                                </v-card-text>

                                <v-card-actions>
                                    <v-spacer></v-spacer>

                                    <v-btn text="Close Dialog" @click="isActive.value = false"></v-btn>
                                </v-card-actions>
                            </v-card>
                        </template>
                    </v-dialog>
                </div>
                <div class="about-image rounded-lg elevation-4 overflow-hidden">
                    <img loading="lazy" :src="column.image" :alt="column.title" class="w-100 h-100 object-fit-cover" />
                </div>
            </div>
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
        dialogMessage: "This is dialog message. 1",
    },
    {
        title: "This is title. 2",
        description: "This is description.",
        image: "https://picsum.photos/id/100/400/400.jpg",
        dialogMessage: "This is dialog message. 2",
    },

    {
        title: "This is title. 3",
        description: "This is description.",
        image: "https://picsum.photos/id/100/400/400.jpg",
        dialogMessage: "This is dialog message. 3",
    },
]);

// IntersectionObserver
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
            threshold: 0.1,
        }
    );

    const aboutElements = document.querySelectorAll(".about-column");
    aboutElements.forEach((element) => {
        observer.observe(element);
    });
});
</script>

<style scoped lang="sass">
/* カラムレイアウト */
.about-column
    padding: 40px 10%
    background-color: #f0f0f0

    /*　IntersectionObserver用 */
    opacity: 0
    transform: translateY(30px)
    transition: opacity 1s ease, transform 1s ease

.about-column:nth-child(even)
    background-color: #fff
    flex-direction: row-reverse

.about-column.is-visible
    opacity: 1
    transform: translateY(0)

/* 画像エリア */
.about-image
    height: 400px

/* レスポンシブ */
@media (max-width: 768px)
    .about-column
        flex-direction: column
        padding: 30px 5%
        gap: 30px

        &:nth-child(even)
            flex-direction: column

    .about-content
        width: 100%
        order: 2

    .about-image
        width: 100%
        max-width: 300px
        height: 300px
        margin: 0 auto
        order: 1

        img
            aspect-ratio: 1
</style>
