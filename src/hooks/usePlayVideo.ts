import animateScrollTo from 'animated-scroll-to';
import { ref } from 'vue';

import { MIN_WHEEL_SCROLL_DURATION } from '@/constants';

type TUsePlayVideoProps = {
  scrollWrapperElement: HTMLElement;
};

export function usePlayVideo({
  scrollWrapperElement,
}: TUsePlayVideoProps) {
  const currentVideoUrl = ref<string>('');
  const videoFrameElement = ref<HTMLElement>();
  const handlePlayNewVideo = (newVideoUrl: string) => {
    if (!newVideoUrl) return;
    if (newVideoUrl !== currentVideoUrl.value) {
      currentVideoUrl.value = newVideoUrl;

      // scroll to video frame
      if (videoFrameElement.value) {
        const videoFramePosition =
          videoFrameElement.value.getBoundingClientRect()
            .top;
        const wrapperScrollTop =
          scrollWrapperElement.scrollTop;

        animateScrollTo(
          [0, wrapperScrollTop + videoFramePosition],
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
    }
  };

  return {
    currentVideoUrl,
    videoFrameElement,
    handlePlayNewVideo,
  };
}
