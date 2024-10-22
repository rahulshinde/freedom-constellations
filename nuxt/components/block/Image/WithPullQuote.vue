<template>
  <div class="flex mx-4 mt-8 items-center"
    :class="reverse ? 'flex-row-reverse' : 'flex-row'"
    >
    <img class="w-col6 mx-4 max-h-[80svh] object-contain" :src="img">
    <div class="w-col6 flex relative mx-4">
      <p 
        class="flex flex-col w-[70%]"
        :class="[
          reverse ? 'ml-[30%]' : '',
          textColorClass(color)
        ]"
      >
        <span class="quote relative pl-3 font-hatton self-center text-hatton-l">{{ quote }}”</span>
        <span class='ml-8 mt-2 text-runde-m'>—{{ attribution }}</span>
      </p>

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
    attribution: String,
    includeArLink: Boolean,
    color: String,
    reverse: Boolean
  });

  const textColorClass = ((color) => {
    switch (color) {
      case 'var(--nkip)':
        return 'text-nkip';
      case 'var(--billboards)':
        return 'text-billboards';
      case 'var(--projects)':
        return 'text-projects';
      case 'var(--programs)':
        return 'text-programs';
      case 'var(--bg-highlight)':
        return 'text-bg-highlight';
    }
  });
</script>

<style>
  .quote:before{
    content: '“';
    position: absolute;
    left: -0.25rem
  }
</style>