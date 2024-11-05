<template>
  <section class="z-10 mt-8 md:mt-16">
    <div class="flex flex-wrap mx-4">
      <NuxtLink class="hidden md:block w-col1 mx-4 group" :to="backLink">
        <IconsBack 
          class="w-12 h-auto group-hover:[&_path]:stroke-navigation-highlight [&_path]:transition-all duration-300"
          fill="var(--white)"
        />
      </NuxtLink>
      <div class="md:mx-4 md:ml-col2 md:px-12 md:w-col7">
        <h1 class="font-hatton text-hatton-l">{{title}}</h1>
        <h2 class="text-runde-xl md:text-runde-xxl font-semibold">{{subtitle}}</h2>
      </div>

      <div class="flex flex-col md:flex-row mt-4 md:mt-8 justify-between">
        <p class="md:ml-col4 md:pl-12 md:mx-4 text-runde-s md:text-runde-m md:w-[50%] whitespace-pre-wrap" v-html="introText">
        </p>
        <div class="mt-8 md:mt-0 w-[9.5rem] md:mx-4 flex flex-col gap-4">
          <div class="flex" v-if="location != ''">
            <div class='flex flex-col items-center w-8 mr-2'><IconsLocation class="h-6 w-8"/></div>
            <h3 class="meta-info font-runde text-runde-xs font-bold uppercase mb-4">{{location}}</h3>
          </div>
          <div class="flex" v-if="date != ''">
            <div class='flex flex-col items-center w-8 mr-2'><IconsTime class="h-5 w-6"/></div>
            <h3 class="meta-info font-runde mt-1 text-runde-xs font-bold uppercase mb-4">{{date}}</h3>
          </div>

          <div class="flex" v-if="onThisPage?.length > 0">
            <div class='flex flex-col items-center w-8 mr-2'><IconsAstrix class="h-5 w-6"/></div>
            <div>
              <h3 class="meta-info font-runde text-runde-xs font-bold uppercase mt-1">On This Page</h3>
              <ul class="pl-4 text-runde-xs mt-2 flex flex-col items-start">
                <template v-for="link in onThisPage">
                  <a :href="'#' + link[1]" class="mb-2 hover:text-navigation-highlight transition-colors ">
                    {{ link[0] }}
                  </a>
                </template>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>

  const props = defineProps({
    title: String,
    backLink: String,
    subtitle: String,
    introText: String,
    location: String,
    date: String,
    onThisPage: Array,
  });
</script>

<style>
  .meta-info{
    width: calc(100% - 2rem);
  }
</style>