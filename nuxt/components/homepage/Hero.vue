<template>
  <section class="md:sticky top-0 z-1 px-4 pt-4 md:pt-8 w-full md:h-[80svh]">
    <figure class="block absolute z-[-1] top-0 left-0 w-full h-[91.5svh] overflow-hidden">
      <img
        src="/pngs/homepage_gradient.png"
        class="w-full h-[100%] object-contain object-left-top"
      />
    </figure>
      
    <div class="mt-[4rem] md:mt-0 md:ml-col1 md:pl-12">
      <IconsLogo class="hidden md:block h-10 md:h-20 z-10 relative w-auto" />
      <p class="font-hatton z-10 relative text-hatton-s md:text-hatton-m mt-4 md:mt-8 md:w-[20rem]">
        A multi-city art campaign to dream, envision, and create a <span class="text-navigation-highlight">future where all youth are free, safe, and thriving.</span>
      </p>
    </div>

    <div class="md:absolute md:top-4 md:right-4 mr-4">
      <AbolitionButton class="w-40 md:w-auto ml-0 mt-4"/>
      <div class="flex items-center mt-4">
        <span class="border-[2px] rounded-[50%] font-bold text-[0.6rem] px-[0.4rem] py-[0.1rem]">?</span>
        <NuxtLink to="/about" class="
          text-[0.65rem] text-center uppercase font-semibold mx-2 whitespace-nowrap
          "
        >
          About the Project
        </NuxtLink>
      </div>
    </div>
    <p class="text-runde-xs md:w-40 mx-0 md:mx-4 mt-4 md:mt-8 font-medium z-10 relative">
      Click on a state to see the art, learn from our collaborative process, and access tools to help you continue the fight to end youth incarceration.
    </p>

    <nav class="w-full mt-8 md:mt-0 md:w-[80%] font-hatton text-hatton-s md:text-hatton-l relative md:absolute md:top-[30%] md:left-1/2 md:-translate-x-1/2">
      <HomepageStars />
      <HomepageText />
    </nav>
  </section>  
</template>

<script setup>

</script>