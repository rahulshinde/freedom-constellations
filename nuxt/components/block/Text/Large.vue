<template>
  <div class="mx-4 mt-8">
    <p class="mx-4 md:mx-col2 lg:mx-col3 text-white text-runde-l md:text-runde-xl">
      {{ props.text }}
    </p>
  </div>
</template>

<script setup>
  const props = defineProps({
    text: String,
  });
</script>