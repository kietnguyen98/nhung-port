import animateScrollTo from 'animated-scroll-to';

export const blockWheelEvent = (e: Event) => {
    e.preventDefault();
    return false;
};

export const animateWheelEvent = (
    e: WheelEvent,
    scrollWrapperElement: HTMLElement
) => {
    e.preventDefault();
    const scrollSpeed = 3;
    let delta = e.deltaY;
    let scrollPosition = scrollWrapperElement.scrollTop + delta * scrollSpeed;

    animateScrollTo(scrollPosition, {
        cancelOnUserAction: true,
        easing: (t) => {
            return --t * t * t * t * t + 1;
        },
        minDuration: 1000,
        elementToScroll: scrollWrapperElement,
    });
};
