export const debounce = (ms: number) => {
  let isFreeze = false;

  return (callback: (props?: any) => void) => {
    if (isFreeze) return;

    isFreeze = true;

    setTimeout(() => {
      callback();
      isFreeze = false;
    }, ms);
  };
};
