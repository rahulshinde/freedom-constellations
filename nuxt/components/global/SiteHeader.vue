<template>
  <header 
    class="
      flex items-center flex-col md:flex-row fixed top-0 left-0 md:left-4 right-0 md:right-4 justify-between transition-all duration-[0.5s] px-4 pt-4 pb-8 md:pb-0 md:pt-4 z-[200]
      after:content-[''] after:pointer-events-none after:absolute after:translate-y-[-100%] after:h-[100%] md:after:h-[150%] after:top-0 after:-left-8 after:-right-8 after:z-[-1] after:transition-all after:duration-[0.5s]
      after:bg-gradient-to-t after:to-black after:from-black-trans
    "
    :class="[
      menuOpen ? 'backdrop-blur-sm md:backdrop-blur-none after:translate-y-[0] h-[100svh] overflow-y-scroll overflow-x-hidden md:h-auto' : '',
    ]"
    id="siteHeader"
    ref="siteHeader"
  >
    <div class="flex items-center justify-between w-full">
      <NuxtLink to="/" class="flex items-start w-col8 md:w-col3 md:mx-4 z-10">
        <IconsLogo class="md:block h-9 w-auto md:h-12" />
      </NuxtLink>
      <button 
        class="z-10 md:hidden rounded-lg text-center uppercase text-runde-xs font-bold leading-[1] px-2 pt-2.5 py-2 bg-bg-highlight"
        :class="route.path === '/' ? 'hidden' : ''"
        @click="menuOpen = !menuOpen"
      >
        {{menuOpen ? 'Close' : 'Menu'}}
      </button>
    </div>
    <nav 
      class="h-0 md:h-auto transition-opacity delay-[0.5s] md:opacity-100 mx-4 w-full md:w-[20rem] lg:w-[30rem] font-hatton text-hatton-s md:text-hatton-s lg:text-hatton-m md:absolute md:left-[45%] lg:left-1/2 md:-translate-x-1/2 md:pointer-events-auto"
      :class="menuOpen ? 'opacity-100 !h-auto pointer-events-auto' : 'opacity-0 pointer-events-none'"
    >
      <ul class="relative w-full h-[20rem] md:h-24">
        <li 
          class="
            hover:text-navigation-highlight transition-colors group
            absolute top-[0%] md:top-auto md:bottom-[10%] left-[5%] md:left-0
            after:content-[''] after:absolute after:w-distance after:rotate-angle after:bottom-3 after:left-3 after:border-t-[1px] after:border-dashed after:origin-left 
          "
          ref="Star1"
        >
          <NuxtLink to="/virginia" 
            class='flex flex-col'
            :class="route.path.includes('/virginia') ? 'text-navigation-highlight [&_path]:fill-navigation-highlight' : ''"
          >
            <div class="flex items-center">
              <IconsStar1 class="h-5 [&_path]:transition-colors group-hover:[&_path]:fill-navigation-highlight" />
              Virginia
            </div>
          </NuxtLink>
        </li>
        <li class="
          hover:text-navigation-highlight transition-colors group
          absolute top-[30%] left-[20%]
          after:content-[''] after:absolute after:w-distance after:rotate-angle after:bottom-3 after:left-3 after:border-t-[1px] after:border-dashed after:origin-left
          "
          ref="Star2"
        >
          <NuxtLink to="/illinois" 
            class='flex flex-col'
            :class="route.path.includes('/illinois') ? 'text-navigation-highlight [&_path]:fill-navigation-highlight' : ''"
          >
            <div class="flex items-center">
              <IconsStar2 class="h-5 [&_path]:transition-colors group-hover:[&_path]:fill-navigation-highlight" />
              Illinois
            </div>
          </NuxtLink>
        </li>
        <li class="
          hover:text-navigation-highlight transition-colors group
          absolute bottom-0 left-[35%]
          after:content-[''] after:absolute after:w-distance after:rotate-angle after:bottom-3 after:left-3 after:border-t-[1px] after:border-dashed after:origin-left
          "
          ref="Star3"
        >
          <NuxtLink to="/pennsylvania" 
            class='flex flex-col'
            :class="route.path.includes('/pennsylvania') ? 'text-navigation-highlight [&_path]:fill-navigation-highlight' : ''"
          >
            <div class="flex items-center">
              <IconsStar3 class="h-5 [&_path]:transition-colors group-hover:[&_path]:fill-navigation-highlight" />
              Pennsylvania 
            </div>
          </NuxtLink>
        </li>
        <li class="
          hover:text-navigation-highlight transition-colors group
          absolute top-0 left-[50%]
          after:content-[''] after:absolute after:w-distance after:rotate-angle after:bottom-3 after:left-3 after:border-t-[1px] after:border-dashed after:origin-left
        "
        ref="Star4"
        >
          <NuxtLink to="/new-jersey" 
            class='flex flex-col'
            :class="route.path.includes('/new-jersey') ? 'text-navigation-highlight [&_path]:fill-navigation-highlight' : ''"
          >
            <div class="flex items-center">
              <IconsStar4 class="h-5 [&_path]:transition-colors group-hover:[&_path]:fill-navigation-highlight" />
              New Jersey
            </div>
          </NuxtLink> 
        </li>
        <li class="
          hover:text-navigation-highlight transition-colors group
          absolute top-[40%] left-[75%]
        "
        ref="Star5"
        >
          <NuxtLink
            to="/minnesota" 
            class='flex flex-col'
            :class="route.path.includes('/minnesota') ? 'text-navigation-highlight [&_path]:fill-navigation-highlight' : ''"
          >
            <div class="flex items-center">
              <IconsStar5 class="h-5 [&_path]:transition-colors group-hover:[&_path]:fill-navigation-highlight" />
              Minnesota
            </div>
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <div 
      class="h-0 md:h-auto transition-opacity md:opacity-100 md:pointer-events-auto flex flex-col items-center"
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
  const scrollPosition = ref(0);

  const Star1 = ref(null);
  const Star2 = ref(null);
  const Star3 = ref(null);
  const Star4 = ref(null);
  const Star5 = ref(null);

  const calcDistanceAndRotation = (first, second) => {
    const firstRect = first.getBoundingClientRect();
    const secondRect = second.getBoundingClientRect();
    const x = secondRect.left - firstRect.left;
    const y = secondRect.top - firstRect.top;
    const distance = Math.sqrt(x * x + y * y);
    const angle = Math.atan2(y, x) * (180 / Math.PI);

    first.style.setProperty('--distance', distance + 'px');
    first.style.setProperty('--angle', angle + 'deg');
  };
  

  watch(() => menuOpen.value, (value) => {
    console.log(value);
    // lock body at current scroll position if menu is open
    scrollPosition.value = window.scrollY;
    if (value) {
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${scrollPosition.value}px`;
    } else {
      // unlock body and restore scroll position
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  });

  onMounted(() => {
    nextTick(() => {
      if (process.client){
        setTimeout(() => {
          calcDistanceAndRotation(Star1.value, Star2.value);
          calcDistanceAndRotation(Star2.value, Star3.value);
          calcDistanceAndRotation(Star3.value, Star4.value);
          calcDistanceAndRotation(Star4.value, Star5.value);
        }, 1000);
        window.addEventListener('resize', () => {
          calcDistanceAndRotation(Star1.value, Star2.value);
          calcDistanceAndRotation(Star2.value, Star3.value);
          calcDistanceAndRotation(Star3.value, Star4.value);
          calcDistanceAndRotation(Star4.value, Star5.value);
        });
      }
    });
    window.addEventListener('scroll', () => {
      if (window.scrollY > 60) {
        if (directions.bottom){
          siteHeader.value.classList.add('md:translate-y-[-100%]');
        } else {
          siteHeader.value.classList.remove('md:translate-y-[-100%]');
        }
        siteHeader.value.classList.remove('after:translate-y-[-100%]');
      } else {
        siteHeader.value.classList.add('after:translate-y-[-100%]');
        siteHeader.value.classList.remove('md:translate-y-[-100%]');
      }
    });
  });
</script>

<style>
#siteHeader:after{
  width: calc(100% + 4rem);
}
</style>