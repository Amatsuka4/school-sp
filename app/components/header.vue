<template>
    <header class="text-center top-0 w-100">
        <div class="d-flex justify-space-between align-center">
            <NuxtLink href="/" class="hover-underline">
                <h1 class="logo text-h5 font-weight-bold font-italic cursor-pointer">LOGO</h1>
            </NuxtLink>
            <div class="d-flex ga-4">
                <a href="#about" class="hover-underline">About</a>
                <a href="#list" class="hover-underline">List</a>
                <a href="#information" class="hover-underline">Information</a>
                <a href="#form" class="hover-underline">Contact</a>
            </div>
            <transition name="fade" mode="out-in" appear>
                <v-btn @click="toggleMode" key="btn" :class="modeState.mode === 'light' ? 'btn-light' : 'btn-dark'">
                    <v-icon v-if="modeState.mode === 'light'">mdi-lightbulb-on</v-icon>
                    <v-icon v-else>mdi-lightbulb-outline</v-icon>
                </v-btn>
            </transition>
        </div>
    </header>
</template>

<script setup lang="ts">
import { useModeState } from "../composables/useModeState";
const modeState = useModeState();

const { toggleMode } = modeState;
</script>

<style scoped lang="sass">
header
    background-color: #f0f0f0
    padding: 10px 10%

a
    text-decoration: none
    color: #000

.hover-underline
    border-bottom: 1px solid transparent
    transition: all 0.3s ease

    &:hover
        border-bottom: 1px solid #000
        transform: scale(1.05)

.fade-enter-active,
.fade-leave-active
    transition: all 0.3s ease-in-out

.fade-enter-from,
.fade-leave-to
    opacity: 0

.btn-light
    background-color: #fff
    color: #000

.btn-dark
    background-color: #000
    color: #fff
</style>
