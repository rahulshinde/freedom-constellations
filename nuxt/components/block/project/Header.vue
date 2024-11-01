<template>
  <section class="mx-4 z-10 mt-16">
    <div class="flex flex-wrap">
      <NuxtLink class="mr-0 ml-8 w-col1 group" :to="backLink">
        <IconsBack 
          class="w-12 h-auto group-hover:[&_path]:stroke-navigation-highlight [&_path]:transition-all duration-300"
          fill="var(--white)"
        />
      </NuxtLink>
      <div class="mx-4 ml-col2 w-col7">
        <h1 class="font-hatton text-hatton-l">{{title}}</h1>
        <h2 class="text-runde-xxl font-semibold">{{subtitle}}</h2>
      </div>

      <div class="flex mt-8 justify-between">
        <p class="ml-col4 mx-4 text-runde-m w-col6 whitespace-pre-wrap" v-html="introText">
        </p>
        <div class="w-[10.5rem] mx-4 flex flex-col">
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