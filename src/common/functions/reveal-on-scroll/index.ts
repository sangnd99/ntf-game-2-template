import { handeScroll } from "./handleScroll";
import { throttle } from "common/functions";

export interface IOptions {
  throttleDelay: number;
  threshold: number;
  duration: number;
  startEvent: string;
}

const initialOptions: IOptions = {
  throttleDelay: 100,
  threshold: 1,
  duration: 500,
  startEvent: "DomcontentLoaded",
};

export const revealOnScroll = (settings?: Partial<IOptions>) => {
  const options = Object.assign(initialOptions, settings);
  const rosElement: NodeListOf<HTMLElement> =
    document.querySelectorAll("[data-ros]");
  if (["DomcontentLoaded", "load"].indexOf(options.startEvent)) {
    window.addEventListener(options.startEvent, () => {
      rosElement.forEach((element) => {
        if (!element.hasAttribute("data-ros-duration")) {
          element.setAttribute("data-ros-duration", String(options.duration));
        }
      });
    });
  } else {
    window.addEventListener("load", () => {
      rosElement.forEach((element) => {
        if (!element.hasAttribute("data-ros-duration")) {
          element.setAttribute("data-ros-duration", String(options.duration));
        }
      });
    });
  }
  window.addEventListener(
    "scroll",
    throttle(() => handeScroll(rosElement, options), options.throttleDelay),
  );
};
