<template>
  <div class="mx-4 mt-8">
    <h2 v-if="title != ''" class='md:ml-col3 md:mr-col3 md:px-12 text-white text-runde-l mb-4'>{{ title  }}</h2>
    <div class="md:ml-col3 md:mr-col3 md:px-12">
      <ul class="text-white columns-2 md:columns-3 gap-4 md:gap-8">
        <li class="mb-8 break-inside-avoid-column whitespace-pre-wrap" v-for="credit in credits">
          <div class="uppercase text-runde-xs font-semibold" v-if="credit.title">{{ credit.title }}</div>
          <div class="mt-2 text-runde-xs credit" v-html="credit.text"></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    title: String,
    credits: Array
  });
</script>

<style>
  .credit a{
    text-decoration: underline;
    transition: color 0.3s;
  }
  .credit a:hover{
    color: var(--navigation-highlight);
  }
</style>