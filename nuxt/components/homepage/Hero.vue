<template>
  <section class="relative px-4 pt-12 w-full h-[80svh]">
    <img
      src="/pngs/homepage_gradient.png"
      class="absolute z-[-1] top-0 left-0 w-full h-[120%] object-contain object-left-top"
    />
    <div class="ml-col1 pl-4">
      <IconsLogo class="h-24 z-10 relative w-auto" />
      <AbolitionButton class="absolute top-8 right-8"/>
      <p class="font-hatton z-10 relative text-hatton-m mt-8 w-[20rem]">
        A multi-city art campaign to dream, envision, and create a <span class="text-navigation-highlight">future where all youth are free, safe, and thriving.</span>
      </p>
    </div>
    <p class="text-runde-xs w-40 mx-4 mt-8 font-medium z-10 relative">
      Click on a state to see the art, learn from our collaborative process, and access tools to help you continue the fight to end youth incarceration.
    </p>

    <nav class="w-[80%] font-hatton text-hatton-l absolute top-[30%] left-1/2 -translate-x-1/2">
      <HomepageStars />
      <HomepageText />
    </nav>
  </section>  
</template>

<script setup>

</script>