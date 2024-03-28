import animateScrollTo from 'animated-scroll-to';

import { MIN_WHEEL_SCROLL_DURATION } from '@/constants';

export type TAnimateWheelEventProps = {
    event: WheelEvent;
    wheelSpeed?: number;
    wheelDirection?: 'horizontal' | 'vertical';
    scrollWrapperElement: HTMLElement;
};

export const animateWheelEvent = ({
    event,
    wheelSpeed = 3.5,
    wheelDirection = 'vertical',
    scrollWrapperElement,
}: TAnimateWheelEventProps) => {
    event.preventDefault();
    const scrollSpeed = wheelSpeed;
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
