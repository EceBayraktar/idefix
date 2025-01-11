// stores/user.js
import { defineStore } from 'pinia';

export const useUserStore = defineStore('users', {
  state: () => ({
    email: '',
  }),
  actions: {
    setEmail(email) {
      this.email = email;
    },
  },
});
