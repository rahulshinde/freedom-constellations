<template>
  <div class="mx-4">
    <div class="flex items-baseline mx-4 md:mx-col2 lg:mx-col3 text-white text-runde-m">
      <IconsAstrix fill="var(--navigation-highlight)" class="w-6 md:w-12 h-6 md:h-12 relative top-4 md:mr-4" />
      <h2 class="w-[40%] md:w-col3 ml-4 mr-4 text-runde-xs md:text-runde-m basis-col3 font-bold">{{ props.title }}</h2>
      <p class="w-[50%] md:w-col10 text-runde-xs md:text-runde-m">{{ props.text }}</p>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    title: String,
    text: String,
  });
</script>