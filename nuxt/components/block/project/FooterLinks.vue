<template>
  <section class="mx-4">
    <h2 class="text-hatton-xl font-hatton ml-col3 mr-col3 mx-4 mb-4">{{heading}}</h2>
    <div class="flex">
      <NuxtLink
        v-for="link in links"
        :to="link.link"
        class="mx-4 group flex flex-col transition-colors block"
        :class="hoverColorClass(link.color)"
      >
        <img :src="link.img" class="grow"/>
        <div class="text-runde-l font-semibold mt-4 inline">
          {{ link.title }}<IconsLinkArrow class="inline-block w-auto h-5 ml-2" :color="link.color" />
        </div>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
  const props = defineProps({
    heading: String,
    links: Array
  })

  const hoverColorClass = ((color) => {
    switch (color) {
      case 'var(--nkip)':
        return 'hover:text-nkip';
      case 'var(--billboards)':
        return 'hover:text-billboards';
      case 'var(--projects)':
        return 'hover:text-projects';
      case 'var(--programs)':
        return 'hover:text-programs';
      case 'var(--bg-highlight)':
        return 'hover:text-bg-highlight';
    }
  });
</script>