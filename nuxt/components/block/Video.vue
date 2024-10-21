<template>
  <video
    class="video-js vjs-default-skin mt-8 mx-8"
    ref="videoPlayer"
  >
    <source
      :src="video"
      type='video/mp4'
    >

  </video>
</template>

<script setup>
  import videojs from "video.js";

  const videoPlayer = ref(null);
  import 'video.js/dist/video-js.css'

  const props = defineProps({
    video: String
  });

  onMounted(() => {
    const player = videojs(videoPlayer.value, {
      autoplay: false,
      controls: true,
    }, function onPlayerReady() {
      console.log('Player is ready!');
    });
  });
</script>

<style>
.vjs_video_3-dimensions,
.vjs_video_822-dimensions {
  width: calc(100% - 4rem) !important;
  height: calc((100svw - 8rem) * 0.6) !important;
}

.video-js .vjs-tech{
  object-fit: cover;
}
</style>