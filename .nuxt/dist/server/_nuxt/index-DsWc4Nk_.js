import "./app-JHcOLCEC.js";
import "vue";
import "hookable";
const formatNb = (Nb) => {
  if (Nb.length < 7) {
    return Nb;
  }
  return `${Nb.substring(0, 3)}-${Nb.substring(3, 7)}-${Nb.substring(7)}`;
};
export {
  formatNb as f
};
//# sourceMappingURL=index-DsWc4Nk_.js.map
