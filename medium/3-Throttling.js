function throttle(func, wait) {
  let shouldWait = false;

  return function (...args) {
    if (shouldWait) {
      return;
    } else {
      func.apply(this, args);
      shouldWait = true;
      setTimeOut(() => {
        shouldWait = false;
      }, wait);
    }
  };
}
