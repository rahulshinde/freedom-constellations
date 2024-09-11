<template>
  <svg width="73" height="61" viewBox="0 0 73 61" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M29.3694 3.7832L4 30.5005L29.3694 57.2177" :stroke="fill" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M4 30.2578H69.4785" :stroke="fill" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>

<script setup>
  const props = defineProps({
    fill: {
      type: String,
      default: '#fff'
    }
  });
</script>