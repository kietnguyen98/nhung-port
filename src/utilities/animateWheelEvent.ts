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
  toDefaultBrowserBehavior?: boolean;
};

export const animateWheelEvent = ({
  event,
  wheelSpeed = 1,
  wheelDirection = 'vertical',
  scrollWrapperElement,
  shouldAnimate = false,
  toDefaultBrowserBehavior = false,
}: TAnimateWheelEventProps) => {
  if (toDefaultBrowserBehavior) return;
  if (shouldAnimate) {
    if (!event.deltaY) return;
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
      delta * wheelSpeed;

    animateScroll({
      scrollPosition: scrollPosition,
      wheelDirection: wheelDirection,
      scrollWrapperElement: scrollWrapperElement,
    });
  } else {
    if (!event.deltaY) return;
    if (wheelDirection === 'vertical') {
      scrollWrapperElement.scrollTop +=
        wheelSpeed * (event.deltaY + event.deltaX);
    } else if (wheelDirection === 'horizontal') {
      scrollWrapperElement.scrollLeft +=
        wheelSpeed * (event.deltaY + event.deltaX);
    }
  }
  event.preventDefault();
};
