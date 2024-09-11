<template>
  <div class="mx-4 mt-16">
    <h2 class='ml-col3 mr-col3 text-white text-runde-xl mb-4'>Credits</h2>
    <div class="ml-col3 mr-col3 text-runde-xs font-semibold">
      <ul class="text-white columns-3">
        <li class="mb-4 break-inside-avoid-column" v-for="credit in credits">
          <div class="uppercase" v-if="credit.title">{{ credit.title }}: </div>
          <div>{{ credit.text }}</div>
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