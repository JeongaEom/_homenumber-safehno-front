import "vue";
import "hookable";
import "destr";
import "klona";
import "devalue";
import "defu";
import "#internal/nuxt/paths";
import { d as defineStore } from "../server.mjs";
const useAppStore = defineStore("app", {
  state: () => ({
    isRouting: false,
    // isVerifing: false,
    // isLoggedIn: null,
    apiQueue: []
  }),
  actions: {}
});
export {
  useAppStore as u
};
//# sourceMappingURL=app-B04tNyyy.js.map
