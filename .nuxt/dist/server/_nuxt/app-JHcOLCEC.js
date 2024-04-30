import "vue";
import "hookable";
import "destr";
import "klona";
import "devalue";
import "defu";
import "#internal/nuxt/paths";
import { d as defineStore } from "../server.mjs";
let currentKey = 0;
const MAX_KEYCOUNT_ROUTE = 9e8;
const uGenKey = (prefix = null) => {
  if (currentKey > MAX_KEYCOUNT_ROUTE) {
    currentKey = 0;
  }
  return `${prefix ? `${prefix}-` : ""}${currentKey++}`;
};
const itemBase = () => ({
  key: null,
  type: "modal",
  title: null,
  message: null,
  isActive: false,
  onClose: null,
  buttons: null,
  size: 1e3
});
defineStore("modal", {
  state: () => ({
    items: {}
  }),
  actions: {
    open(p, options = {}) {
      let newItem;
      if (typeof p === "function") {
        newItem = {
          ...options,
          isActive: true,
          onClose: () => {
            p(null);
          }
        };
      } else if (typeof p === "object") {
        newItem = p;
      } else {
        throw new Error("Invalid parameter");
      }
      newItem.key = newItem.key === void 0 ? uGenKey("modal") : newItem.key;
      this.items[newItem.key ?? "defaultKey"] = { ...itemBase(), ...newItem };
      if (newItem.key !== null) {
        this.items[newItem.key].isActive = true;
        if (typeof p === "function")
          p(newItem.key);
      }
      return newItem.key ?? "defaultKey";
    },
    alert(msg, onClose = null) {
      if (typeof msg === "string") {
        const newKey = uGenKey("modal");
        this.open({
          key: newKey,
          type: "alert",
          title: "알림",
          message: msg,
          onClose: () => {
            onClose && onClose();
            const others = Object.keys(this.items).filter(
              (key) => key !== newKey
            );
            others.forEach((key) => {
              if (this.items[key].type === "alert") {
                this.items[key].onClose = null;
                this.close(key);
              }
            });
          },
          buttons: [{ text: "확인" }]
        });
      } else {
        msg.type = "alert";
        this.open(msg);
      }
    },
    confirm(message, onConfirm) {
      this.alert({
        title: "알림",
        message,
        buttons: [
          {
            text: "취소",
            styleType: "secondary"
          },
          {
            text: "확인",
            onConfirm
          }
        ]
      });
    },
    close(key) {
      var _a, _b;
      (_b = (_a = this.items[key]) == null ? void 0 : _a.onClose) == null ? void 0 : _b.call(_a);
      delete this.items[key];
    },
    reset() {
      this.items = {};
    }
  }
});
defineStore("app", {
  state: () => ({
    isRouting: false,
    isVerifing: false,
    isLoggedIn: null,
    apiQueue: []
  }),
  actions: {}
});
//# sourceMappingURL=app-JHcOLCEC.js.map
