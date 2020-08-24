export const debounce = (func, delay) => {
  let timeout;

  return (args) => {
    const execute = (args) => {
      timeout = null;
      func(args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(execute(args), delay);
  };
};
