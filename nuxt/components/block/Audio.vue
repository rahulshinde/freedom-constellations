<template>
  <div class="mx-4 mt-8">
    <div class="mx-col3 px-12">
      <h2 class="px-12 text-runde-xs uppercase font-semibold text-center">{{ title }}</h2>
      <div class="relative w-full h-[33vw] mt-4">
        <img
          :src="cover"
          class="w-full absolute h-full object-cover"
        />
        <audio
          class="w-full !bg-transparent h-full video-js vjs-default-skin"
          ref="audioPlayer"
        >
          <source
            :src="src"
            type='audio/mp3'
          >
        </audio>
      </div>
    </div>
  </div>
</template>

<script setup>
  import videojs from "video.js";

  const audioPlayer = ref(null);
  import 'video.js/dist/video-js.css'

  const props = defineProps({
    src: String,
    title: String,
    cover: String,
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