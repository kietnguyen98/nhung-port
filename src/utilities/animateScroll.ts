import animateScrollTo from 'animated-scroll-to';

import { MIN_WHEEL_SCROLL_DURATION } from '@/constants';

export type TAnimateScroll = {
  scrollPosition: number;
  wheelDirection: 'horizontal' | 'vertical';
  scrollWrapperElement: HTMLElement;
};

export function animateScroll({
  scrollPosition,
  wheelDirection,
  scrollWrapperElement,
}: TAnimateScroll) {
  return animateScrollTo(
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
}