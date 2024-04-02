import { animateScroll } from '.';

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

  animateScroll({
    scrollPosition: scrollPosition,
    wheelDirection: wheelDirection,
    scrollWrapperElement: scrollWrapperElement,
  });
};
