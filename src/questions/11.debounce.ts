const debounce = (callback: Function, delay: number) => {
  let timer: number | null = null;

  return function (...args: any[]) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };
};


function log (a: any) {
  console.log('debounce ===========>', a);
}

const debounceLog = debounce(log, 1000);
debounceLog(1);
debounceLog(2);
debounceLog(3);
debounceLog(4);
debounceLog(5);
debounceLog(6);
debounceLog();
debounceLog();
debounceLog();
debounceLog();
debounceLog();
debounceLog(666);