interface ButtonOption {
  text: string;
  styleType?: string;
  onConfirm?: () => void;
}

interface ModalItem {
  key: string | null;
  type: string;
  title: string | null;
  message: string | null;
  isActive: boolean;
  onClose: (() => void) | null;
  buttons: ButtonOption[] | null;
  size: number;
}

let currentKey = 0;
const MAX_KEYCOUNT_ROUTE = 900000000;

export const uGenKey = (prefix: string | null = null): string => {
  if (currentKey > MAX_KEYCOUNT_ROUTE) {
    currentKey = 0;
  }
  return `${prefix ? `${prefix}-` : ''}${currentKey++}`;
};

const itemBase = (): ModalItem => ({
  key: null,
  type: "modal",
  title: null,
  message: null,
  isActive: false,
  onClose: null,
  buttons: null,
  size: 1000,
});

export const useModalStore = defineStore('modal', {
  state: () => ({
    items: {} as Record<string, ModalItem>,
  }),
  actions: {
    open(p: ((key: string | null) => void) | ModalItem, options: Partial<ModalItem> = {}): string {
      let newItem: ModalItem;
      if (typeof p === "function") {
        newItem = {
          ...options,
          isActive: true,
          onClose: () => {
            p(null);
          },
        } as ModalItem;
      } else if (typeof p === "object") {
        newItem = p;
      } else {
        throw new Error('Invalid parameter');
      }
      newItem.key = newItem.key === undefined ? uGenKey("modal") : newItem.key;
      this.items[newItem.key ?? "defaultKey"] = { ...itemBase(), ...newItem };
      if (newItem.key !== null) {
          this.items[newItem.key].isActive = true;
          if (typeof p === "function") p(newItem.key);
      }
      return newItem.key ?? "defaultKey";
    },
    alert(msg: string | ModalItem, onClose: (() => void) | null = null): void {
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
          buttons: [{ text: "확인" }],
        } as ModalItem);
      } else {
        msg.type = "alert";
        this.open(msg);
      }
    },
    confirm(message: string, onConfirm: () => void): void {
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
      } as ModalItem);
    },
    close(key: string): void {
      this.items[key]?.onClose?.();
      delete this.items[key];
    },
    reset(): void {
      this.items = {};
    },
  },
});
