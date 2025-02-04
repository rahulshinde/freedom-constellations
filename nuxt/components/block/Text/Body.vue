<template>
  <div class="mx-4 mt-4 md:mt-8">
    <h2 v-if="heading" class="px-0 md:px-12 md:mx-col2 lg:mx-col3 text-white text-runde-xl mb-4">
      {{ heading }}
    </h2>
    <p 
      class="md:px-12 md:mx-col2 lg:mx-col3 text-white text-runde-s md:text-runde-m whitespace-pre-wrap" 
      v-html="text"
    ></p>
  </div>
</template>

<script setup>
  const props = defineProps({
    text: String,
    heading: String,
  });
</script>

<style>
  p a{
    text-decoration: underline;
    transition: color 0.3s;
  }
  p a:hover{
    color: var(--navigation-highlight);
  }
</style>