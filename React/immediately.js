export default function(func, delay, ...params) {
  let stackFunc = [];
  let timer = null;

  function immediately(delay, ...params) {
    stackFunc[0].apply(null, params);
    timer = setTimeout(() => {
      clearTimeout(timer);
      stackFunc = [];
      timer = null;
    }, delay);
  }

  return function() {
    stackFunc.push(func);
    if (timer === null) {
      immediately(delay, ...params);
    }
  };
}
