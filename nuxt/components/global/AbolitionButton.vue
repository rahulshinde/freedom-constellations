<template>
  <NuxtLink to="/abolitionist-toolkit" class="flex flex-col items-center rounded-lg text-center text-runde-xs md:text-runde-s font-bold leading-[1] px-0 md:px-4 py-2 bg-bg-highlight">
    <IconsShackles class="h-6 md:h-8 mb-2" />
    Abolitionist <br> Tool-Kit
    <p v-if="large" class="text-runde-xs mt-2 mb-2 max-w-40">
      Free cultural organizing strategies, downoadable art, and curriculums.
    </p>
  </NuxtLink>
</template>

<script setup>
  const props = defineProps({
    large: {
      type: Boolean,
      default: false,
    }
  });
</script>