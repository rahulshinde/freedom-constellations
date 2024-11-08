<template>
  <div class="md:mx-4">
    <div class="flex flex-wrap md:px-12 md:flex-nowrap items-baseline mx-4 md:mx-col2 lg:mx-col3 text-white text-runde-m">
      <IconsAstrix fill="var(--navigation-highlight)" class="w-6 md:w-col2 h-6 md:h-8 relative top-3 md:mr-4" />
      <h2 class="top-2 md:top-0 relative w md:w-col3 ml-4 mr-4 text-runde-s md:text-runde-s md:basis-col3 font-semibold">{{ props.title }}</h2>
      <p class="pl-10 w-full mt-4 md:mt-0 md:w-col10 text-runde-xs md:text-runde-s">{{ props.text }}</p>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    title: String,
    text: String,
  });
</script>