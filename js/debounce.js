function debounce() {
    timeoutId = null;
    DEBOUNCE_TIME = 500;

    return {
        init() {
            return new Promise((resolve) => {
                if (timeoutId !== null) {
                    clearTimeout(timeoutId);
                }
        
                timeoutId = setTimeout(() =>{
                    resolve()
                }, DEBOUNCE_TIME);
            })
        }
    };
}