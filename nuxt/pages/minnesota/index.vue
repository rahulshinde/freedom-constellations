<template>
  <main class="overflow-x-hidden">
    <BlockTextHeading class="relative z-20 !mt-16" text="Minnesota: Uncuffing the Future by Putting Youth in the Driver’s Seat" />
    <BlockTextBody class="!mt-4 relative z-20" text="In the wake of the murder of George Floyd, Minnesota galvanized uprisings across the country inspiring a national reckoning with American policing. Schools across the Twin Cities ended their contracts with police but the End Youth Prisons MN campaign wanted to tell a deeper story about the underpinnings of Minnesota history, one punctuated by corporate racism and the genocide of Indigenous people.  In Minnesota, mapping a future of youth liberation meant unpacking hidden stories and imagining transformation led by youth vision." />
    <img class="absolute w-[15vw] rotate-[25deg] right-[8rem] bottom-[10vw]" src="/zine-assets/zine-assets_0014_Layer-4.png"/>
    <img class="absolute w-[15vw] rotate-[25deg] left-[4rem] top-[10vw]" src="/zine-assets/zine-assets_0016_Layer-10.png"/>
    <section 
    class="
    bg-black relative z-10
    before:content-[''] before:absolute before:w-full before:h-[30svh] before:bg-gradient-to-b to-black from-black-trans before:-top-[30svh] before:left-0 before:z-0
    "
    >
    <BlockImageFullWidth class="z-10 relative" img="/minnesota/index/NKIPMNpeople10.jpg" alt="NKIP Philly 21" />
    <BlockTextBody text="Use the sections below to experience and learn more about each project that took place Minnesota." />
    
    <div class="relative">
      <IndexLink
          class="relative z-10"
          text="No Kids In Prison Exhibition"
          link="/minnesota/nkip"
          img="/minnesota/index/MN_NKIP.jpg"
          color="var(--nkip)"
        />
        <img class="absolute bottom-[10vw] right-0 w-[35vw] rotate-[-55deg]" src="/zine-assets/purlehex2chalk.png" />
      </div>

      <div class="relative">
        <IndexLink
          class="relative z-10"
          text="Abolitionist Billboards & Banners"
          link="/minnesota/billboards"
          img="/minnesota/index/MN_Billboards.jpg"
          color="var(--billboards)"
          :reverse="true"
        />
        <img class="absolute bottom-[-10vw] left-[-10vw] w-[30vw] rotate-[55deg]" src="/zine-assets/planet1.png" />
        <img class="absolute top-[5vw] left-[15vw] w-[20vw]" src="/zine-assets/redstar2.png" />
      </div>
      
      <div class="relative">
        <IndexLink
          class="relative z-10"
          text="Guerilla Public Projections"
          link="/minnesota/guerilla-projections"
          img="/minnesota/index/MN_Projections.jpg"
          color="var(--projects)"
          />
        <img class="absolute top-[5vw] right-[15vw] w-[40vw]" src="/zine-assets/ribbons1.png" />
        <img class="absolute top-[5vw] right-[15vw] w-[10vw]" src="/zine-assets/orangestar1.png" />
      </div>

      <div class="relative">
        <IndexLink
          class="relative z-10"
          text="Cultural Organizing Institute"
          link="/minnesota/coi"
          img="/minnesota/index/MN_COI.jpg"
          color="var(--programs)"
          :reverse="true"
        />
        <img class="absolute top-[-10vw] left-[0vw] w-[25vw] scale-x-[-1] rotate-90" src="/zine-assets/zine-assets_0008_Layer-6.png" />
      </div>

      <BlockTextBody
        text="Freedom Constellations, Twin cities, 2023 included abolitionist billboards and projections on symbolic sites. Organizers collaborated on interactive art pieces illuminating the normalized culture of surveillance and criminalization of youth by Target and narratives about carjacking. They created dynamic infographics about racial disparities and designed dazzling race car jackets adorned with their campaign values and demands. The Minnesota constellation calls for the support all youth deserve so they many take the wheel and lead us toward a future where all young people are thriving in freedom."
      />
    </section>
  </main>
</template>

<script setup>
</script>