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
  shouldAnimate,
}: TAnimateWheelEventProps) => {
  if (shouldAnimate) {
    event.preventDefault();
    const scrollSpeed = wheelSpeed;
    const delta = event.deltaY;
    const scrollPosition =
      (wheelDirection === 'vertical'
        ? scrollWrapperElement.scrollTop
        : scrollWrapperElement.scrollLeft) +
      delta * scrollSpeed;

    animateScroll({
      scrollPosition: scrollPosition,
      wheelDirection: wheelDirection,
      scrollWrapperElement: scrollWrapperElement,
    });
  }
  // else leave the scroll behavior as default
};
