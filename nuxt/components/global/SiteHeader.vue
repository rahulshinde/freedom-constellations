<template>
  <header 
    class="
      flex items-center fixed left-4 right-4 justify-between mx-4 transition-all duration-[0.5s] pt-4 z-[100]
      after:content-[''] after:pointer-events-none after:absolute after:w-full after:h-[150%] after:top-0 after:left-0 after:z-[-1] after:transition-all after:duration-[0.5s] after:translate-y-[-100%]
      after:bg-gradient-to-t after:to-black after:from-black-trans
    "
    ref="siteHeader"
  >
    <NuxtLink to="/" class="flex items-start w-col3 mx-4">
      <IconsLogo class="h-12 w-auto" />
    </NuxtLink>
    <nav class="mx-4 w-[30rem] font-hatton absolute left-1/2 -translate-x-1/2">
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
    <AbolitionButton/>
  </header>
</template>

<script setup>
  
  const route = useRoute();
  const { directions } = useScroll(window)

  console.log(directions);
  const siteHeader = ref(null);

  onMounted(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
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