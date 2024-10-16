<template>
  <main>
    <BlockProjectHeader
      class="relative z-20"
      title="Minnesota"
      backLink="/minnesota"
      subtitle="#NoKidsInPrison, Twin Cities"
      location="Black Youth Healing Center"
      introText="Organized by Performing Statistics in collaboration with End Youth Prisons MN, this interactive exhibition took viewers on an immersive journey from the history of youth incarceration, to the present-day impact on youth and their families, and ended in a future space world where all youth are free. The exhibition filled the gymnasium at Black Youth Healing Arts Center and premiered interactive sculptures and infographics created by local artists and youth organizers about the state of youth incarceration in Minnesota. Thousands of viewers engaged with immersive virtual reality, music by youth and and eight years of art made in collaboration with youth leaders nationwide."
      date="September 29 - October 8th, 2023"
      :onThisPage="[
      ]"
    />  

    <section
      class="
        bg-black relative z-10 pb-16
        before:content-[''] before:absolute before:w-full before:h-[20svh] before:bg-gradient-to-b to-black from-black-trans before:-top-[20svh] before:left-0 before:z-0
      "
    >

      <BlockImageFullWidthSlideshow
        class="mt-16"
        :images="slideshow"
      />

      <BlockCredits
          :credits="credits" 
      />

    </section>
  </main>
</template>

<script setup>
  const slideshow = [
    {
      src: '/minnesota/nkip/slideshow/NKIPMN2.jpg',
      caption: ''
    },
    {
      src: '/minnesota/nkip/slideshow/NKIPMN4.jpg',
      caption: ''
    },
    {
      src: '/minnesota/nkip/slideshow/NKIPMN6.jpg',
      caption: ''
    },
    {
      src: '/minnesota/nkip/slideshow/NKIPMN10.jpg',
      caption: ''
    },
    {
      src: '/minnesota/nkip/slideshow/NKIPMN11.jpg',
      caption: ''
    },
    {
      src: '/minnesota/nkip/slideshow/NKIPMN13.jpg',
      caption: ''
    },
    {
      src: '/minnesota/nkip/slideshow/NKIPMN15.jpg',
      caption: ''
    }
  ]
  const credits = [
    {
      title: 'Community Partners',
      text: 'Legal Rights Center, End Youth Prisons MN'
    },
    {
      title: 'Campaign Lead',
      text: 'End Youth Prisons MN: Caelyn Steele'
    },
    {
      title: 'Community Strategy Program Director',
      text: 'Lupita Herrera'
    },
    {
      title: 'Production Manager',
      text: 'Con Rice'
    },
    {
      title: 'Installation Team',
      text: '360 Property Solution, Blocktoblock contractors, Property Guardians, Nick Popovici, Courtney Bowles'
    },
    {
      title: 'Site Manager',
      text: 'Takayla Lynne, Black Youth Healing Arts Center'
    },
    {
      title: 'Youth Docents from End Youth Prisons MN',
      text: 'Adia, Marrea, Dallas, Sreeja, Tyshawn, Aaliyah, Gabe, Myleeyah, Mira, Johnny'
    },
    {
      title: 'Zine design',
      text: 'Jason Killinger'
    },
    {
      title: 'Zine Cover art',
      text: 'Amarie Baker in collaboration with youth leaders at End Youth Prisons MN'
    }
  ]
</script>