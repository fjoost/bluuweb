import { defineStore } from "pinia";

export const useUserStore = defineStore('userStore', {
    state: () => ({
        userData: 'Fenjo'
    }),
    getters: {
        toMinusc(state) {
            return state.userData.toLowerCase()
        },
    },

    actions: {
        register(name) {
            this.userData = name;
        }
    }

})