<template>
  <div class='mx-4 mt-8 md:mt-16'>
    <h1 class="px-0 md:px-12 md:mx-col2 lg:mx-col3 text-white font-hatton text-hatton-l md:text-hatton-xl">
      {{ props.text }}
    </h1>
  </div>
</template>

<script setup>
  const props = defineProps({
    text: String,
  });
</script>