import { defineNuxtPlugin } from "#app";

import { store } from "@/store/store";

export default defineNuxtPlugin(() => {
    return {
        provide: {
            store,
        },
    };
});