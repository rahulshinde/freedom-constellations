<template>
  <section class="slideshow-wrapper flex flex-col justify-between h-full grow">
    <div 
      class="slider flex items-start slideshow whitespace-nowrap snap-mandatory scrollbar-hidden overflow-y-hidden snap-x overflow-scroll"
      ref="slideshow"
    >
      <figure v-for="(image, index) in images" :key="index" class="h-[80svh] flex flex-col flex-shrink-0 snap-start slide block mr-8 last:mr-0">
        <img :src="image.src" alt="image" class="w-auto h-full max-w-[100svw] object-cover"/>
        <figcaption v-if="image.caption != ''" class="text-white max-w-[20rem] text-wrap text-runde-xs mt-2 pl-8">{{ image.caption }}</figcaption>
      </figure>
    </div>

    <nav class="w-full slideshow-controls flex items-start justify-between pr-4 pl-4 mt-8">
      <div class="thumbnails flex flex-wrap ml-2">
        <button 
          class="mx-2 mb-4" v-for="(image, index) in images" :key="'thumb' + index"
          @click="setSlidePosition(index + 1)"
        >
          <img class="h-[6rem] opacity-50 hover:opacity-100 transition-opacity" :src="image.src"/>
        </button>
      </div>
      <div class="flex ml-4">
        <button class="mr-4"
          @click="prevSlide">
          <IconsBack class="w-12 h-auto"/>
        </button>
        <button
          @click="nextSlide"
          class='mr-4'
        >
          <IconsBack class="w-12 h-auto rotate-[180deg]"/>
        </button>
      </div>
    </nav>
  </section>
</template>

<script setup>
  const props = defineProps({
    images: Array
  });

  const currentIndex = ref(1)
  const slideshow = ref(null)
  const length = computed(() => props.images.length)

  const nextSlide = () => {
    let newIndex = currentIndex.value + 1
    if (newIndex > length.value - 1) {
      newIndex = length.value - 1
    }
    setSlidePosition(newIndex)
  }

  const prevSlide = () => {
    let newIndex = currentIndex.value - 1
    if (newIndex < 1) {
      newIndex = 0
    }
    setSlidePosition(newIndex)
  }

  const setSlidePosition = (index) => {
    const slideIndex = index - 1
    let scrollPosition = 0
    for (let i = 0; i < slideIndex; i++) {
      scrollPosition += slideshow.value.children[i].offsetWidth
    }


    slideshow.value.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    })
  }

  onMounted(() => {
    // update currentIndex when scrolling
    slideshow.value.addEventListener('scroll', () => {
      const slideWidth = slideshow.value.children[0].offsetWidth
      const slideIndex = Math.round(slideshow.value.scrollLeft / slideWidth)
      currentIndex.value = slideIndex + 1
    })
  })
</script>

<style>
  .slider::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  .slider {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
</style>