<template>
  <nav class="sticky top-8 h-[1px] transition-all duration-[0.5s]" id="projectNav" ref="projectNav">
    <div class="relative flex overflow-hidden justify-between w-full">
      <NuxtLink class="mr-0 ml-12 w-col1 group transition-all duration-[0.5s] translate-x-[-12.5rem]" :to="backLink" id="pageBackLink" ref="pageBackLink">
        <IconsBack 
          class="w-12 h-auto group-hover:[&_path]:stroke-navigation-highlight [&_path]:transition-all duration-300"
          fill="var(--white)"
        />
      </NuxtLink>

      <div class="flex w-[10.5rem] mr-8 transition-all duration-[0.5s] translate-x-[12.5rem]" ref="pageNav" v-if="onThisPage?.length > 0">
        <div class='flex flex-col items-center w-8 mr-2'><IconsAstrix class="h-5 w-6"/></div>
        <div>
          <h3 class="meta-info font-runde text-runde-xs font-bold uppercase mt-1">On This Page</h3>
          <ul class="pl-4 text-runde-xs mt-2 flex flex-col items-start">
            <template v-for="link in onThisPage">
              <a :href="'#' + link[1]" class="mb-2 hover:text-navigation-highlight transition-colors "
              >
                {{ link[0] }}
              </a>
            </template>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
  const props = defineProps({
    onThisPage: Array,
    title: String,
    backLink: String,
  });

  const projectNav = ref(null);
  const pageNav = ref(null);
  const { directions } = useScroll(window)
  const offsetTop = ref(0);
  const windowHeight = ref(0);

  onMounted(() => {
    nextTick(() => {  
      if (process.client){
        // get position of the projectNav
        offsetTop.value = projectNav.value.offsetTop;
        windowHeight.value = window.innerHeight;

        const pageBackLink = document.getElementById('pageBackLink');
        // add event listener to window
        window.addEventListener('scroll', () => {
          if (directions.bottom){
            projectNav.value.classList.remove('translate-y-[9rem]');
            if (window.scrollY > offsetTop.value + windowHeight.value * 0.8) {
              pageNav.value.classList.remove('translate-x-[12.5rem]');
              pageBackLink.classList.remove('translate-x-[-12.5rem]');
            }
          } else {
            if (window.scrollY <= offsetTop.value + windowHeight.value * 0.8) {
              projectNav.value.classList.remove('translate-y-[9rem]');
              pageNav.value.classList.add('translate-x-[12.5rem]');
              pageBackLink.classList.add('translate-x-[-12.5rem]');
            } else {
              projectNav.value.classList.add('translate-y-[9rem]');
            }
          }
        });

        window.addEventListener('resize', () => {
          offsetTop.value = projectNav.value.offsetTop;
          windowHeight.value = window.innerHeight;
        });
      }
    });
  });
</script>