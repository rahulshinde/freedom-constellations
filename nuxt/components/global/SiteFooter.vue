<template>
  <footer class="w-full max-w-full bg-black relative overflow-hidden pb-8 transition-opacity duration-[0.3s]">
    <img src="/pngs/squiggle.png" alt="Squiggle" class="max-w-none h-auto top-0 relative -left-2 -right-2" />
    <div class="flex flex-wrap lg:flex-nowrap md:justify-center lg:justify-between items-start mr-4">
      <div class="mb-8 mx-0 md:mx-4 lg:justify-between flex flex-wrap md:flex-nowrap lg:flex-wrap md:w-full lg:w-col4">
        <NuxtLink to="/" class="flex md:w-1/3 lg:w-auto w-full mx-4 items-start">
          <IconsLogo class="block w-full h-16 md:h-12 md:w-auto" />
        </NuxtLink>
        <IconsDream class="dream absolute lg:static left-[15rem] md:left-auto md:right-[13%] top-[30rem] md:top-24 w-[45%] md:w-[12rem] lg:w-2/3 rotate-[0deg] -mt-8 md:mt-4 opacity-75 md:-rotate-[7deg] h-auto md:mx-4"/>
      </div>
      <div class="mx-2 md:mx-4 flex lg:mt-8 w-full md:w-col6 lg:w-auto">
        <div class="w-1/2 md:w-[10rem] flex flex-col mx-2 lg:mx-4">
          <h2 class="font-runde text-runde-xs font-bold uppercase mb-4">View By State</h2>
          <NuxtLink to="/virginia" 
            class="font-hatton text-hatton-m mb-2 hover:text-navigation-highlight"
            :class="route.path.includes('/virginia') ? 'text-navigation-highlight' : ''"
          >
            Virginia
          </NuxtLink>
          <NuxtLink to="/illinois" 
            class="font-hatton text-hatton-m mb-2 hover:text-navigation-highlight"
            :class="route.path.includes('/illinois') ? 'text-navigation-highlight' : ''"
          >
            Illinois
          </NuxtLink>
          <NuxtLink to="/pennsylvania" 
            class="font-hatton text-hatton-m mb-2 hover:text-navigation-highlight"
            :class="route.path.includes('/pennsylvania') ? 'text-navigation-highlight' : ''"
          >
            Pennsylvania
          </NuxtLink>
          <NuxtLink to="/new-jersey" 
            class="font-hatton text-hatton-m mb-2 hover:text-navigation-highlight"
            :class="route.path.includes('/new-jersey') ? 'text-navigation-highlight' : ''"
          >
            New Jersey
          </NuxtLink>
          <NuxtLink to="/minnesota" 
            class="font-hatton text-hatton-m mb-2 hover:text-navigation-highlight"
            :class="route.path.includes('/minnesota') ? 'text-navigation-highlight' : ''"
          >
            Minnesota
          </NuxtLink>
        </div>
  
        <div class="w-col6 flex flex-col mx-4">
          <h2 class="font-runde text-runde-xs font-bold uppercase mb-4">View By Outcome</h2>
          <NuxtLink to="/nkip-exhibitions" class="hover:text-navigation-highlight">
            #NKIP Exhibitions
          </NuxtLink>
          <NuxtLink to="/billboards" class="hover:text-navigation-highlight">
            Billboards
          </NuxtLink>
          <NuxtLink to="/projects" class="hover:text-navigation-highlight">
            Projects
          </NuxtLink>
          <NuxtLink to="/programming" class="hover:text-navigation-highlight">
            Public Programming
          </NuxtLink>
        </div>
      </div>
      <div class="flex flex-col md:w-col6 lg:w-auto mt-8 md:-mt-4 md:mr-4 lg:mr-0 md:mt-4 items-center">
        <AbolitionButton :large="true" class="self-center"/>
        <div class="flex items-center mt-4">
          <span class="border-[2px] rounded-[50%] font-bold text-[0.6rem] px-[0.4rem] py-[0.1rem]">?</span>
          <NuxtLink to="/about" class="
            text-[0.65rem] text-center uppercase font-semibold mx-2
            "
          >
            About the Project
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
  // year for footer
  const route = useRoute()
  const year = new Date().getFullYear()

  // fade out footer on route change
  watch(() => route.path, () => {
    const footer = document.querySelector('footer')
    footer.style.opacity = 0
    setTimeout(() => {
      footer.style.opacity = 1
    }, 300)
  })

</script>
