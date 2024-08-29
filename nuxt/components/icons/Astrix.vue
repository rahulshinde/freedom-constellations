<template>
  <svg width="102" height="101" viewBox="0 0 102 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M51.0695 0.200684V100.949" :stroke="fill" stroke-width="6"/>
    <path d="M86.6894 14.955L15.4496 86.1947" :stroke="fill" stroke-width="6"/>
    <path d="M15.4496 14.955L86.6894 86.1947" :stroke="fill" stroke-width="6"/>
    <path d="M0.695404 50.5748L101.444 50.5748" :stroke="fill" stroke-width="6"/>
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