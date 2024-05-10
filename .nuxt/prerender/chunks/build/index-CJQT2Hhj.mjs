import { d as defineStore } from './server.mjs';

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

export { uAddError as a, formatNb as f, useAppStore as u };
//# sourceMappingURL=index-CJQT2Hhj.mjs.map
