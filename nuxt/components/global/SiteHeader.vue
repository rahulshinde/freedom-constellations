<template>
  <header 
    class="
      flex items-center flex-col md:flex-row fixed left-4 right-4 justify-between transition-all duration-[0.5s] pt-4 pb-8 md:pb-0 md:pt-4 z-[100]
      after:content-[''] after:pointer-events-none after:absolute after:h-100% after:h-[150%] after:top-0 after:-left-8 after:-right-8 after:z-[-1] after:transition-all after:duration-[0.5s] after:translate-y-[-100%]
      after:bg-gradient-to-t after:to-black after:from-black-trans
    "
    :class="[
      menuOpen ? 'backdrop-blur-sm md:backdrop-blur-none after:translate-y-0 h-[100svh] md:h-auto' : '',
    ]"
    id="siteHeader"
    ref="siteHeader"
  >
    <div class="flex items-center justify-between w-full">
      <NuxtLink to="/" class="flex items-start w-col8 md:w-col3 md:mx-4 z-10">
        <IconsLogo class="md:block h-12 w-auto md:h-12" />
      </NuxtLink>
      <button 
        class="z-10 md:hidden rounded-lg text-center uppercase text-runde-xs font-bold leading-[1] px-2 pt-2.5 py-2 bg-bg-highlight"
        @click="menuOpen = !menuOpen"
      >
        Menu
      </button>
    </div>
    <nav 
      class="h-0 md:h-auto transition-opacity md:opacity-100 mx-4 w-full md:w-[20rem] lg:w-[30rem] font-hatton text-hatton-s md:text-hatton-s lg:text-hatton-m md:absolute md:left-[45%] lg:left-1/2 md:-translate-x-1/2"
      :class="menuOpen ? 'opacity-100 !h-auto pointer-events-auto' : 'opacity-0 pointer-events-none'"
    >
      <ul class="relative w-full h-24">
        <li 
          class="
            hover:text-navigation-highlight transition-colors group
            absolute bottom-[10%] left-0
            after:content-[''] after:absolute after:w-24 after:bottom-3 after:left-3 after:border-t-[1px] after:border-dashed after:w-full after:origin-left after:rotate-[-20deg] 
          "
        >
          <NuxtLink to="/virginia" 
            class='flex'
            :class="route.path.includes('/virginia') ? 'text-navigation-highlight [&_path]:fill-navigation-highlight' : ''"
          >
            <IconsStar1 class="h-5 [&_path]:transition-colors group-hover:[&_path]:fill-navigation-highlight" />
            Virginia
          </NuxtLink>
        </li>
        <li class="
          hover:text-navigation-highlight transition-colors group
          absolute top-[30%] left-[20%]
          after:content-[''] after:absolute after:w-20 after:bottom-3 after:left-3 after:border-t-[1px] after:border-dashed after:w-full after:origin-left after:rotate-[29deg]
          "
        >
          <NuxtLink to="/illinois" 
            class='flex'
            :class="route.path.includes('/illinois') ? 'text-navigation-highlight [&_path]:fill-navigation-highlight' : ''"
          >
            <IconsStar2 class="h-5 [&_path]:transition-colors group-hover:[&_path]:fill-navigation-highlight" />
            Illinois
          </NuxtLink>
        </li>
        <li class="
          hover:text-navigation-highlight transition-colors group
          absolute bottom-0 left-[35%]
          after:content-[''] after:absolute after:w-[5.45rem] after:bottom-3 after:left-3 after:border-t-[1px] after:border-dashed after:origin-left after:-rotate-[45deg]
          "
        >
          <NuxtLink to="/pennsylvania" 
            class='flex'
            :class="route.path.includes('/pennsylvania') ? 'text-navigation-highlight [&_path]:fill-navigation-highlight' : ''"
          >
            <IconsStar3 class="h-5 [&_path]:transition-colors group-hover:[&_path]:fill-navigation-highlight" />
            Pennsylvania 
          </NuxtLink>
        </li>
        <li class="
          hover:text-navigation-highlight transition-colors group
          absolute top-0 left-[50%]
          after:content-[''] after:absolute after:w-30 after:bottom-3 after:left-3 after:border-t-[1px] after:border-dashed after:w-full after:origin-left after:rotate-[18deg]
        "
        >
          <NuxtLink to="/new-jersey" 
            class='flex'
            :class="route.path.includes('/new-jersey') ? 'text-navigation-highlight [&_path]:fill-navigation-highlight' : ''"
          >
            <IconsStar4 class="h-5 [&_path]:transition-colors group-hover:[&_path]:fill-navigation-highlight" />
            New Jersey
          </NuxtLink> 
        </li>
        <li class="
          hover:text-navigation-highlight transition-colors group
          absolute top-[40%] left-[75%]
        ">
          <NuxtLink to="/minnesota" 
            class='flex'
            :class="route.path.includes('/minnesota') ? 'text-navigation-highlight [&_path]:fill-navigation-highlight' : ''"
          >
            <IconsStar5 class="h-5 [&_path]:transition-colors group-hover:[&_path]:fill-navigation-highlight" />
            Minnesota
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <div 
      class="h-0 md:h-auto transition-opacity md:static md:opacity-100 md:pointer-events-auto flex flex-col items-center"
      :class="menuOpen ? '!h-auto opacity-100 pointer-events-auto' : 'opacity-0'"
    >
      <AbolitionButton/>
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
  </header>
</template>

<script setup>
  
  const route = useRoute();
  const { directions } = useScroll(window)
  const siteHeader = ref(null);
  const menuOpen = ref(false);

  onMounted(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 60) {
        if (directions.bottom){
          siteHeader.value.classList.add('translate-y-[-100%]');
        } else {
          siteHeader.value.classList.remove('translate-y-[-100%]');
        }
        siteHeader.value.classList.remove('after:translate-y-[-100%]');
      } else {
        siteHeader.value.classList.add('after:translate-y-[-100%]');
        siteHeader.value.classList.remove('translate-y-[-100%]');
      }
    });
  });
</script>

<style>
#siteHeader:after{
  width: calc(100% + 4rem);
}
</style>