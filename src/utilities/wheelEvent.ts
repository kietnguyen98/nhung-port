import animateScrollTo from 'animated-scroll-to';

export const blockWheelEvent = (e: Event) => {
    e.preventDefault();
    return false;
};

export type TAnimateWheelEventProps = {
    event: WheelEvent;
    scrollWrapperElement: HTMLElement;
};

export const animateWheelEvent = ({
    event,
    scrollWrapperElement,
}: TAnimateWheelEventProps) => {
    event.preventDefault();
    const scrollSpeed = 3;
    let delta = event.deltaY;
    let scrollPosition = scrollWrapperElement.scrollTop + delta * scrollSpeed;

    animateScrollTo(scrollPosition, {
        cancelOnUserAction: false,
        easing: (t) => {
            return --t * t * t * t * t + 1;
        },
        minDuration: 1250,
        elementToScroll: scrollWrapperElement,
    });
};