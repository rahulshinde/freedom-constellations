<template>
  <main class="w-full overflow-hidden">
    <div class="relative">
      <BlockTextHeading class="relative z-20 mt-0 md:mt-16" text="Virginia: Turning buildings and busses into megaphones for youth" />
      <BlockTextBody class="!mt-4 relative z-20" text="As Richmond dismantled monuments to their painful and devastating legacy of slavery and the confederacy, Freedom Constellations (2020-2022) represented a new, interactive series of monumental public art projects that asked young people to illustrate a road map toward freedom for us all." />
      <img class="absolute z-[1] -top-[0vw] left-0 w-[20vw]" src="/zine-assets/bluecrown2.png" />
    </div>
    <section 
      class="
        bg-black relative z-10 pb-16
        before:content-[''] before:absolute before:w-full before:h-[20svh] before:bg-gradient-to-b to-black from-black-trans before:-top-[20svh] before:left-0 before:z-0
      "
    >
      <BlockFullBleed
        class="mt-16"
        video="https://player.vimeo.com/progressive_redirect/playback/1018384447/rendition/1080p/file.mp4?loc=external&signature=d0e8182d1eaffd2e4d6ed1a72086ba77a85f3b8f4de109a6690d4855c9c48b98"
        :cover="true"
      />
      <BlockTextBody text="Use the sections below to experience and learn more about each project that took place in Richmond." />


      <div class="relative mt-4 md:mt-0">
        <img class="absolute -z-[1] -top-[15vw] right-[10vw] w-[30vw]" src="/zine-assets/threecircles1.png" />
        <img class="absolute -z-[1] top-[5vw] right-[10vw] w-[10vw]" src="/zine-assets/orangestar.png" />

        <IndexLink
          class="relative z-10"
          text="AR Animations Over City Hall"
          link="/virginia/ar"
          img="/virginia/index/VA_Banner.jpg"
          color="var(--nkip)"
        />
      </div>

      <div class="relative">
        <img class="absolute -z-[1] -top-[15vw] left-[20vw] w-[35vw]" src="/zine-assets/planet1.png" />
        <img class="absolute -z-[1] top-[5vw] left-[20vw] w-[18vw]" src="/zine-assets/greenstar.png" />
        <IndexLink
        class="relative z-10"
        text="A Mural That Comes Alive"
        link="/virginia/mural"
        img="/virginia/index/VA_Mural.jpg"
        color="var(--projects)"
        :reverse="true"
        />
      </div>

      <div class="relative">
        <IndexLink
          class="relative z-10"
          text="An Abolitionist City Bus"
          link="/virginia/bus"
          img="/virginia/index/VA_Bus.jpg"
          color="var(--billboards)"
        />
        <img class="absolute -z-[1] top-[0vw] right-[0vw] w-[30vw]" src="/zine-assets/orangestar1.png" />
      </div>

      <div class="relative">
        <IndexLink
        class="relative z-10"
        text="Youth Dreams of Freedom at the Smithsonian"
        link="/virginia/smithsonian"
        img="/virginia/index/VA_Film.jpg"
        color="var(--programs)"
        :reverse="true"
        />
        <img class="absolute -z-[1] top-[-9rem] left-[-4rem] w-[30vw]" src="/zine-assets/zine-assets_0004_Layer-8.png" />
      </div>

      <div class="relative">
        <BlockTextHeading
          text='Watch a mini-documentary about all the magic youth leaders created in Richmond!'
        />
        <img class="absolute pointer-events-none -z-10 top-0 w-20 right-[24%]" src="/zine-assets/orangestar2.png" />
        <img class="absolute pointer-events-none z-10 -bottom-4 w-[15%] left-0" src="/zine-assets/zine-assets_0006_Layer-3.png" />
        <img class="absolute pointer-events-none z-10 -bottom-[10%] w-[10%] left-10" src="/zine-assets/zine-assets_0002_Layer-12.png" />
      </div>

      <BlockVideo
        video="https://player.vimeo.com/progressive_redirect/playback/1048605050/rendition/1080p/file.mp4?loc=external&signature=445e7cbffd792a866ed68f75bc9e0f47324a3e3412cf335ce844377dbca5851e"
        poster="/virginia/index/richmond-homepage-poster.jpg"
      />

      <div class="relative">
        <BlockTextBody
          text="As the first in the series of Freedom Constellations campaigns, Richmond showcased many powerful models to build from as we moved to work with other state campaigns, but also areas where we could make those versions even more powerful. 

As you move on to other states, you’ll see how the #NoKidsInPrison exhibition, billboards, and other strategies were added to further engage massive and strategic audiences while providing a space for events, organizing, and convenings. Huge thanks to everyone who made Richmond’s campaigns possible. 
"
        />
        <img class="absolute -z-[1] rotate-45 bottom-[2rem] right-[4rem] w-[15vw]" src="/zine-assets/zine-assets_0014_Layer-4.png" />
      
      </div>
    </section>
  </main>

</template>

<script setup>
</script>