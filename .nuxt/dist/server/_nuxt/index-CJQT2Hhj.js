import "vue";
import "hookable";
import { u as useAppStore } from "./app-B3aFB6x9.js";
const formatNb = (Nb) => {
  if (Nb.length < 7) {
    return Nb;
  }
  return `${Nb.substring(0, 3)}-${Nb.substring(3, 7)}-${Nb.substring(7)}`;
};
const uAddError = (priority, cb) => {
  const app = useAppStore();
  if (app.isRouting) {
    if (app.error === null) {
      app.error = [priority, cb];
    } else if (app.error[0] < priority) {
      app.error = [priority, cb];
    }
  } else {
    cb();
  }
};
export {
  formatNb as f,
  uAddError as u
};
//# sourceMappingURL=index-CJQT2Hhj.js.map
