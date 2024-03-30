import { ref, watch } from 'vue';

export function useHover() {
  const refElement = ref<HTMLElement>();
  const isHover = ref<boolean>(false);

  const handleHoverElement = () => {
    isHover.value = true;
  };

  const handleUnHoverElement = () => {
    isHover.value = false;
  };

  watch(
    () => refElement.value,
    (newRefElement) => {
      if (newRefElement) {
        newRefElement.addEventListener(
          'mouseenter',
          handleHoverElement
        );
        newRefElement.addEventListener(
          'mouseleave',
          handleUnHoverElement
        );
      }
    }
  );

  return {
    refElement,
    isHover,
  };
}
