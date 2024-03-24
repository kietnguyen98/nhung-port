import animateScrollTo from 'animated-scroll-to';

import { MIN_WHEEL_SCROLL_DURATION } from '@/constants';

export const blockWheelEvent = (e: Event) => {
    e.preventDefault();
    return false;
};

export type TAnimateWheelEventProps = {
    event: WheelEvent;
    wheelDirection?: 'horizontal' | 'vertical';
    scrollWrapperElement: HTMLElement;
};

export const animateWheelEvent = ({
    event,
    wheelDirection = 'vertical',
    scrollWrapperElement,
}: TAnimateWheelEventProps) => {
    event.preventDefault();
    const scrollSpeed = 3;
    const delta = event.deltaY;
    const scrollPosition =
        (wheelDirection === 'vertical'
            ? scrollWrapperElement.scrollTop
            : scrollWrapperElement.scrollLeft) +
        delta * scrollSpeed;

    animateScrollTo(
        wheelDirection === 'vertical'
            ? [0, scrollPosition]
            : [scrollPosition, 0],
        {
            cancelOnUserAction: false,
            easing: (t) => {
                return --t * t * t * t * t + 1;
            },
            minDuration: MIN_WHEEL_SCROLL_DURATION,
            maxDuration: MIN_WHEEL_SCROLL_DURATION,
            elementToScroll: scrollWrapperElement,
        }
    );
};
