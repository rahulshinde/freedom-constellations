<template>
  <div class="mx-4 mt-8">
    <h2 v-if="heading" class="ml-col3 mr-col3 text-white text-runde-xl mb-4">
      {{ heading }}
    </h2>
    <p class="ml-col3 mr-col3 text-white text-runde-m whitespace-pre-wrap" v-html="text">
      
    </p>
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