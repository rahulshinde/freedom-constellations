<template>
  <div class="bg-homepage bg-cover bg-center bg-fixed">
    <SiteHeader :class="route.name == 'index' ? 'md:hidden' : ''" />
    <NuxtPage :class="route.name != 'index' ? 'pt-12 md:pt-36' : ''" />
    <SiteFooter class="z-10"/>
    <Grid />
  </div>
</template>

<script setup>
  const route = useRoute()
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}

.modalTransition-enter-active,
.modalTransition-leave-active {
  transition: opacity 0.3s;
}


.modalTransition-enter-from,
.modalTransition-leave-to {
  opacity: 0;
}

</style>
