<template>
  <section class="mx-4 z-10 mt-16">
    <div class="flex flex-wrap">
      <NuxtLink class="mx-4 w-col1 group" to="/pennsylvania">
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
        <p class="ml-col4 mx-4 text-runde-m w-col6">
          {{ introText }}
        </p>
        <div class="w-col2 mx-4 flex flex-col">
          <h3 class="font-runde text-runde-xs font-bold uppercase mb-4">{{location}}</h3>
          <h3 class="font-runde text-runde-xs font-bold uppercase mb-4">{{date}}</h3>
          <h3 class="font-runde text-runde-xs font-bold uppercase">On This Page</h3>
          <div class="pl-4 mt-2 flex flex-col items-start">
            <template v-for="link in onThisPage">
              <a :href="'#' + link[1]" class="hover:text">
                {{ link[0] }}
              </a>
            </template>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>

  const props = defineProps({
    title: String,
    subtitle: String,
    introText: String,
    location: String,
    date: String,
    onThisPage: Array,
  });
</script>