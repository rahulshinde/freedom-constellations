<template>
  <main>
    <h1 class="mx-8 mt-16 relative z-20 text-runde-xxl font-semibold">Abolishionist Artist Billboards</h1>
    <section class="mx-4 mt-8 flex flex-wrap bg-black relative z-10 pb-16
        before:content-[''] before:absolute before:w-full before:h-[20svh] before:bg-gradient-to-b to-black from-black-trans before:-top-[20svh] before:left-0 before:z-0">
      <button 
        v-for="slide, index in slides"
        class="mx-4 mb-8"
        :class="slide.small ? 'smallSlideButton' : 'w-col6'"
        @click="openSlideshow(index)"
      >
        <img 
          :src="slide.img"
        />
      </button>
    </section>

    <section 
      class="fixed z-50 bg-black top-0 left-0 w-full h-full flex items-center justify-center transition-all duration-300"
      :class="{
        'pointer-events-auto': slideOpen,
        'opacity-0 pointer-events-none': !slideOpen
      }"
    >
      <button 
        class="absolute top-0 right-0 m-8 text-white"
        @click="closeSlideshow"
      >
        <IconsClose class="w-auto h-8"/>
      </button>
      <button 
        class="absolute top-1/2 -translate-y-1/2 left-0 m-8 text-white"
        @click="prevSlide"
      >
        <IconsBack class="w-auto h-9"/>
      </button>
      <button 
      class="absolute top-1/2 -translate-y-1/2 right-0 m-8 text-white"
      @click="nextSlide"
      >
        <IconsBack class="rotate-180 w-auto h-9"/>
      </button>
      <figure class="">
        <img 
          class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  max-w-[80%] max-h-[80%]"
          :src="slides[slideIndex].img"
        />
        <figcaption class="absolute bottom-8 left-1/2 -translate-x-1/2 text-runde-xs uppercase font-semibold text-white text-center flex"> 
          <div class="flex items-center mr-4"><IconsAstrix class="h-4 mr-2 w-auto"/> {{ slides[slideIndex].caption }}</div> <NuxtLink class="flex ml-4 hover:text-navigation-highlight group items-center" :to='slides[slideIndex].locationLink'><IconsLocation class="h-5 w-auto mr-2 group-hover:[&_path]:fill-navigation-highlight" /> {{ slides[slideIndex].location }}</NuxtLink>
        </figcaption>
      </figure>
    </section>
  </main>
</template>

<script setup>

  import { Billboards } from '~/services/Outcomes.js'

  const slides = Billboards
  const slideIndex = ref(0)
  const slideOpen = ref(false)

  const openSlideshow = (index) => {
    slideIndex.value = index
    slideOpen.value = true
  }

  const closeSlideshow = () => {
    slideOpen.value = false
  }

  const nextSlide = () => {
    if (slideIndex.value < slides.length - 1) {
      slideIndex.value++
    } else {
      slideIndex.value = 0
    }
  }

  const prevSlide = () => {
    if (slideIndex.value > 0) {
      slideIndex.value--
    } else {
      slideIndex.value = slides.length - 1
    }
  }

</script>

<style>
  .smallSlideButton{
    width: calc(20% - 2rem)
  }
</style>