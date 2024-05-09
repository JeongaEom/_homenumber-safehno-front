const formatNumber = (Nb) => {
  if (Nb.length < 7) {
    return Nb;
  }
  return `${Nb.substring(0, 3)}-${Nb.substring(3, 7)}-${Nb.substring(7)}`;
};

export { formatNumber as f };
//# sourceMappingURL=index-V9QIjJbu.mjs.map
