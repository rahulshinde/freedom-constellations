<template>
  <section class="mx-4 mt-8">
    <div class="ml-col2 mr-col2 text-white whitespace-pre-wrap">
      <p class="w_quote relative flex flex-col font-hatton text-hatton-l text-navigation-highlight float-left w-[33%] mt-4 mr-8 mb-8">
        {{ props.quote }}”
        <span class="font-runde text-runde-m mt-2" v-if="props?.attribution != ''">—{{ props.attribution }}</span>
      </p>
      <p class="ml-col2 text-runde-m">{{ props.text }}</p>
    </div>
  </section>
</template>

<script setup>
  const props = defineProps({
    text: String,
    quote: String,
    attribution: String
  });
</script>

<style>
.w_quote:before{
  content: '“';
  position: absolute;
  left: -0.75rem
}
</style>
