<template>
  <audio
    class="video-js vjs-default-skin"
    ref="audioPlayer"
  >
    <source
      :src="src"
      type='audio/mp3'
    >

  </audio>
</template>

<script setup>
  import videojs from "video.js";

  const audioPlayer = ref(null);
  import 'video.js/dist/video-js.css'

  const props = defineProps({
    src: String
  });

  onMounted(() => {
    const player = videojs(audioPlayer.value, {
      autoplay: false,
      controls: true,
    }, function onPlayerReady() {
      console.log('Player is ready!');
    });
  });
</script>