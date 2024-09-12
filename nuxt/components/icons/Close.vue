<template>
  <svg width="55" height="54" viewBox="0 0 55 54" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.30273 49.9102L50.603 3.60985" :stroke="fill" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M50.603 49.9102L4.30273 3.60985" :stroke="fill" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>

<script setup>
  const props = defineProps({
    fill: {
      type: String,
      default: 'white'
    }
  });
</script>