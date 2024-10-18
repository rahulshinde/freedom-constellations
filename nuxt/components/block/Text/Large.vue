<template>
  <div class="mx-4 mt-8">
    <p class="ml-col3 mr-col3 text-white text-runde-xl">
      {{ props.text }}
    </p>
  </div>
</template>

<script setup>
  const props = defineProps({
    text: String,
  });
</script>