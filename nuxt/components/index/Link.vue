<template>
  <div 
    class="w-1/2 md:w-full -mt-24 md:mt-8"
    :class="[
      props.reverse ? 'ml-[50%] md:ml-0' : ''
    ]"  
  >
    <NuxtLink
      :to="props.link"
      class="text-white flex-col group text-runde-m mx-4 md:mx-col1 xl:mx-col2 flex md:items-end transition-all duration-300"
      :class="[
        props.reverse ? 'md:flex-row-reverse' : 'md:flex-row',
        hoverColorClass
      ]"
    >
      <figure class="md:w-[60%] 
      relative aspect-[3/2] after:content-[''] after:block after:absolute after:top-0 after:left-0 after:w-full after:h-full after:z-[-1] after:rounded-xl after:shadow-imgLgHvr after:opacity-0 group-hover:after:opacity-100 after:transition-all"
      :class="props.reverse ? 'md:ml-4' : 'md:mr-4'">
        <img
          :src="props.img"
          :alt="props.text"
          class="inline-block w-full group-hover:rounded-xl object-cover transition-all duration-300" 
          />
      </figure>
      <figcaption 
        class='mb-8 mt-2 md:mt-0'
        :class="[
          props.reverse ? 'md:mr-4' : 'md:ml-4',
          textWidth ? textWidth : 'md:w-[20rem]'
        ]"
      >
        <div 
          class="text-runde-m md:text-runde-xl lg:text-runde-xxl inline font-semibold"
        >
          <template v-for="(word, index) in textArray" :key="index">
            <span class="inline-block mr-2" v-if="index != textArray.length -1">{{ word }}</span>
          </template>
          <span class="inline-block mr-2">{{textArray[textArray.length - 1]}}<IconsLinkArrow class="inline-block w-auto h-3 md:h-7 ml-2" :color="color" /></span>
        </div> 
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

  const textArray = computed(() => {
    return props.text.split(' ');
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