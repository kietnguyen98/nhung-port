import { ref } from 'vue';

export function usePlayVideo() {
  const currentVideoUrl = ref<string>('');
  const handlePlayNewVideo = (newVideoUrl: string) => {
    if (!newVideoUrl) return;
    if (newVideoUrl !== currentVideoUrl.value) {
      currentVideoUrl.value = newVideoUrl;
    }
  };

  return {
    currentVideoUrl,
    handlePlayNewVideo,
  };
}
