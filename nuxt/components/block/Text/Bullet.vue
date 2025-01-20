<template>
  <div class="mt-8">
    <div class="flex flex-wrap md:px-10 md:flex-nowrap items-start mx-4 md:mx-col2 lg:mx-col3 text-white text-runde-m">
      <div class="flex w-col4 mx-4">
        <IconsAstrix fill="var(--navigation-highlight)" class="w-6 h-6 relative shrink-0 mr-8" />
        <h2 class="top-2 md:top-0 text-navigation-highlight relative text-runde-s md:text-runde-s font-hatton">{{ props.title }}</h2>
      </div>
      <p class="w-full mt-4 px-4 md:mt-0 md:w-col8 text-runde-xs md:text-runde-s">{{ props.text }}</p>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    title: String,
    text: String,
  });
</script>