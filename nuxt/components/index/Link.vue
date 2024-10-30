<template>
  <div class="mx-4 mt-8">
    <NuxtLink
      :to="props.link"
      class="text-white group text-runde-m ml-col1 mr-col1 flex items-end transition-all duration-300"
      :class="[
        props.reverse ? 'flex-row-reverse' : 'flex-row',
        hoverColorClass
      ]"
    >
      <figure class="w-[60%] 
      relative after:content-[''] after:block after:absolute after:top-0 after:left-0 after:w-full after:h-full after:z-[-1] after:rounded-xl after:shadow-imgLgHvr after:opacity-0 group-hover:after:opacity-100 after:transition-all"
      :class="props.reverse ? 'ml-4' : 'mr-4'">
        <img
          :src="props.img"
          :alt="props.text"
          class="inline-block w-full group-hover:rounded-xl transition-all duration-300" 
          />
      </figure>
      <figcaption 
        class='mb-8'
        :class="[
          props.reverse ? 'mr-4' : 'ml-4',
          textWidth ? textWidth : 'w-[20rem]'
        ]"
      >
        <h2 
          class="text-runde-xxl inline font-semibold"
        >
          {{ props.text }}
        </h2><IconsLinkArrow class="inline-block w-auto h-7 ml-2 -mt-3" :color="color" />
      </figcaption>
    </NuxtLink>
  </div>
</template>

<script setup>
  const props = defineProps({
    link: String,
    img: String,
    text: String,
    color: String,
    reverse: Boolean,
    textWidth: String,
  });

  const hoverColorClass = computed(() => {
    switch (props?.color) {
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
</script>