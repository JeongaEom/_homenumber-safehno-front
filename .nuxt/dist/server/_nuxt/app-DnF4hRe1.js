import "vue";
import "hookable";
import "destr";
import "klona";
import "devalue";
import "defu";
import "#internal/nuxt/paths";
import { d as defineStore } from "../server.mjs";
defineStore("app", {
  state: () => ({
    isVerifing: false,
    verifingPromise: null,
    verifingResolve: null,
    isRouting: false,
    apiQueue: []
  }),
  actions: {}
});
//# sourceMappingURL=app-DnF4hRe1.js.map
