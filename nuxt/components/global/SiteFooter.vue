<template>
  <footer class="w-full max-w-full bg-black relative overflow-hidden">
    <img src="/pngs/squiggle.png" alt="Squiggle" class="max-w-none h-auto top-0 relative -left-2 -right-2" />
    <div class="flex justify-between">
      <div class="mx-4 flex flex-wrap w-col4">
        <NuxtLink to="/" class="flex w-full mx-4 mb-8 items-start">
          <IconsLogo class="h-12 w-auto" />
        </NuxtLink>
  
        <div class="w-col6 flex flex-col mx-4">
          <h2 class="font-runde uppercase mb-2">View By State</h2>
          <NuxtLink to="/virginia" class="font-hatton hover:text-navigation-highlight">
            Virginia
          </NuxtLink>
          <NuxtLink to="/illinois" class="font-hatton hover:text-navigation-highlight">
            Illinois
          </NuxtLink>
          <NuxtLink to="/pennsylvania" class="font-hatton hover:text-navigation-highlight">
            Pennsylvania
          </NuxtLink>
          <NuxtLink to="/new-jersey" class="font-hatton hover:text-navigation-highlight">
            New Jersey
          </NuxtLink>
          <NuxtLink to="/minnesota" class="font-hatton hover:text-navigation-highlight">
            Minnesota
          </NuxtLink>
        </div>
  
        <div class="w-col6 flex flex-col mx-4">
          <h2 class="font-runde uppercase mb-2">View By Outcome</h2>
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
      <IconsDream class="w-col3 mx-4"/>
    </div>
  </footer>
</template>

<script setup>
</script>