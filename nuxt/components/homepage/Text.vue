<template>
  <ul 
    class="absolute z-0 font-runde text-projects text-center text-runde-xs font-bold top-0 left-0 w-full h-[60svh]"
  >
    <li 
      class="
        transition-colors
        absolute top-[25%] left-[10%]
        after:content-[''] after:absolute after:w-distance after:rotate-angle after:bottom-3 after:left-3 after:border-t-[1px] after:border-projects after:origin-left 
      "
      ref="Text1"
    >
      Public <br> Art
    </li>

    <li 
      class="
        transition-colors
        absolute top-[45%] left-[24%]
        after:content-[''] after:absolute after:w-distance after:rotate-angle after:bottom-3 after:left-3 after:border-t-[1px] after:border-projects after:origin-left 
      "
      ref="Text2"
    >
      #NoKidsinPrison <br> Exhibition
    </li>

    <li 
      class="
        transition-colors
        absolute top-[85%] left-[20%]
        after:content-[''] after:absolute after:w-distance after:rotate-angle after:bottom-3 after:left-3 after:border-t-[1px] after:border-projects after:origin-left 
      "
      ref="Text3"
    >
      Youth <br> Collaborations
    </li>

    <li 
      class="
        transition-colors
        absolute top-[35%] left-[40%]
        after:content-[''] after:absolute after:w-distance after:rotate-angle after:bottom-3 after:left-3 after:border-t-[1px] after:border-projects after:origin-left 
      "
      ref="Text4"
    >
      Augmented <br> Reality
    </li>

    <li 
      class="
        transition-colors
        absolute top-[55%] left-[60%]
        after:content-[''] after:absolute after:w-distance after:rotate-angle after:bottom-3 after:left-3 after:border-t-[1px] after:border-projects after:origin-left 
      "
      ref="Text5"
    >
      City-wide <br> Billboard <br> Campaign
    </li>

    <li 
      class="
        transition-colors
        absolute top-[10%] left-[50%]
        after:content-[''] after:absolute after:w-distance after:rotate-angle after:bottom-3 after:left-3 after:border-t-[1px] after:border-projects after:origin-left 
      "
      ref="Text6"
    >
      Video & Audio <br> Installations
    </li>

    <li 
      class="
        transition-colors
        absolute top-[30%] left-[70%]
        after:content-[''] after:absolute after:w-distance after:rotate-angle after:bottom-3 after:left-3 after:border-t-[1px] after:border-projects after:origin-left 
      "
      ref="Text7"
    >
      Guerilla <br> Projections
    </li>

    <li 
      class="
        transition-colors
        absolute top-[0%] left-[80%]
        after:content-[''] after:absolute after:w-distance after:rotate-angle after:bottom-3 after:left-3 after:border-t-[1px] after:border-projects after:origin-left 
      "
      ref="Text8"
    >
      Public <br> Programming
    </li>
  </ul>
</template>

<script setup>
  const Text1 = ref(null);
  const Text2 = ref(null);
  const Text3 = ref(null);
  const Text4 = ref(null);
  const Text5 = ref(null);
  const Text6 = ref(null);
  const Text7 = ref(null);
  const Text8 = ref(null);

  const calcDistanceAndRotation = (first, second) => {
    const firstRect = first.getBoundingClientRect();
    const secondRect = second.getBoundingClientRect();
    const x = secondRect.left - firstRect.left;
    const y = secondRect.top - firstRect.top;
    const distance = Math.sqrt(x * x + y * y);
    const angle = Math.atan2(y, x) * (180 / Math.PI);

    first.style.setProperty('--distance', distance + 'px');
    first.style.setProperty('--angle', angle + 'deg');
  };
  

  onMounted(() => {
    nextTick(() => {
      calcDistanceAndRotation(Text1.value, Text2.value);
      calcDistanceAndRotation(Text2.value, Text3.value);
      calcDistanceAndRotation(Text3.value, Text4.value);
      calcDistanceAndRotation(Text4.value, Text5.value);
      calcDistanceAndRotation(Text5.value, Text6.value);
      calcDistanceAndRotation(Text6.value, Text7.value);
      calcDistanceAndRotation(Text7.value, Text8.value);

      if (process.client){
        window.addEventListener('resize', () => {
          calcDistanceAndRotation(Text1.value, Text2.value);
          calcDistanceAndRotation(Text2.value, Text3.value);
          calcDistanceAndRotation(Text3.value, Text4.value);
          calcDistanceAndRotation(Text4.value, Text5.value);
          calcDistanceAndRotation(Text5.value, Text6.value);
          calcDistanceAndRotation(Text6.value, Text7.value);
          calcDistanceAndRotation(Text7.value, Text8.value);
        });
      }
    });
  });
</script>