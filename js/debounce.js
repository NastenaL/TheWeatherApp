const DEBOUNCE_TIME = 500;

function debounce() {
  timeoutId = null;

  return {
    init() {
      return new Promise((resolve) => {
        //LOad...

        if (timeoutId !== null) {
          clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(() => {
          resolve();
          //.....
        }, DEBOUNCE_TIME);
      });
    },
  };
}
