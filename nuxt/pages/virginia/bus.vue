<template>
  <main>
    <BlockProjectHeader
      class="relative z-20"
      title="Virginia"
      backLink="/virginia"
      subtitle="The Freedom Constellations bus was a mobile megaphone sharing the dreams of youth leaders with communities across Richmond!"
      location="Richmond, VA"
      introText="Completely covered in beautiful portraits, inspirational poetry, and symbols of a free future, the bus operated on every route in the city, allowing it to connect the voices and demands of youth with communities throughout the region."
      date=""
      :onThisPage="[
      ]"
    />
    <section 
        class="
          bg-black relative z-10 pb-16
          before:content-[''] before:absolute before:w-full before:h-[20svh] before:bg-gradient-to-b to-black from-black-trans before:-top-[20svh] before:left-0 before:z-0"
      >
      <BlockImageFullWidthSlideshow
        class="mt-8"
        :images="[
          {
            src: '/virginia/bus/GRTC_FreedomConstellations_1_small.jpg'
          },
          {
            src: '/virginia/bus/GRTC_FreedomConstellations_2small.jpg'
          },
          {
            src: '/virginia/bus/GRTC_FreedomConstellations_13small.jpg'
          }
        ]"
      />
      <BlockTextBody
        text="The unveiling of the bus happened directly below the monumental portraits on City Hall. It was super inspiring to think of City Hall as the central star of Freedom Constellations, and the bus as the vehicle for bringing these message of hope and justice to people and communities across the city. 

***This was the first ever collaboration for the GRTC Transit System with nonprofit and philanthropic partners and it's their hope that it kicks off a series of bus wraps featuring different community groups who are important to GRTC ridership!

Huge thanks to CultureWorks Richmond and GRTC for making this possible! And to Fuji Film for lending us a camera powerful enough to make these monumental portraits pop!"
      />
      <BlockFullBleed
          video="https://player.vimeo.com/progressive_redirect/playback/1023014958/rendition/480p/file.mp4?loc=external&signature=4f55b1005ad0a6aec968ec9dc1698bd014f051a41182476a2daef7d37d38a3ad"/>
      <BlockTextHeading text="Credits"/>
      <BlockCredits 
          :credits="credits"/>
      <BlockTextHeading text="More from Virginia"/>
        
      <BlockProjectFooterLinks
        :links="footerLinks"
      />
    </section>
  </main>
</template>

<script setup>
  const footerLinks = [
  {
      title: 'AR Animations Over City Hall',
      link: "/virginia/ar",
      img: "/virginia/index/VA_Banner.jpg",
      color: "var(--nkip)"
    },
    {
      title: 'A Mural that Comes Alive',
      link: "/virginia/mural",
      img: "/virginia/index/VA_mural.jpg",
      color: "var(--projects)"
    },
    {
      title: "Youth Dreams of Freedom at the Smithsonian",
      link: "/virginia/smithsonian",
      img: "/virginia/index/VA_Film.jpg",
      color: "var(--programs)"
    }
  ]

  const credits = [
    {
      title: 'Youth leaders featured',
      text: 'Ta’Dreama, Clyde, Seth, Kiara, Iyana, and Denise (you all are amazing!!!)'
    },
    {
      title: 'Photography and art direction',
      text: 'Mark Strandquist '
    },
    {
      title: 'Background shapes',
      text: 'Kate DeCiccio, Kah Yangni, Amir Khadar, and Jay Krouse '
    },
    {
      title: 'Layout and design for bus wrap',
      text: 'Jay Krouse'
    }
  ]
</script>