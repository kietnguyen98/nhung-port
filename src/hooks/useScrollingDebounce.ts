import { ref } from 'vue';

import { MIN_WHEEL_SCROLL_DURATION } from '@/constants';

type TUseScrollingDebounceProps = {
  scrollWrapperElement: HTMLElement;
  debounceTime: number;
};

export function useScrollingDebounce({
  scrollWrapperElement,
  debounceTime = 0,
}: TUseScrollingDebounceProps) {
  const isScrolling = ref<boolean>(false);

  scrollWrapperElement.addEventListener(
    'scroll',
    function () {
      if (!isScrolling.value) {
        isScrolling.value = true;

        setTimeout(() => {
          setTimeout(() => {
            isScrolling.value = false;
          }, debounceTime);
        }, MIN_WHEEL_SCROLL_DURATION);
      }
    }
  );

  return { isScrolling };
}
