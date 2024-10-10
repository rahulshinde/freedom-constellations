<template>
  <footer class="w-full max-w-full bg-black relative overflow-hidden pb-12">
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
            class="font-hatton text-hatton-l mb-2 hover:text-navigation-highlight"
            :class="route.path.includes('/virginia') ? 'text-navigation-highlight' : ''"
          >
            Virginia
          </NuxtLink>
          <NuxtLink to="/illinois" 
            class="font-hatton text-hatton-l mb-2 hover:text-navigation-highlight"
            :class="route.path.includes('/illinois') ? 'text-navigation-highlight' : ''"
          >
            Illinois
          </NuxtLink>
          <NuxtLink to="/pennsylvania" 
            class="font-hatton text-hatton-l mb-2 hover:text-navigation-highlight"
            :class="route.path.includes('/pennsylvania') ? 'text-navigation-highlight' : ''"
          >
            Pennsylvania
          </NuxtLink>
          <NuxtLink to="/new-jersey" 
            class="font-hatton text-hatton-l mb-2 hover:text-navigation-highlight"
            :class="route.path.includes('/new-jersey') ? 'text-navigation-highlight' : ''"
          >
            New Jersey
          </NuxtLink>
          <NuxtLink to="/minnesota" 
            class="font-hatton text-hatton-l mb-2 hover:text-navigation-highlight"
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
      <AbolitionButton :large="true" class="self-center ml-[10%]"/>
    </div>

    <div class="flex justify-between border-t-[2px] border-dotted font-runde text-runde-xs mt-8 mx-8 pt-4">
      <NuxtLink to="/about" class="uppercase hover:text-navigation-highlight">
        About
      </NuxtLink>
      <span>©{{ year }} Performing Statistics</span>
    </div>
  </footer>
</template>

<script setup>
  // year for footer
  const route = useRoute()
  const year = new Date().getFullYear()
</script>