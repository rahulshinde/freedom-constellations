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
          text="AR Animations Over City Hall"
          link="/virginia/ar"
          img="/virginia/index/CityHall_3.jpg"
          color="var(--projects)"
        />
      </div>

      <div class="relative">
        <IndexLink
        class="relative z-10"
        text="A Mural That Comes Alive"
        link="/virginia/mural"
        img="/virginia/index/MuralUnveiling_2_small.jpg"
        color="var(--projects)"
        :reverse="true"
        />
      </div>

      <div class="relative">
        <IndexLink
          class="relative z-10"
          text="An Abolitionist City Bus"
          link="/virginia/bus"
          img="/virginia/index/CityHall_3.jpg"
          color="var(--projects)"
        />
      </div>
    </section>
  </main>

</template>

<script setup>
</script>