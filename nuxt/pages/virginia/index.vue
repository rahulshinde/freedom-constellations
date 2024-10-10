<template>
  <main class="w-full overflow-hidden">
    <BlockTextHeading class="relative z-20" text="Virginia" />
    <BlockTextBody class="!mt-0 relative z-20" text="As Richmond dismantled monuments to their painful and devastating legacy of slavery and the confederacy, Freedom Constellations (2020-2022) represented a new, interactive series of monumental public art projects that asked young people to illustrate a road map toward freedom for us all." />

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
      <BlockTextBody text="Use the sections below to experience and learn more about each project that took place in Richmond." />


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
          img="/virginia/index/GRTC_FreedomConstellations_2small.jpg"
          color="var(--projects)"
        />
      </div>

      <div class="relative">
        <IndexLink
        class="relative z-10"
        text="Youth Dreams of Freedom at the Smithsonian"
        link="/virginia/smithsonian"
        img="/virginia/index/SmithsonianFilm_DOcumentation_small.jpg"
        color="var(--projects)"
        :reverse="true"
        />
      </div>

      <div class="relative overflow-hidden">
      <BlockTextBody
        class="pb-16"
        text="As the first in the series of Freedom Constellations campaigns, Richmond showcased many powerful models to build from as we moved to work with other state campaigns, but also areas where we could make those versions even more powerful. 

As you move on to other states, you’ll see how the #NoKidsInPrison exhibition, billboards, and other strategies were added to further engage massive and strategic audiences while providing a space for events, organizing, and convenings. Huge thanks to everyone who made Richmond’s campaigns possible. 
"
      />
      </div>
    </section>
  </main>

</template>

<script setup>
</script>