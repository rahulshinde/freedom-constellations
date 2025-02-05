<template>
  <a :href="link"
    target="_blank"
    rel="noopener noreferrer"
    class="group flex flex-col items-center transition-all block" 
    :class="hoverColorClass(color)"
  >
    <figure class='relative group-hover:rounded-xl h-[10vw] w-auto transition-all overflow-hidden'>
      <div class='gradient_overlay absolute z-10'></div>
      <img
        class="max-w-full max-h-full object-contain block grayscale contrast-150" 
        :src="image" 
      >
    </figure>
    <div class="flex flex-col text-runde-s font-semibold mt-4">
      <span class="flex uppercase">{{ text }} <IconsLinkArrow :color="color" class="shrink-0 mt-0.5 w-5 h-5 ml-4" /></span>
      <span class="text-runde-xs mt-1">{{ source }}</span>
    </div>
  </a>
</template>

<script setup>
  const props = defineProps({
    text: String,
    source: String,
    image: String,
    link: String,
    color: String
  })
  const hoverColorClass = ((color) => {
    switch (color) {
      case 'var(--nkip)':
        return 'hover:text-nkip hover:drop-shadow-[0_0_0.5rem_var(--nkip)]';
      case 'var(--billboards)':
        return 'hover:text-billboards hover:drop-shadow-[0_0_0.5rem_var(--billboards)]';
      case 'var(--projects)':
        return 'hover:text-projects hover:drop-shadow-[0_0_0.5rem_var(--projects)]';
      case 'var(--programs)':
        return 'hover:text-programs hover:drop-shadow-[0_0_0.5rem_var(--programs)]';
      case 'var(--bg-highlight)':
        return 'hover:text-bg-highlight hover:drop-shadow-[0_0_0.5rem_var(--bg-highlight)]';
    }
  });
</script>

<style>
.gradient_overlay {
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  mix-blend-mode: screen;
}

.gradient_overlay::before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  filter: contrast(180%) brightness(100%);
  background:
	url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
}

.gradient_overlay:after{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  mix-blend-mode: multiply;
  background: v-bind(props?.color); 
}
</style>