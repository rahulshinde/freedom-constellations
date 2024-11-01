<template>
  <a :href="filePath + '.pdf'"
    target="_blank"
    rel="noopener noreferrer"
    class="group transition-all" 
    :class="hoverColorClass(color)"
  >
    <figure class='relative group-hover:rounded-xl transition-all overflow-hidden'>
      <div class='gradient_overlay absolute z-10'>

      </div>
      <img
        class="w-full grayscale"
        :src="filePath + '.jpg'"
      >
    </figure>
    <div class="flex text-runde-s font-semibold uppercase mt-4">
      {{ text }} <IconsDownload :fill="color" class="w-5 h-5 ml-2" />
    </div>
  </a>
</template>

<script setup>
  const props = defineProps({
    text: String,
    filePath: String,
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
  width: 100%;
  height: 100%;
  filter: contrast(170%) brightness(1000%);
  mix-blend-mode: screen;
  background: 
  radial-gradient(circle at 50% 50%, v-bind(props?.color), rgba(255,255,255,0)),
	url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
}
</style>