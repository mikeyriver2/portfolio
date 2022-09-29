export async function visibilityHandler(e) {
    const nav = document.querySelector('.mikeyriver__nav');
    const navIsVisible = await isElementInViewport(nav);
    return {
        nav: navIsVisible
    }
}

export async function isElementInViewport (e) {
    // https://stackoverflow.com/questions/123999/how-can-i-tell-if-a-dom-element-is-visible-in-the-current-viewport/7557433#7557433
    let isIntersecting = false

    const observerPromise = new Promise((resolve, reject) => {
        const observer = new window.IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                isIntersecting = true;
            }
                resolve(isIntersecting)
            }, {
            root: null,
            threshold: 0.1, // set offset 0.1 means trigger if atleast 10% of element in viewport
        })
    
        observer.observe(e);
    });
    
    const toReturn = await observerPromise; 
    return toReturn;
}

