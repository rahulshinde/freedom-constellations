<template>
  <main>
    <HomepageHero class="mb-[0svh] z-10" />
    <section 
      class="
        bg-black relative z-10
        before:content-[''] before:pointer-events-none before:absolute before:w-full before:h-[5svh] before:bg-gradient-to-b to-[rgba(0,0,0,0.5)] from-black-trans before:-top-[5svh] before:left-0 before:z-[-1]
      "
    >
      <BlockFullBleed
        :cover="true"
        video="https://player.vimeo.com/progressive_redirect/playback/1008534310/rendition/1080p/file.mp4?loc=external&signature=8dffa6399b5433c59dd5e912c9ff81dd7a04aaf059eaba5e3098bbf22b971ad3"
      />
      <BlockTextLarge
        text="Freedom Constellations: Dreaming of A World Where All Youth Are Free (2020-2024) is a multi-city campaign that harnesses our collective creative power to imagine and advocate for a future where all youth are free, safe, and thriving."
      />
      <BlockTextBody
        text="The project has reached hundreds of thousands of viewers through a unique combination of massive public art, augmented reality immersive experiences, city-wide billboard campaigns, guerilla projections, the #NoKidsInPrison exhibition, and robust public programming."
      />
      <BlockImageGallery
        :images="['/homepage/MNBillboards13.jpg', '/homepage/NKIPMN22.jpg']"
      />

      <BlockTextBody
        text="We are excited to share this website in an effort to showcase all that has been created but it's so much more than a website, it's an:"
      />
      <BlockTextBullet
        title="Archive"
        text="Full of art made by artists and youth leaders from across the United States"
      />
      <BlockTextBullet
        title="Abolitionist Tool-kit"
        text="Filled with free cultural organizing strategies, downloadable art, and curriculum"
      />

      <BlockTextBullet
        title="A Standing Ovation"
        text="Honoring the hundreds of youth leaders, partners, artists, and collaborators who made these projects possible."
      />

      <BlockTextHeading
        class="md:mt-32"
        text="Explore Projects by State"
      />
      <BlockLocationLinks class="-mb-8 md:mb-0"/>
    </section>
  </main>
</template>

<script setup>

</script>