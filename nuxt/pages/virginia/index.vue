<template>
  <main class="w-full overflow-hidden">
    <BlockTextHeading class="relative z-20" text="Virginia" />

    <section 
      class="
        bg-black relative z-10 pb-16
        before:content-[''] before:absolute before:w-full before:h-[20svh] before:bg-gradient-to-b to-black from-black-trans before:-top-[20svh] before:left-0 before:z-0
      "
    >
      <BlockFullBleed
        class="mt-16"
        video="https://player.vimeo.com/progressive_redirect/playback/1018384447/rendition/1080p/file.mp4?loc=external&signature=d0e8182d1eaffd2e4d6ed1a72086ba77a85f3b8f4de109a6690d4855c9c48b98"
      />
      <BlockTextBody text="Use the sections below to experience and learn more about each project that took place in Richmond. Collectively we hope it not only transports you to that beautiful future youth imagined, but inspires you to build that future in your own community." />


      <div class="relative">
        <IndexLink
          class="relative z-10"
          text="A Massive Interactive Exhibit"
          link="/pennsylvania/nkip"
          img="/pennsylvania/index/nkip.jpg"
          color="var(--nkip)"
        />
        <img class="absolute z-[1] top-4 w-[15%] right-[10%]" src="/zine-assets/zine-assets_0017_Layer-1.png" />
        <img class="absolute z-[1] -bottom-[30vw] w-[50%] left-[10%] -z-10" src="/zine-assets/ribbons1.png" />
      </div>
    </section>
  </main>

</template>

<script setup>
</script>