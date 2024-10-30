<template>
  <figure class="mt-8">
    <img
      v-if="image"
      :src="image"
      :alt="alt"
      class="w-full">
    <video
      v-else-if="video"
      :src="video"
      class="w-full h-[80svh]"
      :class="cover ? 'object-cover' : 'object-contain'"
      autoplay
      loop
      muted
      playsinline
    >
      Your browser does not support the video tag.
    </video>
  </figure>
</template>

<script setup>
  const props = defineProps({
    image: String,
    video: String,
    alt: String,
    caption: String,
    cover: {
      type: Boolean,
      default: false
    }
  });
</script>