<template>
  <section class="mx-4 mt-16">
    <div class="ml-col2 mr-col2 text-white whitespace-pre-wrap">
      <p class="font-hatton text-hatton-l text-navigation-highlight float-left w-[33%] mt-4 mr-8 mb-8">{{ props.quote }}</p>
      <p class="ml-col2 text-runde-m">{{ props.text }}</p>
    </div>
  </section>
</template>

<script setup>
  const props = defineProps({
    text: String,
    quote: String,
  });
</script>