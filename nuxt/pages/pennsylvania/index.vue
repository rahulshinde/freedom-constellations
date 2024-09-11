<template>
  <main>
    <BlockTextHeading text="Pennsylvania: A city full of abolitionist art" />

    <BlockTextBody class="!mt-0" text="In 2023, Performing Statistics, over 50 youth leaders in Philadelphia, artists from across North America and a coalition of community partners collaborated to create a city-wide series of interactive public artworks, exhibitions, and billboards that envisioned a more just, whole, and safe future." />

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

  </main>
</template>

<script setup>
</script>