<template>
  <footer class="w-full max-w-full bg-black relative overflow-hidden pb-12 transition-opacity duration-[0.3s]">
    <img src="/pngs/squiggle.png" alt="Squiggle" class="max-w-none h-auto top-0 relative -left-2 -right-2" />
    <div class="flex justify-between items-baseline mr-4">
      <div class="mx-4 flex flex-wrap w-col4">
        <NuxtLink to="/" class="flex w-full mx-4 items-start">
          <IconsLogo class="h-16 w-auto" />
        </NuxtLink>
        <IconsDream class="w-2/3 mt-4 opacity-75 -rotate-[7deg] h-auto mx-4"/>
      </div>
      <div class="mx-4 flex flex-wrap w-col4">
        <div class="w-col6 flex flex-col mx-4">
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
            Artist Billboards
          </NuxtLink>
          <NuxtLink to="/projects" class="hover:text-navigation-highlight">
            Projects
          </NuxtLink>
          <NuxtLink to="/programming" class="hover:text-navigation-highlight">
            Public Programming
          </NuxtLink>
        </div>
      </div>
      <div class="flex flex-col items-center">
        <AbolitionButton :large="true" class="self-center ml-[10%]"/>
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