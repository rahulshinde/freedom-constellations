<template>
  <section class="mx-4 mt-8">
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
        <figure class="relative aspect-[3/2] after:content-[''] after:block after:absolute after:top-0 after:left-0 after:w-full after:h-full after:z-[-1] after:rounded-xl after:shadow-imgHvr after:opacity-0 group-hover:after:opacity-100 after:transition-all">
          <img 
            :src="link.img" 
            class="
              grow group-hover:rounded-xl w-full h-full transition-all object-cover
            "
          />
        </figure>
        <div class="text-runde-l font-semibold mt-4 inline">
          <template v-for="(word, index) in link.title.split(' ')" :key="index">
            <span class="inline-block mr-2" v-if="index != link.title.split(' ').length -1">{{ word }}</span>
          </template>
          <span class="inline-block mr-2">{{link.title.split(' ')[link.title.split(' ').length - 1]}}<IconsLinkArrow class="inline-block w-auto h-5 ml-2" :color="link.color" /></span>
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
        return 'hover:text-nkip hover:drop-shadow-[0_0_0.15rem_var(--nkip)]';
      case 'var(--billboards)':
        return 'hover:text-billboards hover:drop-shadow-[0_0_0.15rem_var(--billboards)]';
      case 'var(--projects)':
        return 'hover:text-projects hover:drop-shadow-[0_0_0.15rem_var(--projects)]';
      case 'var(--programs)':
        return 'hover:text-programs hover:drop-shadow-[0_0_0.15rem_var(--programs)]';
      case 'var(--bg-highlight)':
        return 'hover:text-bg-highlight hover:drop-shadow-[0_0_0.15rem_var(--bg-highlight)]';
    }
  });

  const linkWidth = ((length) => {
    switch (length) {
      case 1:
        return 'w-col12';
      case 2:
        return 'w-col6';
      case 3:
        return 'w-col4';
      case 4:
        return 'w-col3';
      case 5:
        return 'w-1/5';
    }
  });
</script>