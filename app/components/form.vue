<template>
    <div class="h-100 my-10 mx-auto w-66">
        <h2 class="text-center">Contact</h2>

        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" v-model="formData.name" required placeholder="Name" />
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" v-model="formData.email" required placeholder="Email" />
            </div>
            <div class="form-group">
                <label for="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    v-model="formData.message"
                    required
                    placeholder="Message"
                ></textarea>
            </div>
            <button
                :disabled="isLoading"
                :class="['submit-button', { loading: isLoading }]"
                class="w-100 pa-2 text-white rounded border-none mt-4"
            >
                {{ isLoading ? "送信中..." : "Submit" }}
            </button>
        </form>
        <v-snackbar v-model="show" location="bottom right" timeout="3000">
            送信が完了しました。ご連絡ありがとうございます。
        </v-snackbar>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { FormData } from "../types/form";
import useContactForm from "../composables/useContactForm";

const formData = ref<FormData>({
    name: "",
    email: "",
    message: "",
});

const isLoading = ref(false);
const show = ref(false);

async function handleSubmit() {
    isLoading.value = true;
    try {
        const { status } = await useContactForm(formData.value);
        if (status === 200) {
            formData.value = {
                name: "",
                email: "",
                message: "",
            };
            show.value = true;
        }
    } finally {
        isLoading.value = false;
    }
}
</script>

<style scoped lang="sass">
// フォーム入力欄の共通スタイル
.form-group
    display: flex
    flex-direction: column
    margin-bottom: 10px

    input,
    textarea
        width: 100%
        padding: 10px
        border: 1px solid #ccc
        border-radius: 4px
        font-size: 16px
        resize: vertical

    textarea
        height: 10em

    label
        margin-bottom: 5px


// ボタンのスタイル・アニメーション
.submit-button
    background-color: #000
    cursor: pointer
    transition: all 0.3s ease
    transform: scale(1)

    &:hover:not(:disabled)
        background-color: #333
        transform: scale(1.01)

.submit-button:disabled,
.submit-button.loading
    background-color: #ccc !important
    cursor: not-allowed !important
    transform: scale(0.98)
    opacity: 0.7
</style>
