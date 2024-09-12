<template>
  <ul 
    class="relative z-10 w-full h-[60svh]"
    ref="Stars"
  >
    <li 
      class="
        hover:text-navigation-highlight transition-colors group
        absolute bottom-[15%] left-[5%]
        after:-z-10 after:content-[''] after:absolute after:w-distance after:rotate-angle after:bottom-3 after:left-3 after:border-t-[2px] after:border-dashed after:origin-left 
      "
      ref="Star1"
    >
      <NuxtLink to="/virginia" class='flex items-center'>
        <IconsStar1 fill="var(--navigation-highlight)" class="h-8 scale-[1.2] w-auto mr-2 [&_path]:transition-colors group-hover:[&_path]:fill-navigation-highlight" />
        Virginia
      </NuxtLink>
    </li>
    <li class="
      hover:text-navigation-highlight transition-colors group
      absolute top-[25%] left-[25%]
      after:-z-10 after:content-[''] after:absolute after:w-distance after:rotate-angle after:bottom-3 after:left-3 after:border-t-[2px] after:border-dashed after:origin-left
      "
      ref="Star2"
    >
      <NuxtLink to="/illinois" class='flex items-center'>
        <IconsStar2 fill="var(--navigation-highlight)" class="h-8 scale-[1.2] w-auto mr-2 [&_path]:transition-colors group-hover:[&_path]:fill-navigation-highlight" />
        Illinois
      </NuxtLink>
    </li>
    <li class="
      hover:text-navigation-highlight transition-colors group
      absolute bottom-0 left-[45%]
      after:-z-10 after:content-[''] after:absolute after:w-distance after:rotate-angle after:bottom-3 after:left-3 after:border-t-[2px] after:border-dashed after:origin-left
      "
      ref="Star3"
    >
      <NuxtLink to="/pennsylvania" class='flex items-center'>
        <IconsStar3 fill="var(--navigation-highlight)" class="h-8 scale-[1.2] w-auto mr-2 [&_path]:transition-colors group-hover:[&_path]:fill-navigation-highlight" />
        Pennsylvania 
      </NuxtLink>
    </li>
    <li class="
      hover:text-navigation-highlight transition-colors group
      absolute top-0 left-[60%]
      after:-z-10 after:content-[''] after:absolute after:w-distance after:rotate-angle after:bottom-3 after:left-3 after:border-t-[2px] after:border-dashed after:origin-left
    "
      ref="Star4"
    >
      <NuxtLink to="/new-jersey" class='flex items-center'>
        <IconsStar4 fill="var(--navigation-highlight)" class="h-8 scale-[1.2] w-auto mr-2 [&_path]:transition-colors group-hover:[&_path]:fill-navigation-highlight" />
        New Jersey
      </NuxtLink> 
    </li>
    <li class="
      hover:text-navigation-highlight transition-colors group
      absolute top-[40%] left-[85%]"
      ref="Star5"
    >
      <NuxtLink to="/minnesota" class='flex items-center'>
        <IconsStar5 fill="var(--navigation-highlight)" class="h-8 scale-[1.2] w-auto mr-2 [&_path]:transition-colors group-hover:[&_path]:fill-navigation-highlight" />
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
    const firstRect = first.getBoundingClientRect();
    const secondRect = second.getBoundingClientRect();
    const x = secondRect.left - firstRect.left;
    const y = secondRect.top - firstRect.top;
    const distance = Math.sqrt(x * x + y * y);
    const angle = Math.atan2(y, x) * (180 / Math.PI);

    first.style.setProperty('--distance', distance + 'px');
    first.style.setProperty('--angle', angle + 'deg');
  };
  

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