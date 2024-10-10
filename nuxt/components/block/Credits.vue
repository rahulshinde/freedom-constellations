<template>
  <div class="mx-4 mt-16">
    <h2 class='ml-col3 mr-col3 text-white text-runde-xl mb-4'>Credits</h2>
    <div class="ml-col3 mr-col3">
      <ul class="text-white columns-3 gap-8">
        <li class="mb-8 break-inside-avoid-column" v-for="credit in credits">
          <div class="uppercase text-runde-xs font-semibold" v-if="credit.title">{{ credit.title }}</div>
          <div class="mt-4">{{ credit.text }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    credits: Array
  });
</script>