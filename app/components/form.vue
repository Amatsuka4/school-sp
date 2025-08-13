<template>
    <div class="form">
        <h2>Contact</h2>

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
            <button>Submit</button>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

type FormData = {
    name: string;
    email: string;
    message: string;
};

const formData = ref<FormData>({
    name: "",
    email: "",
    message: "",
});

const handleSubmit = () => {
    console.log(formData.value);
};
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

button:hover {
    background-color: #333;
    transform: scale(1.01);
}
</style>
