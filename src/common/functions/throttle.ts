export const throttle = <A = unknown, R = void>(
  fn: (args: A) => R,
  ms: number,
) => {
  let shouldWait = false;
  let waitingArgs: A | null;
  const timeoutFunc = () => {
    if (waitingArgs === null) {
      shouldWait = false;
    } else {
      fn(waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFunc, ms);
    }
  };
  return (args: A) => {
    if (shouldWait) {
      waitingArgs = args;
      return;
    }
    shouldWait = true;
    fn(args);
    setTimeout(timeoutFunc, ms);
  };
};
