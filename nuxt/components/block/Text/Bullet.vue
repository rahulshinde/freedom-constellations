<template>
  <div class="mx-4">
    <div class="flex items-baseline ml-col3 mr-col3 text-white text-runde-m">
      <IconsAstrix fill="var(--navigation-highlight)" class="w-12 h-12 relative top-4 mr-4" />
      <h2 class="w-col3 ml-4 mr-4 basis-col3 font-bold">{{ props.title }}</h2>
      <p class="w-col10">{{ props.text }}</p>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    title: String,
    text: String,
  });
</script>