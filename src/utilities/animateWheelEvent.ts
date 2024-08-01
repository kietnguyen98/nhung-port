import {
  MIN_NEGATIVE_SCROLL_DELTA_Y,
  MIN_POSITIVE_SCROLL_DELTA_Y,
} from '@/constants';

import { animateScroll } from '.';

export type TAnimateWheelEventProps = {
  event: WheelEvent;
  wheelSpeed?: number;
  wheelDirection?: 'horizontal' | 'vertical';
  scrollWrapperElement: HTMLElement;
  shouldAnimate: boolean;
};

export const animateWheelEvent = ({
  event,
  wheelSpeed = 3.5,
  wheelDirection = 'vertical',
  scrollWrapperElement,
  shouldAnimate = false,
}: TAnimateWheelEventProps) => {
  if (shouldAnimate) {
    event.preventDefault();
    const scrollSpeed = wheelSpeed;
    const delta =
      event.deltaY < 0
        ? Math.min(
            MIN_NEGATIVE_SCROLL_DELTA_Y,
            event.deltaY
          )
        : Math.max(
            MIN_POSITIVE_SCROLL_DELTA_Y,
            event.deltaY
          );
    const scrollPosition =
      (wheelDirection === 'vertical'
        ? scrollWrapperElement.scrollTop
        : scrollWrapperElement.scrollLeft) +
      delta * scrollSpeed;

    console.log({ wheelSpeed });
    console.log({ scrollPosition });
    console.log({ delta });

    animateScroll({
      scrollPosition: scrollPosition,
      wheelDirection: wheelDirection,
      scrollWrapperElement: scrollWrapperElement,
    });
  }
};
