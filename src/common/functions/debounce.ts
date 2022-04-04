export const debounce = <A = unknown, R = void>(
  fn: (args: A) => R,
  ms: number,
) => {
  let timer: NodeJS.Timeout;

  return (args: A) => {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      fn(args);
    }, ms);
  };
};
