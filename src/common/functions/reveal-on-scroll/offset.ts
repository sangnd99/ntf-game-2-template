export const offset = (element: HTMLElement) => {
  let offsetTop = 0;
  while (element) {
    offsetTop += element.offsetTop;
    element = element.offsetParent as HTMLElement;
  }
  return offsetTop;
};
