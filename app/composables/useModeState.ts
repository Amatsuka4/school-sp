import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useModeState = defineStore(
    "modeState",
    () => {
        const mode = ref("light");
        function toggleMode() {
            mode.value = mode.value === "light" ? "dark" : "light";
        }
        return { mode, toggleMode };
    },
    {
        persist: {
            pick: ["mode"],
        },
    }
);
