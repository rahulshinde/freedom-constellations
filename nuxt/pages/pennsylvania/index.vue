<template>
  <main>
    <BlockTextHeading class="relative z-20" text="Pennsylvania: A city full of abolitionist art" />
    <BlockTextBody class="!mt-0 relative z-20" text="In 2023, Performing Statistics, over 50 youth leaders in Philadelphia, artists from across North America and a coalition of community partners collaborated to create a city-wide series of interactive public artworks, exhibitions, and billboards that envisioned a more just, whole, and safe future." />

    <section 
      class="
        bg-black relative z-10
        before:content-[''] before:absolute before:w-full before:h-[20svh] before:bg-gradient-to-b to-black from-black-trans before:-top-[20svh] before:left-0 before:z-0
      "
    >

      <BlockImageFullWidth img="/pennsylvania/index/NKIPPhilly_20.jpg" alt="NKIP Philly 21" />

      <BlockTextBody text="Use the sections below to experience and learn more about each project that took place in Philadelphia. Collectively we hope it not only transports you to that beautiful future youth imagined, but inspires you to build that future in your own community." />

      <IndexLink
        text="A Massive Interactive Exhibit"
        link="/pennsylvania/nkip"
        img="/pennsylvania/index/nkip.jpg"
        color="var(--nkip)"
      />

      <IndexLink
        text="Augmented Reality Banners"
        link="/pennsylvania/ar"
        img="/pennsylvania/index/AR-PHILLY_dirty.jpg"
        color="var(--projects)"
        :reverse="true"
      />

      <IndexLink
        text="Abolitionist Billboards"
        link="/pennsylvania/billboards"
        img="/pennsylvania/index/billboards.jpg"
        color="var(--billboards)"
      />

      <IndexLink
        text="Youth Collaborations"
        link="/pennsylvania/youth-collaborations"
        img="/pennsylvania/index/youth-collaborations.jpg"
        color="var(--programs)"
        :reverse="true"
        textWidth="w-[24rem]"
      />

      <IndexLink
        text="Community Events"
        link="/pennsylvania/community-events"
        img="/pennsylvania/index/community-events.jpg"
        color="var(--bg-highlight)"
      />

      <BlockTextWithQuote
        class="pb-16"
        text="Featuring a city-wide constellation of massive banners, billboards, temporary murals, immersive exhibitions, and robust public programming, this rare project looked to Philadelphia's youth to help guide us all to a future where all children are free, healed, and thriving.

This project came in a moment when conservative forces were, and continue to push racist tough-on-crime narratives (that blame youth, communities, and progressive movements). Our work in Philadelphia countered these regressive narratives by looking to youth themselves as the leaders we need most. The stories we tell about the kind of future we want to build are more important than ever. That future belongs to our youth and we believe that it's our duty to do everything we can to amplify their voices and make their dreams and demands as loud, public, and beautiful as possible!"
        quote="This rare project looked to Philadelphia's youth to help guide us all to a future where all children are free, healed, and thriving."
      />
    </section>
  </main>
</template>

<script setup>
</script>