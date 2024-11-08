<template>
  <ul 
    class="relative z-10 w-full h-[80svh] md:h-[60svh]"
    ref="Stars"
  >
    <li 
      class="
        hover:text-navigation-highlight transition-colors group
        absolute top-[10%] right-[10%] md:right-auto md:top-auto bottom-auto md:bottom-[20%] lg:bottom-[30%] md:left-[-5%] lg:left-[5%]
        after:-z-10 after:content-[''] after:absolute after:w-distance after:rotate-angle after:bottom-3 after:left-3 after:border-t-[1px] md:after:border-t-[2px] after:border-dashed after:origin-left 
      "
      ref="Star1"
    >
      <NuxtLink to="/virginia" class='flex items-center underline md:no-underline'>
        <IconsStar1 fill="var(--navigation-highlight)" class="h-4 md:h-8 scale-[1.2] w-auto mr-2 [&_path]:transition-colors group-hover:[&_path]:fill-navigation-highlight" />
        Virginia
      </NuxtLink>
    </li>
    <li class="
      hover:text-navigation-highlight transition-colors group
      absolute top-[30%] md:top-[40%] lg:top-[20%] left-[25%]
      after:-z-10 after:content-[''] after:absolute after:w-distance after:rotate-angle after:bottom-3 after:left-3 after:border-t-[1px] md:after:border-t-[2px] after:border-dashed after:origin-left
      "
      ref="Star2"
    >
      <NuxtLink to="/illinois" class='flex items-center underline md:no-underline'>
        <IconsStar2 fill="var(--navigation-highlight)" class="h-4 md:h-8 scale-[1.2] w-auto mr-2 [&_path]:transition-colors group-hover:[&_path]:fill-navigation-highlight" />
        Illinois
      </NuxtLink>
    </li>
    <li class="
      hover:text-navigation-highlight transition-colors group
      absolute top-[50%] md:top-auto md:bottom-[5%] lg:bottom-[15%] right-[20%] md:right-auto md:left-[45%]
      after:-z-10 after:content-[''] after:absolute after:w-distance after:rotate-angle after:bottom-3 after:left-3 after:border-t-[1px] md:after:border-t-[2px] after:border-dashed after:origin-left
      "
      ref="Star3"
    >
      <NuxtLink to="/pennsylvania" class='flex items-center underline md:no-underline'>
        <IconsStar3 fill="var(--navigation-highlight)" class="h-4 md:h-8 scale-[1.2] w-auto mr-2 [&_path]:transition-colors group-hover:[&_path]:fill-navigation-highlight" />
        Pennsylvania 
      </NuxtLink>
    </li>
    <li class="
      hover:text-navigation-highlight transition-colors group
      absolute top-[70%] md:top-[5%] lg:top-[-15%] left-[10%] md:left-[60%]
      after:-z-10 after:content-[''] after:absolute after:w-distance after:rotate-angle after:bottom-3 after:left-3 after:border-t-[1px] md:after:border-t-[2px] after:border-dashed after:origin-left
    "
      ref="Star4"
    >
      <NuxtLink to="/new-jersey" class='flex items-center underline md:no-underline'>
        <IconsStar4 fill="var(--navigation-highlight)" class="h-4 md:h-8 scale-[1.2] w-auto mr-2 [&_path]:transition-colors group-hover:[&_path]:fill-navigation-highlight" />
        New Jersey
      </NuxtLink> 
    </li>
    <li class="
      hover:text-navigation-highlight transition-colors group
      absolute top-[90%] left-[30%] md:top-[55%] lg:top-[25%] md:left-[75%] lg:left-[85%]"
      ref="Star5"
    >
      <NuxtLink to="/minnesota" class='flex items-center underline md:no-underline'>
        <IconsStar5 fill="var(--navigation-highlight)" class="h-4 md:h-8 scale-[1.2] w-auto mr-2 [&_path]:transition-colors group-hover:[&_path]:fill-navigation-highlight" />
        Minnesota
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup>

  const Stars = ref(null);
  const Star1 = ref(null);
  const Star2 = ref(null);
  const Star3 = ref(null);
  const Star4 = ref(null);
  const Star5 = ref(null);

  const starsWidth = computed(() => Stars.value.offsetWidth);
  const starsHeight = computed(() => Stars.value.offsetHeight);

  const calcDistanceAndRotation = (first, second) => {
    const firstRect = first?.getBoundingClientRect();
    const secondRect = second?.getBoundingClientRect();
    const x = secondRect.left - firstRect.left;
    const y = secondRect.top - firstRect.top;
    const distance = Math.sqrt(x * x + y * y);
    const angle = Math.atan2(y, x) * (180 / Math.PI);

    first?.style.setProperty('--distance', distance + 'px');
    first?.style.setProperty('--angle', angle + 'deg');
  };

  onBeforeUnmount(() => {
    if (process.client){
      window.removeEventListener('resize', () => {
        calcDistanceAndRotation(Star1.value, Star2.value);
        calcDistanceAndRotation(Star2.value, Star3.value);
        calcDistanceAndRotation(Star3.value, Star4.value);
        calcDistanceAndRotation(Star4.value, Star5.value);
      });
    }
  });
  

  onMounted(() => {
    nextTick(() => {
      calcDistanceAndRotation(Star1.value, Star2.value);
      calcDistanceAndRotation(Star2.value, Star3.value);
      calcDistanceAndRotation(Star3.value, Star4.value);
      calcDistanceAndRotation(Star4.value, Star5.value);

      if (process.client){
        window.addEventListener('resize', () => {
          calcDistanceAndRotation(Star1.value, Star2.value);
          calcDistanceAndRotation(Star2.value, Star3.value);
          calcDistanceAndRotation(Star3.value, Star4.value);
          calcDistanceAndRotation(Star4.value, Star5.value);
        });
      }
    });
  });
</script>