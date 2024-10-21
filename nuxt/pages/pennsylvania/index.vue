<template>
  <main class="w-full overflow-hidden">
    <BlockTextHeading class="relative z-20 !mt-16" text="Pennsylvania: A city full of abolitionist art" />
    <BlockTextBody class="!mt-4 relative z-20" text="In 2023, Performing Statistics, over 50 youth leaders in Philadelphia, artists from across North America and a coalition of community partners collaborated to create a city-wide series of interactive public artworks, exhibitions, and billboards that envisioned a more just, whole, and safe future." />
    
    <section 
    class="
    bg-black relative z-10
    before:content-[''] before:absolute before:w-full before:h-[20svh] before:bg-gradient-to-b to-black from-black-trans before:-top-[20svh] before:left-0 before:z-0
    "
    >
    
      <img class="absolute z-[1] -top-[30vw] right-0" src="/zine-assets/zine-assets_0013_Layer-5.png" />
      <BlockImageFullWidth class="z-10 relative" img="/pennsylvania/index/NKIPPhilly_20.jpg" alt="NKIP Philly 21" />

      <BlockTextBody text="Use the sections below to experience and learn more about each project that took place in Philadelphia. Collectively we hope it not only transports you to that beautiful future youth imagined, but inspires you to build that future in your own community." />

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
      
      <div class="relative">
        <IndexLink
        class="relative z-10"
        text="Augmented Reality Banners"
        link="/pennsylvania/ar"
        img="/pennsylvania/index/AR-PHILLY_dirty.jpg"
        color="var(--projects)"
        :reverse="true"
        />
        <img class="absolute z-[1] bottom-4 w-[15%] left-0" src="/zine-assets/crystal_purple1.png" />
      </div>
      
      <div class="relative">
        <IndexLink
          text="Abolitionist Billboards"
          link="/pennsylvania/billboards"
          img="/pennsylvania/index/billboards.jpg"
          color="var(--billboards)"
          />
        <img class="absolute -z-10 -top-[40%] w-[30%] right-[30%]" src="/zine-assets/planet2.png" />
        <img class="absolute -z-10 -top-[30%] w-[40%] -right-4" src="/zine-assets/zine-assets_0009_Layer-3-copy-2.png" />
      </div>
      
      <div class="relative">
        <IndexLink
          text="Youth Collaborations"
          link="/pennsylvania/youth-collaborations"
          img="/pennsylvania/index/youth-collaborations.jpg"
          color="var(--programs)"
          :reverse="true"
          textWidth="w-[24rem]"
          />
        <img loading="lazy" class="absolute -z-10 -top-[60%] w-[35%] left-[10%]" src="/zine-assets/purlehex2chalk.png" />
        <img loading="lazy" class="absolute z-10 -top-[40%] w-[25%] left-[0%]" src="/zine-assets/zine-assets_0007_Layer-7.png" />
        <img loading="lazy" class="absolute -z-10 -bottom-[40%] w-[25%] left-[50%]" src="/zine-assets/threecircles1.png" />
      </div>
      
      <div class="relative">
        <IndexLink
          text="Community Events"
          link="/pennsylvania/community-events"
          img="/pennsylvania/index/community-events.jpg"
          color="var(--bg-highlight)"
        />
        <img loading="lazy" class="absolute -z-10 top-0 w-20 right-[24%]" src="/zine-assets/orangestar2.png" />
        <img loading="lazy" class="absolute z-10 -bottom-4 w-[15%] left-0" src="/zine-assets/zine-assets_0006_Layer-3.png" />
        <img loading="lazy" class="absolute z-10 -bottom-[10%] w-[10%] left-10" src="/zine-assets/zine-assets_0002_Layer-12.png" />
      </div>
      
      <BlockTextHeading
        class="!mt-16"
        text='Watch a mini-documentary about all the magic youth leaders created in Philadelphia!'
      />

      <BlockVideo
        video="https://player.vimeo.com/progressive_redirect/playback/1021789567/rendition/1080p/file.mp4?loc=external&signature=5d68aae78f022027e717643f3b8e5f97a8031eebac4ef4c3726e8fb2057d340b"
      />

      <div class="relative overflow-hidden">
        <img loading="lazy" class="absolute z-10 top-0 w-[40%] -rotate-90 -right-[15vw]" src="/zine-assets/zine-assets_0004_Layer-8.png" />
      <BlockTextWithQuote
        class="pb-16"
        text="Featuring a city-wide constellation of massive banners, billboards, temporary murals, immersive exhibitions, and robust public programming, this rare project looked to Philadelphia's youth to help guide us all to a future where all children are free, healed, and thriving.

This project came in a moment when conservative forces were, and continue to push racist tough-on-crime narratives (that blame youth, communities, and progressive movements). Our work in Philadelphia countered these regressive narratives by looking to youth themselves as the leaders we need most. The stories we tell about the kind of future we want to build are more important than ever. That future belongs to our youth and we believe that it's our duty to do everything we can to amplify their voices and make their dreams and demands as loud, public, and beautiful as possible!"
        quote="This rare project looked to Philadelphia's youth to help guide us all to a future where all children are free, healed, and thriving."
      />
      </div>
    </section>
  </main>
</template>

<script setup>
</script>