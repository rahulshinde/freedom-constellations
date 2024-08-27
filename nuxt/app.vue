<template>
  <div>
    <SiteHeader v-if="route.name != 'index' "/>
    <NuxtPage />
    <SiteFooter/>
  </div>
</template>

<script setup>
  const route = useRoute()
  console.log('current name', route.name)
</script>