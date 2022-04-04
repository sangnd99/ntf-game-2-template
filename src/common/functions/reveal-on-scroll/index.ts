import { handeScroll } from "./handleScroll";
import { throttle } from "common/functions";

interface IOptions {
  throttleDelay: number;
  threshold: number;
}

const initialOptions: IOptions = {
  throttleDelay: 100,
  threshold: 1,
};

export const revealOnScroll = (settings?: IOptions) => {
  const options = Object.assign(initialOptions, settings);
  const rosElement: NodeListOf<HTMLElement> =
    document.querySelectorAll("[data-ros]");
  window.addEventListener(
    "scroll",
    throttle(
      () => handeScroll(rosElement, options.threshold),
      options.throttleDelay,
    ),
  );
};
