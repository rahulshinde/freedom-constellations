<template>
  <div class='mt-8 mx-8'>
    <video
      class="video-js vjs-default-skin"
      ref="videoPlayer"
    >
      <source
        :src="video"
        type='video/mp4'
      >
  
    </video>
  </div>
</template>

<script setup>
  import videojs from "video.js";

  const videoPlayer = ref(null);
  import 'video.js/dist/video-js.css'

  const props = defineProps({
    video: String,
    poster: String,
  });

  onMounted(() => {
    const player = videojs(videoPlayer.value, {
      autoplay: false,
      controls: true,
      fluid: true,
      responsive: true,
      poster: props.poster,
      aspectRatio: '16:9'
    }, function onPlayerReady() {
      console.log('Player is ready!');
    });
  });
</script>

<style>

.video-js .vjs-tech{
  object-fit: cover;
}
</style>