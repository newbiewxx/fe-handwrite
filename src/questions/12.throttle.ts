const throttle = (callback: Function, delay: number) => {
  let timer: number | null = null;

  return function (...args: any[]) {
    if (timer) return;

    timer = setTimeout(() => {
      callback.apply(this, args);
      timer = null;
    }, delay);
  };
};

const log = (a: any) => console.log('log ============>', a);

const throttledLog = throttle(log, 1000);

throttledLog(1);
throttledLog(2);
throttledLog(3);
await new Promise((resolve) => setTimeout(resolve, 1000));
throttledLog(4);
throttledLog(5);
throttledLog(6);


