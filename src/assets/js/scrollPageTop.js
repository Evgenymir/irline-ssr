const scrollPageTop = () => {
  if (typeof window !== 'object') {
    return;
  }
  window.scrollTo(0, 0);
};

export default scrollPageTop;
