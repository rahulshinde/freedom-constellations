<template>
  <main>
    <h1 class="mx-8 mt-16 relative z-20 text-runde-xxl font-semibold">Abolishionist Artist Billboards</h1>
    <section class="mx-4 mt-8 flex flex-wrap bg-black relative z-10 pb-0
        before:content-[''] before:absolute before:w-full before:h-[20svh] before:bg-gradient-to-b to-black from-black-trans before:-top-[20svh] before:left-0 before:z-0">
      <button 
        v-for="slide, index in slides"
        class="mx-4 mb-8 hover:rounded-lg transition-all duration-300 overflow-hidden"
        :class="slide.small ? 'smallSlideButton' : 'w-col6'"
        @click="openSlideshow(index)"
      >
        <img 
          :src="slide.img"
        />
      </button>

      <BlockTextHeading class="grow" text="Explore projects by Location"/>
      <BlockLocationLinks class="mt-8"/>
    </section>

    <section 
      class="fixed z-50 bg-black top-0 left-0 w-full h-full flex items-center justify-center transition-all duration-300"
      :class="{
        'pointer-events-auto': slideOpen,
        'opacity-0 pointer-events-none': !slideOpen
      }"
    >
      <button 
        class="absolute hover:scale-125 transition-all duration-150 group top-0 right-0 m-8 text-white"
        @click="closeSlideshow"
      >
        <IconsClose class="[&_path]:transition-all [&_path]:duration-150 group-hover:[&_path]:stroke-navigation-highlight w-auto h-8"/>
      </button>
      <button 
        class="absolute top-1/2 hover:scale-125 transition-all duration-150 group -translate-y-1/2 left-0 m-8 text-white"
        @click="prevSlide"
      >
        <IconsBack class="[&_path]:transition-all [&_path]:duration-150 group-hover:[&_path]:stroke-navigation-highlight w-auto h-9"/>
      </button>
      <button 
      class="absolute top-1/2 hover:scale-125 transition-all duration-150 group -translate-y-1/2 right-0 m-8 text-white"
      @click="nextSlide"
      >
        <IconsBack class="rotate-180 [&_path]:transition-all [&_path]:duration-150 group-hover:[&_path]:stroke-navigation-highlight w-auto h-9"/>
      </button>
      <figure 
        v-for="slide, index in slides"
        class="transition-all duration-300"
        :class="{
          'opacity-100 pointer-events-auto': slideOpen && slideIndex === index,
          'opacity-0 pointer-events-none': !slideOpen || slideIndex !== index
        }"
      >
        <img 
          class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  max-w-[80%] max-h-[80%]"
          :src="slide.img"
        />
        <figcaption class="absolute bottom-8 left-1/2 -translate-x-1/2 text-runde-xs uppercase font-semibold text-white text-center flex"> 
          <div class="flex items-center mr-4"><IconsAstrix class="h-4 mr-2 w-auto"/> {{ slide.caption }}</div> <NuxtLink class="flex ml-4 hover:text-navigation-highlight group items-center" :to='slide.locationLink'><IconsLocation class="h-5 w-auto mr-2 group-hover:[&_path]:fill-navigation-highlight" /> {{ slide.location }}</NuxtLink>
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