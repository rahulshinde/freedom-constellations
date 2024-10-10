<template>
  <main class="w-full overflow-hidden">
    <BlockTextHeading class="relative z-20" text="Illinois" />

    <section 
      class="
        bg-black relative z-10 pb-16
        before:content-[''] before:absolute before:w-full before:h-[20svh] before:bg-gradient-to-b to-black from-black-trans before:-top-[20svh] before:left-0 before:z-0
      "
    > 
      <BlockTextBody text="Use the sections below to experience and learn more about each project that took place in Chicago." />
      <div class="relative">
        <img class="absolute z-[1] -top-[8vw] w-[24vw] right-[15vw] rotate-[15deg]" src="/zine-assets/zine-assets_0008_Layer-6.png" />
        <IndexLink
          class="relative z-10"
          text="No Kids In Prison Exhibition"
          link="/illinois/nkip"
          img="/illinois/index/NKIPChicago2.jpg"
          color="var(--nkip)"
          />
        <img class="absolute z-[1] top-[8vw] w-[20vw] right-[0vw] rotate-[15deg]" src="/zine-assets/pinkstar.png" />
      </div>
      <div class="relative">
        <IndexLink
          class="relative z-10"
          text="Billboards"
          link="/illinois/billboards"
          img="/illinois/index/NKIPChicagoBillboards5.jpg"
          color="var(--billboards)"
          :reverse="true"
        />
        <img class="absolute z-[1] -top-[5vw] w-[15vw] left-[10vw] rotate-[15deg]" src="/zine-assets/yellowstar1.png" />
        <img class="absolute z-[1] -top-[7vw] w-[20vw] left-[30vw]" src="/zine-assets/redhexchalk2.png" />
        <img class="absolute z-[1] top-[7vw] w-[25vw] left-[0vw]" src="/zine-assets/zine-assets_0016_Layer-10.png" />
      </div>
      <div class="relative">
        <IndexLink
          class="relative z-10"
          text="Cultural Organizing Projects"
          link="/illinois/coi"
          img="/illinois/index/illinois-community.jpg"
          color="var(--programs)"
          />
        <img class="absolute z-[1] -bottom-[10vw] w-[30vw] -right-[10vw] -rotate-[10deg]" src="/zine-assets/zine-assets_0007_Layer-7.png" />
      </div>
    </section>
  </main>
</template>

<script setup>

</script>