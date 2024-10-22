<template>
  <div class="mx-4 mt-16" :class='textColorClass(color)'>
    <div
      :class="reverse ? 'ml-col6 mr-col2' : 'ml-col2 mr-col6'"
    >
      <p 
        class="quote relative pl-4 font-hatton text-hatton-l whitespace-pre-wrap
        "
        v-html="text + '”'"
      ></p>
      <p class='ml-8 mt-2 text-runde-m'>—{{ attribution }}</p>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    text: String,
    attribution: String,
    reverse: Boolean,
    color: String
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