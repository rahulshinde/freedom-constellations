<template>
  <div class="mx-4 mt-4 md:mt-8">
    <p class="md:px-12 md:mx-col2 lg:mx-col3 text-runde-m md:text-runde-l md:text-runde-xl">
      <span class="text-navigation-highlight">{{ props.highlight }}</span> {{ props.text }}
    </p>
  </div>
</template>

<script setup>
  const props = defineProps({
    highlight: String,
    text: String,
  });
</script>