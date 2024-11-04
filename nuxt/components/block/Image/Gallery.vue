<template>
  <figure>
    <div class="px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-4 md:mt-8">
      <div v-for="image in props.images" :key="image">
        <img
          :src="image"
          :alt="props.alt"
          class="w-full"
        >
      </div>
    </div>
    <figcaption v-if="caption != ''" class="text-center text-white text-runde-m pt-4">
      {{ caption }}
    </figcaption>
  </figure>
</template>

<script setup>
  const props = defineProps({
    images: Array,
    alt: String,
    caption: {
      type: String,
      default: '',
    },
  });
</script>