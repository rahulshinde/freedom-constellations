<template>
  <figure class="mx-4 mt-8">
    <img
      :src="img"
      :alt="alt"
      class="w-col8 mx-auto"
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
    caption: {
      type: String,
      default: '',
    },
  });
</script>