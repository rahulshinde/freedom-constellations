<template>
  <main>
    <HomepageHero class="mb-20 z-20" />
    <section 
      class="
        bg-black min-h-10 relative z-10
        before:content-[''] before:absolute before:w-full before:h-[20svh] before:bg-gradient-to-b to-black from-black-trans before:-top-[20svh] before:left-0 before:z-0
      "
    >
      <BlockFullBleed
        video="/homepage/POSTVFX_TiguidaClip_v01.mp4"
      />
      <BlockTextLarge
        text="Freedom Constellations: Dreaming of A World Where All Youth Are Free (2020-2024) is a multi-city campaign that harnesses our collective creative power to imagine and advocate for a future where all youth are free, safe, and thriving."
      />
      <BlockTextBody
        text="Freedom Constellations: Dreaming of A World Where All Youth Are Free (2020-2024) is a multi-city campaign that harnesses our collective creative power to imagine and advocate for a future where all youth are free, safe, and thriving."
      />
      <BlockImageGallery
        :images="['/homepage/MNBillboards13.jpg', '/homepage/NKIPMN22.jpg']"
      />

      <BlockTextBody
        text="We are excited to share this website in an effort to showcase all that has been created but it's so much more than a website, it's an:"
      />
      <BlockTextBody
        text="Archive: Full of art made by artists and youth leaders from across the United States"
      />
      <BlockTextBody
        text="Abolitionist Tool-kit: Filled with free cultural organizing strategies, downloadable art, and curriculum"
      />
      <BlockTextBody
        text="A Standing Ovation: honoring the hundreds of youth leaders, partners, artists, and collaborators who made these projects possible."
      />

      <BlockLocationLinks/>
    </section>
  </main>
</template>

<script setup>

</script>