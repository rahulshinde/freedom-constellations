<template>
  <div class="flex mx-4 mt-8 items-center"
    :class="reverse ? 'flex-row-reverse' : 'flex-row'"
    >
    <img 
      class="w-col6 mx-4 max-h-[80svh] object-contain" 
      :class="reverse ? 'object-left' : 'object-right'"
      :src="img"
    >
    <div class="w-col6 flex flex-col relative mr-4">
      <p 
        class="flex flex-col w-[80%]"
        :class="[
          reverse ? 'ml-[20%]' : '',
          textColorClass(color)
        ]"
      >
        <span class="quote relative pl-4 font-hatton self-center text-hatton-xl">{{ quote }}”</span>
        <span v-if="attribution != ''" class='ml-8 mt-2 text-runde-xl'>—{{ attribution }}</span>
      </p>

      <div
        class="flex items-end mt-4"
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
    attribution: {
      type: String,
      default: ''
    },
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