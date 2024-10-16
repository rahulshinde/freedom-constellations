<template>
  <div class="flex mx-4 mt-16 items-stretch">
    <img class="w-col6 mx-4 max-h-[80svh] object-contain" :src="img">
    <div class="w-col6 flex relative mx-4">
      <p class="text-white font-hatton self-center text-hatton-l w-[70%]">{{ quote }}</p>

      <div
        class="flex absolute bottom-0 items-end"
        v-if="includeArLink"
      >
        <IconsArLink class="w-20 h-auto"/>
        <p class="ml-4 w-32 text-runde-xs font-semibold">Scan or click the qr code to view the AR Experience</p>
      </div>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    img: String,
    quote: String,
    includeArLink: Boolean
  });
</script>