<template>
  <footer 
    :class="route.path.includes('/abolitionist-toolkit') ? 'bg-bg-highlight' : 'before:content-[\'\'] before:absolute before:w-full before:h-[30svh] before:bg-gradient-to-t to-black from-black-trans before:top-[0] before:left-0 before:z-[-1]'"
    class="
      relative overflow-x-hidden pb-8 md:pb-8 transition-all duration-[0.3s]
    "
  >
    <img src="/pngs/squiggle.png" alt="Squiggle" class="w-[180%] md:w-[120%] max-w-none h-auto top-0 relative -left-2 -right-2" />
    <div class="flex flex-wrap flex-col md:flex-row items-center lg:flex-nowrap justify-center md:justify-start items-start mx-4">
      <div class="mt-8 md:mt-0 md:mb-8 order-4 md:order-none mx-0 md:mx-4 lg:justify-between flex flex-wrap md:flex-nowrap lg:flex-wrap md:w-full lg:w-col4">
        <NuxtLink to="/" class="hidden md:flex md:w-1/3 lg:w-auto w-full items-start">
          <IconsLogo class="block w-full h-16 md:h-12 md:w-auto" />
        </NuxtLink>
        <IconsDream class="dream static md:absolute lg:static left-1/2 md:right-[13%] top-auto bottom-4 md:bottom-auto md:top-16 w-[100%] md:w-[25%] lg:w-2/3 rotate-[0deg] -mt-8 md:mt-4 opacity-75 md:-rotate-[7deg] h-auto md:mx-4"/>
      </div>
      <div class="mx-2 md:mx-4 flex lg:mt-8 w-full md:w-col6 lg:w-col4">
        <div class="w-1/2 md:w-col6 flex flex-col [&_a]:mb-4 md:[&_a]:mb-2">
          <h2 class="font-runde text-runde-xs font-bold uppercase mb-4">View By State</h2>
          <NuxtLink to="/virginia" 
            class="font-hatton text-hatton-s md:text-hatton-m mb-2 hover:text-navigation-highlight"
            :class="route.path.includes('/virginia') ? 'text-navigation-highlight' : ''"
          >
            Virginia
          </NuxtLink>
          <NuxtLink to="/illinois" 
            class="font-hatton text-hatton-s md:text-hatton-m mb-2 hover:text-navigation-highlight"
            :class="route.path.includes('/illinois') ? 'text-navigation-highlight' : ''"
          >
            Illinois
          </NuxtLink>
          <NuxtLink to="/pennsylvania" 
            class="font-hatton text-hatton-s md:text-hatton-m mb-2 hover:text-navigation-highlight"
            :class="route.path.includes('/pennsylvania') ? 'text-navigation-highlight' : ''"
          >
            Pennsylvania
          </NuxtLink>
          <NuxtLink to="/new-jersey" 
            class="font-hatton text-hatton-s md:text-hatton-m mb-2 hover:text-navigation-highlight"
            :class="route.path.includes('/new-jersey') ? 'text-navigation-highlight' : ''"
          >
            New Jersey
          </NuxtLink>
          <NuxtLink to="/minnesota" 
            class="font-hatton text-hatton-s md:text-hatton-m mb-2 hover:text-navigation-highlight"
            :class="route.path.includes('/minnesota') ? 'text-navigation-highlight' : ''"
          >
            Minnesota
          </NuxtLink>
        </div>
  
        <div class="w-col6 flex flex-col [&_a]:mb-2 md:[&_a]:mb-0 mx-4 ml-12">
          <h2 class="font-runde text-runde-xs font-bold uppercase mb-4">View By Outcome</h2>
          <NuxtLink to="/nkip-exhibitions" class="text-runde-xs md:text-runde-s hover:text-navigation-highlight">
            #NKIP Exhibitions
          </NuxtLink>
          <NuxtLink to="/billboards" class="text-runde-xs md:text-runde-s hover:text-navigation-highlight">
            Billboards
          </NuxtLink>
          <NuxtLink to="/projects" class="text-runde-xs md:text-runde-s hover:text-navigation-highlight">
            Projects
          </NuxtLink>
          <NuxtLink to="/programming" class="text-runde-xs md:text-runde-s hover:text-navigation-highlight">
            Public Programming
          </NuxtLink>
        </div>
      </div>
      <div class="flex flex-col items-center lg:items-end mx-4 md:w-col6 lg:w-col4 mt-4 md:mr-4 lg:mr-0 md:mt-4 lg:mt-8">
        <div class='flex flex-col items-center'>
          <AbolitionButton :large="true" class="!mx-0"/>
          <div class="flex mt-4">
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
