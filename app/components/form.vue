<template>
    <div class="form">
        <h2>Contact</h2>

        <form @submit.prevent="handleSubmit" v-if="!isSuccess">
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
            <button :disabled="isLoading">Submit</button>
        </form>
        <div v-else>
            <h2>Thank you for your message!</h2>
        </div>
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
const isSuccess = ref(false);

async function handleSubmit() {
    isLoading.value = true;
    try {
        const { status } = await useContactForm(formData.value);
        if (status === 200) {
            isSuccess.value = true;
        }
    } finally {
        isLoading.value = false;
    }
}
</script>

<style scoped>
h2 {
    text-align: center;
}

.form {
    width: 60%;
    height: 100%;
    margin: 20px auto; /* ページレイアウトを実装したら削除。今はフォームのみを表示するために設定中。 */
}

.form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
}

.form-group label {
    margin-bottom: 5px;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    resize: vertical;
}

/* Submit Button */

button {
    width: 100%;
    padding: 10px;
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 10px;
    transition: all 0.3s ease;
}

button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
}

button:hover:not(:disabled) {
    background-color: #333;
    transform: scale(1.01);
}
</style>
