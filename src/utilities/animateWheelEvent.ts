export type TAnimateWheelEventProps = {
  event: WheelEvent;
  wheelSpeed?: number;
  wheelDirection?: 'horizontal' | 'vertical';
  scrollWrapperElement: HTMLElement;
  shouldAnimate: boolean;
};

export const animateWheelEvent = ({
  event,
  wheelSpeed = 3,
  wheelDirection = 'vertical',
  scrollWrapperElement,
  shouldAnimate = false,
}: TAnimateWheelEventProps) => {
  if (shouldAnimate) {
    if (!event.deltaY) return;
    if (wheelDirection === 'vertical') {
      scrollWrapperElement.scrollTop +=
        wheelSpeed * (event.deltaY + event.deltaX);
    } else if (wheelDirection === 'horizontal') {
      scrollWrapperElement.scrollLeft +=
        wheelSpeed * (event.deltaY + event.deltaX);
    }

    event.preventDefault();
  }
};
