<template>
  <div class="mx-4">
    <div class="flex flex-wrap md:px-12 md:mx-col2 lg:mx-col3">
      <div 
        v-for="point, i in dataPoints" 
        class="w-full md:w-1/2 mt-8"
        :class="i % 2 === 0 ? 'md:pr-4' : 'md:pl-4'"
      >
        <h2 class="text-navigation-highlight mb-2 pr-4 font-hatton text-hatton-xl">{{ point.number }}</h2>
        <p class="text-runde-s -mt-2 ml-2/4">{{ point.text }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    dataPoints: Array
  });
</script>