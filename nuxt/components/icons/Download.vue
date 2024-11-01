<template>
  <svg width="85" height="78" viewBox="0 0 85 78" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.5608 34.3239C29.6514 44.2312 42.2781 53.6933 42.2781 53.6933C42.2781 53.6933 54.9048 44.2312 62.9954 34.3239" :stroke="fill" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M42.0358 53.6933L42.0358 4.21477" :stroke="fill" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M3.92016 34.231V73.7862H80.6814V34.231" :stroke="fill" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
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