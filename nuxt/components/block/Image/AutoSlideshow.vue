<template>
  <section class="mx-4 mt-8 relative
    before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-0 before:w-20 before:bg-gradient-to-r before:from-black before:to-black-trans before:z-[10]
    after:content-['']  after:absolute after:top-0 after:bottom-0 after:right-0 after:w-20 after:bg-gradient-to-l after:from-black after:to-black-trans after:z-[10]
  ">
    <div class="w-full h-[25vw] overflow-hidden">
      <div class="flex scroll-wrapper h-full w-auto">
        <img
          v-for="(image, index) in images"
          :key="index"
          :src="image"
          class="h-full w-auto"
        />
        <img
          v-for="(n,index) in repeatImages"
          :src="n"
          class="h-full w-auto"
        />
      </div>
    </div>
    <a
      :href="downloadLink"
      class="flex mx-col3 mt-4 uppercase text-runde-s font-semibold"
      :class="hoverColorClass(color)"
      target="_blank"
      rel="noopener noreferrer"
    >
      {{ downloadText }} <IconsDownload :fill="color" class="w-5 h-5 ml-2" />
    </a>
  </section>
</template>

<script setup>
  const props = defineProps({
    images: Array,
    downloadLink: String,
    downloadText: String,
    color: String
  })

  import anime from 'animejs/lib/anime.es.js';

  const imageCount = computed(() => props.images.length)
  const imageWidth = ref(0)

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

  const repeatImages = computed(() => {
    // return first 3 images from props.images
    return props.images.slice(0, 3)
  })

  const setImageWidth = () => {
    imageWidth.value = document.querySelector('.scroll-wrapper img').clientWidth
  }

  onMounted(()=>{
    nextTick(()=>{
      setImageWidth()
      anime({
        targets: '.scroll-wrapper',
        translateX: imageWidth.value * (imageCount.value * -1),
        loop: true,
        duration: imageCount.value * 10000,
        easing: 'linear'
      });
    })
  })
</script>