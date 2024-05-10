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
    isVerifing: false,
    verifingPromise: null,
    verifingResolve: null,
    isRouting: false,
    apiQueue: []
  }),
  actions: {}
});
export {
  useAppStore as u
};
//# sourceMappingURL=app-B3aFB6x9.js.map
