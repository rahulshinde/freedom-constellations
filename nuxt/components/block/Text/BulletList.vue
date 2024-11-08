<template>
  <div class="mx-4 mt-4">
    <div 
      class="flex flex-col items-baseline ml-col3 mr-col3 pl-8 text-white"
      :class="large ? 'text-runde-m' : 'text-runde-s'"
    >
      <div class="flex mt-4 ml-11 pl-col2 items-start" v-for="listItem in list">
        <IconsAstrix fill="var(--navigation-highlight)" 
          class="relative mr-4" 
          :class="large ? 'w-6 h-6' : 'w-4 h-4 top-0.5'"
        />
        <p class="w-full">{{ listItem }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    list: Array,
    large: {
      type: Boolean,
      default: false,
    }
  });
</script>