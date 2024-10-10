<template>
  <main>
    <BlockTextHeading class="relative z-20" text="Minnesota" />
    <BlockTextBody class="!mt-0 relative z-20" text="In the wake of the murder of George Floyd, Minnesota galvanized uprisings across the country inspiring a national reckoning with American policing. Schools across the Twin Cities ended their contracts with police but the End Youth Prisons MN campaign wanted to tell a deeper story about the underpinnings of Minnesota history, one punctuated by corporate racism and the genocide of Indigenous people.  In Minnesota, mapping a future of youth liberation meant unpacking hidden stories and imagining transformation led by youth vision." />

    <section 
    class="
    bg-black relative z-10
    before:content-[''] before:absolute before:w-full before:h-[20svh] before:bg-gradient-to-b to-black from-black-trans before:-top-[20svh] before:left-0 before:z-0
    "
    >
      <BlockTextBody text="Use the sections below to experience and learn more about each project that took place in Michigan." />

      <div class="relative">
        <IndexLink
          class="relative z-10"
          text="A Massive Interactive Exhibit"
          link="/minnesota/nkip"
          img="/minnesota/index/NKIPMN1.jpg"
          color="var(--nkip)"
        />
      </div>

      <div class="relative">
        <IndexLink
          class="relative z-10"
          text="Billboards and Banners"
          link="/minnesota/billboards"
          img="/minnesota/index/MNBillboards30.jpg"
          color="var(--billboards)"
          :reverse="true"
        />
      </div>

      <div class="relative">
        <IndexLink
          class="relative z-10"
          text="Guerilla Public Projections"
          link="/minnesota/nkip"
          img="/minnesota/index/MNProjections3.jpg"
          color="var(--projects)"
        />
      </div>

      <div class="relative">
        <IndexLink
          class="relative z-10"
          text="Cultural Organizing Projects"
          link="/minnesota/coi"
          img="/minnesota/index/MYJJacketPortraits21.jpg"
          color="var(--programs)"
          :reverse="true"
        />
      </div>

      <BlockTextBody
        class="pb-16"
        text="(Freedom Constellations, Twin cities, 2023) included abolitionist billboards and projections on symbolic sites. Organizers collaborated on interactive art pieces illuminating the normalized culture of surveillance and criminalization of youth by Target and narratives about carjacking. They created dynamic infographics about racial disparities and designed dazzling race car jackets adorned with their campaign values and demands. The Minnesota constellation calls for the support all youth deserve so they many take the wheel and lead us toward a future where all young people are thriving in freedom."
      />
    </section>
  </main>
</template>

<script setup>
</script>