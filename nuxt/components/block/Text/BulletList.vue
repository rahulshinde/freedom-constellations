<template>
  <div class="mx-4 mt-4">
    <div class="flex flex-col items-baseline ml-col3 mr-col3 text-white text-runde-s">
      <div class="flex mt-4 pl-col2 items-start" v-for="listItem in list">
        <IconsAstrix fill="var(--navigation-highlight)" class="w-4 h-4 relative top-0.5 mr-4" />
        <p class="w-full">{{ listItem }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    list: Array,
  });
</script>