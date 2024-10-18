<template>
  <div class="mx-4 mt-16">
    <NuxtLink
      :to="props.link"
      class="text-white group text-runde-m ml-col1 mr-col1 flex items-end transition-all duration-300"
      :class="[
        props.reverse ? 'flex-row-reverse' : 'flex-row',
        hoverColorClass
      ]"
    >
      <img
        :src="props.img"
        :alt="props.text"
        class="w-[60%] inline-block group-hover:rounded-xl transition-all duration-300" 
        :class="props.reverse ? 'ml-4' : 'mr-4'"
      />
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
        </h2><IconsLinkArrow class="inline-block w-auto h-7 ml-2 -mt-4" :color="color" />
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