import type { IOptions } from "./index";
import { offset } from "./offset";

export const handeScroll = (
  rosElement: NodeListOf<HTMLElement>,
  options: IOptions,
) => {
  const scrollTop = window.pageYOffset;
  rosElement.forEach((element) => {
    const elementPosition =
      offset(element) + element.clientHeight * options.threshold;
    if (elementPosition < window.innerHeight + scrollTop) {
      element.classList.add("ros-active");
    } else {
      element.classList.remove("ros-active");
    }
  });
};
