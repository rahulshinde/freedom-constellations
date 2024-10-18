<template>
  <figure class="mx-8 mt-8">
    <img
      :src="img"
      :alt="alt"
      class="w-col9 mx-auto"
    >
    <figcaption v-if="props.caption != ''" class="text-center text-white text-runde-m pt-4">
      {{ props.caption }}
    </figcaption>
  </figure>
</template>

<script setup>
  const props = defineProps({
    img: String,
    alt: String,
    caption: String,
  });
</script>