<template>
  <section class="mx-4 mt-16">
    <h2 class="text-hatton-xl font-hatton ml-col3 mr-col3 mx-4 mb-4">{{heading}}</h2>
    <div class="flex">
      <NuxtLink
        v-for="link in links"
        :to="link.link"
        class="mx-4 group flex flex-col transition-colors block"
        :class="
          [
            hoverColorClass(link.color),
            linkWidth(links.length)
          ]
        "
      >
        <figure class="relative after:content-[''] after:block after:absolute after:top-0 after:left-0 after:w-full after:h-full after:z-[-1] after:rounded-xl after:shadow-imgHvr after:opacity-0 group-hover:after:opacity-100 after:transition-all">
          <img 
            :src="link.img" 
            class="
              grow group-hover:rounded-xl transition-all
            "
          />
        </figure>
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

  const linkWidth = ((length) => {
    switch (length) {
      case 1:
        return 'w-full';
      case 2:
        return 'w-1/2';
      case 3:
        return 'w-1/3';
      case 4:
        return 'w-1/4';
      case 5:
        return 'w-1/5';
    }
  });
</script>