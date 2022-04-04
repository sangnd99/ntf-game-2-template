export const handeScroll = (
  rosElement: NodeListOf<HTMLElement>,
  threshold: number,
) => {
  const scrollTop = window.pageYOffset;
  rosElement.forEach((element) => {
    const elementPosition =
      element.offsetTop + element.clientHeight * threshold;
    if (elementPosition < window.innerHeight + scrollTop) {
      element.classList.add("ros-active");
    } else {
      element.classList.remove("ros-active");
    }
  });
};
