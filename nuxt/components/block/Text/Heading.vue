<template>
  <div class='mx-4 mt-8'>
    <h1 class="ml-col3 mr-col3 text-white font-hatton text-hatton-xl">
      {{ props.text }}
    </h1>
  </div>
</template>

<script setup>
  const props = defineProps({
    text: String,
  });
</script>