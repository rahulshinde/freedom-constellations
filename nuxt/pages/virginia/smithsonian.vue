<template>
  <main>
    <BlockProjectHeader
      class="relative z-20"
      title="Virginia"
      backLink="/virginia"
      subtitle="Youth Dreams of Freedom at the Smithsonian"
      location="The Smithsonian, Washington, DC"
      introText="In 2021, Performing Statistics was chosen as 1 of 8 projects from across the country to be featured in the Futures We Dream video installation at the Smithsonian’s exhibit Futures!!! Located in Washington, DC, in the center of the National Mall, Futures was the first exhibition in the Arts and Industries building in over 20 years."
      date="2021"
      :onThisPage="[
      ]"
    />
    <section 
        class="
          bg-black relative z-10 pb-16
          before:content-[''] before:absolute before:w-full before:h-[30svh] before:bg-gradient-to-b to-black from-black-trans before:-top-[30svh] before:left-0 before:z-0"
      >
      <BlockVideo
        video='https://player.vimeo.com/progressive_redirect/playback/1023031783/rendition/1080p/file.mp4?loc=external&signature=3842b0ae73636d66944a913e05a62b0d993fae76494fd4e364a6df53e8eef61d'
        poster="/virginia/video/smithsonion_poster.jpg"
      />

      <BlockTextBody
        text="Endless thanks to The Alliance for Media Arts + Culture and the Smithsonian for making this possible, and for choosing our project to be featured alongside so many beautiful films and art pieces.

The film was made in collaboration with an amazing group of youth leaders from various advocacy organizations (Performing Statistics, The Hive, RISE for Youth and the Youth First Initiative !!!). Youth in the program wrote a collective poem about a future world where all youth are free, safe and thriving. They then selected the lines of the poem that they most connected with. Using these lines as their script, they worked with Mark Strandquist to co-direct scenes that brought their words to life. Youth leaders provided narration (reading their poem) and helped edit the film through feedback sessions. 

Tens of thousands of viewers went through the exhibition and we were so humbled to see the powerful stories, dreams, and demands of Richmond youth featured on the national mall. 

The film has also been viewed at many exhibitions, pop-up events and was featured in the 2023 Afrikana Film Festival in Richmond, VA."
      />

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
      title: "An Abolitionist City Bus",
      link: "/virginia/bus",
      img: "/virginia/index/VA_bus.jpg",
      color: "var(--billboards)"
    },
    {
      title: 'A Mural that Comes Alive',
      link: "/virginia/mural",
      img: "/virginia/index/VA_mural.jpg",
      color: "var(--projects)"
    }
  ]
  const credits = [
    {
      title: 'Direction',
      text: 'Mark Strandquist in collaboration with Performing Statistics and Kiara B., Marcus D., Seth H., Denise T., Netia L., Janiyah S., Siyanah L., MyaLansky M., and Marvin C.'
    },
    {
      title: 'Post Production Services',
      text: 'All Ages Productions'
    },
    {
      title: 'Editor / Color / Sound',
      text: 'Ricky Christian'
    },
    {
      title: 'Poem writing and narration',
      text: 'Kiara B., Marcus D., Seth H., Denise T., Netia L., Janiyah S., Siyanah L., MyaLansky M., Marvin C., alongside Rise For Youth organizers; Clyde, Iyana, Kayla, Khai, Kidaya, and Ta’Dreama.'
    },
    {
      title: 'Poem recording and editing',
      text: 'Nicki Stein and Mark strandquist'
    },
    {
      title: 'Film Assistants',
      text: 'Massayan Jallah and William Glaser Wilson'
    },
    {
      title: 'Intro Narration',
      text: 'Tracey Wells-Huggins'
    },
    {
      title: 'Additional Footage',
      text: 'Departure Point Films, Massayan Jallah'
    },
    {
      title: 'Special Thanks',
      text: 'Virginia Commonwealth University’s Photography and Film Department, Studio Two Three, Rise for Youth, Youth First Initiative, CodeVA, Patty Parks and the Richmond Department of Human Services, Trey Hartt, Gina Lyles, Mark Mervis, Kate Fowler, Jon Sheridan, Kyler O’Brien, and Courtney Bowles'
    }
  ]
</script>