<template>
  <main>
    <BlockTextHeading class="relative z-20 !mt-16" text="New Jersey: Putting Youth in Power, Not Prison!" />
    <BlockTextBody
      class="!mt-4 relative z-20"
      text="As the country erupted in uprisings demanding reallocation of city budgets from policing to life affirming services, the New Jersey governor rolled out his plan to build 3 new youth prisons. Youth leaders from Newark and Camden jumped into action, using shelter-in-place as time to study the iconography of power and develop a series of posters, billboards and banners that would stretch across the state and make their opposition heard!"
    />

    <section 
      class="
        bg-black relative z-10 pb-16
        before:content-[''] before:absolute before:w-full before:h-[20svh] before:bg-gradient-to-b to-black from-black-trans before:-top-[20svh] before:left-0 before:z-0
      "
    >
      <BlockFullBleed
        :cover="true"
        video="https://player.vimeo.com/progressive_redirect/playback/1024092271/rendition/1080p/file.mp4?loc=external&signature=98474fc27366952ec3a93b0e7b5a780c05b49fc6268abde4e8d7e3f3de5577bd"
      />
      <BlockTextBody text="Use the sections below to experience and learn more about each project that took place New Jersey" />
      
      <div class="relative">
        <img class="absolute z-[1] top-[7vw] w-[15vw] right-[4vw]" src="/zine-assets/crystal_purple1.png" />
        <img class="absolute z-[1] top-[20vw] w-[55vw] -left-[10vw] rotate-90" src="/zine-assets/zine-assets_0009_Layer-3-copy-2.png" />
        <IndexLink
          class="relative z-10"
          text="Cultural Organizing Institute"
          link="/new-jersey/coi"
          img="/new-jersey/index/NJ_COI.jpg"
          color="var(--nkip)"
        />
      </div>

      <div class="relative">
        <img class="absolute z-[1] top-[2vw] w-[18vw] left-[20vw]" src="/zine-assets/pinkstar.png" />

        <IndexLink
          class="relative z-10"
          text="Posters"
          link="/new-jersey/posters"
          img="/new-jersey/index/NJ_Poster.jpg"
          color="var(--projects)"
          :reverse="true"
        />
      </div>

      <div class="relative">
        <img class="absolute z-[1] -top-[5vw] w-[12vw] -rotate-90 right-[5vw]" src="/zine-assets/zine-assets_0000_Layer-14.png" />
        <img class="absolute z-[1] top-[15vw] w-[18vw] right-[15vw]" src="/zine-assets/zine-assets_0017_Layer-1.png" />

        <IndexLink
          class="relative z-10"
          text="Abolitionist Billboards & Banners"
          link="/new-jersey/billboards"
          img="/new-jersey/index/NJ_Billboards.jpg"
          color="var(--billboards)"
        />
      </div>

      <div class="relative">
        <img loading="lazy" class="absolute z-[1] -top-[15vw] w-[18vw] left-[15vw]" src="/zine-assets/planet3.png" />
        <img loading="lazy" class="absolute z-[1] -top-[2vw] w-[14vw] left-[22vw]" src="/zine-assets/zine-assets_0002_Layer-12.png" />
        <IndexLink
          class="relative z-10"
          text="Massive Wheat Paste Mural"
          link="/new-jersey/mural"
          img="/new-jersey/index/NJ_Mural.jpg"
          color="var(--programs)"
          :reverse="true"
        />
      </div>

      <BlockVideo
        video="https://player.vimeo.com/progressive_redirect/playback/1024096943/rendition/2160p/file.mp4?loc=external&signature=4d8277debc55eb7f52be799aa788f5c7fdb79dd187fe8b54d01b77833c1ba38d"
        poster="/new-jersey/index/nj_index_cover.jpg"
      />

      <div class="relative">
        <img loading="lazy" class="absolute scale-x-[-1] z-[-1] bottom-[-3vw] w-[33%] left-0" src="/zine-assets/zine-assets_0013_Layer-5.png" />
        <BlockTextWithQuote
        class="pb-16"
        text=" In 2020, Governor Phil Murphy’s report recommending the construction of 3 new youth prisons came as a shock given that in January 2018, following advocacy from the 150 Years is Enough campaign, former Governor Chris Christie announced the closure of two of New Jersey's three youth facilities. At a price tag of $600k per year per incarcerated young person, the youth leaders from the Youth4Justice NJ campaign in Camden and Newark decided that if they were not going to be included in conversations that so deeply impacted the lives of youth across the state, it was time to make their voices loud and clear. Freedom Constellations, NJ 2020-2022 used their time sheltering in place to build consensus and design abolitionist jumpsuits they could wear and use to create powerful portraits of youth leadership.

Through a series of giant public banners and billboards stretching across the state, organizers made their demand to, “Put Youth in Power, Not Prison” unescapable. From downtown Newark to the neighborhoods of Camden and outside the largest youth prison in New Jersey, the young people made sure their calls to “Destroy Detainment,” for “Healing Not Harm,” and “Fund the Future” were heard."
          quote="Put Youth in Power, Not Prison."
        />
      </div>
    </section>
  </main>
</template>

<script setup>
</script>