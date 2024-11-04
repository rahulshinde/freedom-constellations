<template>
  <div class="bg-homepage bg-cover bg-center bg-fixed">
    <Transition name="modalTransition">
      <SiteHeader v-if="route.name != 'index' "/>
    </Transition>
    <NuxtPage :class="route.name != 'index' ? 'pt-20 md:pt-32' : ''" />
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
