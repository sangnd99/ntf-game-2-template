export const pageYOffset = () => {
  window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
};

const handleScroll = () => {
  document.documentElement.style.setProperty(
    "--scroll-y",
    `${window.pageYOffset}px`,
  );
};
