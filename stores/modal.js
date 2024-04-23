const itemBase = () => ({
  key: null,
  type: "modal",
  title: null,
  message: null,
  isActive: false,
  onClose: null,
  buttons: null,
  size: 1000,
});

export const useModalStore = defineStore("modal", {
  state() {
    return {
      items: {},
    };
  },
  actions: {
    open(p, options = {}) {
      let newItem = {};
      if (typeof p === "function") {
        newItem = {
          isActive: true,
          onClose() {
            p(null);
          },
          ...options,
        };
      } else if (typeof p === "object") {
        newItem = p;
      }
      newItem.key = newItem.key === undefined ? uGenKey("modal") : newItem.key;
      this.items[newItem.key] = { ...itemBase(), ...newItem };
      this.items[newItem.key].isActive = true;
      if (typeof p === "function") p(newItem.key);
      return newItem.key;
    },
    alert(msg, onClose = null) {
      const that = this; // 추가
      if (typeof msg === "string") {
        const newKey = uGenKey("modal");
        this.open({
          key: newKey,
          type: "alert",
          title: "알림",
          message: msg,
          onClose() { // 추가
            onClose && onClose();
            const others = Object.keys(that.items).filter(
              (key) => key !== newKey
            );
            if (others) {
              for (const key of others) {
                if (that.items[key].type === "alert") {
                  that.items[key].onClose = null;
                  that.close(key);
                }
              }
            }
          },
          buttons: [{ text: "확인" }],
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
            styleType: "secondary",
          },
          {
            text: "확인",
            onConfirm,
          },
        ],
      });
    },
    close(key) {
      this.items[key].onClose && this.items[key]?.onClose();
      delete this.items[key];
    },
    reset() {
      this.items = {};
    },
  },
});
