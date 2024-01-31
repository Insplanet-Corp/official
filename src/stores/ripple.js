// stores/rippleStore.js
import { defineStore } from "pinia";

export const useRippleStore = defineStore("ripple", {
  state: () => ({
    enabled: true, // 기본적으로 리플 효과 활성화
  }),
  actions: {
    toggleRipple() {
      this.enabled = !this.enabled;
    },
  },
});
