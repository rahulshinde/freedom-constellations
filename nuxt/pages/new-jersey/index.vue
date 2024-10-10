<template>
  <main>
    <BlockTextHeading class="relative z-20" text="New Jersey" />

    <section 
      class="
        bg-black relative z-10 pb-16
        before:content-[''] before:absolute before:w-full before:h-[20svh] before:bg-gradient-to-b to-black from-black-trans before:-top-[20svh] before:left-0 before:z-0
      "
    >
      <BlockTextBody text="Use the sections below to experience and learn more about each project that took place in Jersey." />
      <div class="relative">
        <IndexLink
          class="relative z-10"
          text="Cultural Organizing Projects"
          link="/new-jersey/coi"
          img="/new-jersey/index/NJ_BIllboardPhotos2.jpg"
          color="var(--projects)"
        />
      </div>

      <div class="relative overflow-hidden">
        <img loading="lazy" class="absolute z-10 top-0 w-[20%] right-0" src="/zine-assets/zine-assets_0004_Layer-8.png" />
        <BlockTextWithQuote
        class="pb-16"
        text=" In 2020, New Jersey governor Phil Murphy put out a report recommending the construction of 3 new youth prisons. The announcement came as a shock given that in January 2018, following advocacy from the 150 Years is Enough campaign, former Governor Chris Christie announced the closure of two of New Jersey's three youth prisons. At a price tag of $600k per year per incarcerated young person, the youth leaders from the Youth4Justice NJ campaign in Camden and Newark decided that if they were not going to be included in conversations that so deeply impacted the lives of youth across the state, it was time to make their voices loud and clear. Freedom Constellations, NJ 2020-2022 used their time sheltering in place to build consensus and design abolitionist jumpsuits they could wear and use to create powerful portraits of youth leadership.

Through a series of giant public banners and billboards stretching across the state, organizers made their demand to, “Put Youth in Power, Not Prison” unescapable. From downtown Newark to the neighborhoods of Camden and outside the largest youth prison in New Jersey, the young people made sure their calls to “Destroy Detainment,” “Healing Not Harm,” and “Fund the Future” were heard. "
          quote="Put Youth in Power, Not Prison."
        />
      </div>
    </section>
  </main>
</template>

<script setup>
</script>