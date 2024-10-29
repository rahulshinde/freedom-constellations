<template>
  <main>
    <BlockProjectHeader
      class="relative z-20"
      title="Illinois"
      backLink="/illinois"
      subtitle="Cultural Organizing Institute"
      location="Chicago, Illinois"
      introText=""
      date=""
      :onThisPage="[
      ]"
    />
    <section 
      class="
        bg-black relative z-10 pb-16
        before:content-[''] before:absolute before:w-full before:h-[20svh] before:bg-gradient-to-b to-black from-black-trans before:-top-[20svh] before:left-0 before:z-0
      "
    > 
      <BlockTextHeading text="Circles and Ciphers Music Video" />
      <BlockVideo
        class="mt-8"
        video="https://player.vimeo.com/progressive_redirect/playback/1024480139/rendition/720p/file.mp4?loc=external&signature=b20bcf1cf9b4c7c0e00dab196e4cfc1223569e00e065d20c93649659a9848ac1"
        poster="/illinois/coi/circles_and_ciphers_poster.jpg"
      />
      <BlockTextBody
      text="From Circles and Ciphers: 
      
“In collaboration with Performing Statistics, we believed it would be really powerful to show a world where black kids from Chicago reclaimed their own narrative and showed what black leadership could like from an abolitionist framework. This music video was deeply important to us..from AnnMarie tailoring all of the suits the young men wore to Marko working with our young people on their verses..we saw this as a chance to pay homage to Hip Hop as a vessel of storytelling and movement work. Making the video did not come without its bouts but we made it through and we're deeply appreciative of the whole experience! We hope this video will continue to spread hope and positivity all across the globe. From Chi-town to da world!”"
      />
      <BlockTextHeading text="Circles and Ciphers Snack Bags" />
      <BlockImageFullWidthSlideshow
        class="mt-8"
        :images="[
          {
            src: '/illinois/coi/FreeDaHomiesBags7.jpg',
          },
          {
            src: '/illinois/coi/FreeDaHomiesBags5.jpg',
          },
          {
            src: '/illinois/coi/FreeDaHomiesBags4.jpg',
          }
        ]"
      />
      <BlockTextBody
        text="When we asked Circles and Ciphers about sites in Chicago they wanted to activate we heard, “Could we play with a chip bag? Corner stores are so central to neighborhood activity across the city.” 

It was a moment of huge inspiration and we all got to work to bring it to life!

What could it look like to play with packaging and create chip bags that could hold abolitionist dreams inside and out?!?! 

The Circles team worked with their youth leaders to create poetic content. They explored questions like, “What are the ingredients of liberation?” “What does it look like when youth receive all they need to be free?” “What should we call this abolitionist snack?”

Special shout out to artist Keshun who designed the Free Da Homie text!"
      />

      <BlockImageHalfWidth
        class="mt-8"
        img="/illinois/coi/FreeDaHomiesBags4.jpg"
        />

        <BlockTextBody
        text="Performing Statistics worked to integrate content from Circles and Ciphers, portraits of  Circles and Ciphers youth leaders and watercolor backgrounds and shapes to create the packaging designs. 

Circles and Ciphers team decided to fill the bag with Chicago abolitionist love including cards featuring abolitionist leaders throughout history, friendship bracelets, stickers, Frooties and Super Donuts. Performing Statistics added pins, stickers and patches. Healthy Hood added cards featuring questions from Crime Drought conversations! The Final Five Campaign added information about how to support young people when they return home after incarceration. 

When it was time to stuff bags, Healthy Hood jumped in to support! Together with rotating teams from Final Five, Circles and Ciphers and Performing Statistic, we stuffed hundreds of Free Da Homies bags that we gave away over the course of the month #NoKidsInPrison was in Chicago."
      />

      <BlockTextHeading text="Final Five Audio Installation"/>
      
      <BlockTextHeading text="Credits"/>
      <BlockCredits 
        title="Music Video"
        :credits="musicCredits" />
      <BlockCredits 
        title="Snack Bags"
        :credits="chipCredits" />

      <BlockProjectFooterLinks
          heading="More from Illinois"
          :links="footerLinks"
      />
    </section>
  </main>
</template>

<script setup>
  const footerLinks = [
    {
      title: "No Kids In Prison Exhibition",
      link: "/illinois/nkip",
      img: "/illinois/index/IL_NKIP.jpg",
      color: "var(--nkip)"
    },
    {
      title: "Abolitionist Billboards",
      link: "/illinois/billboards",
      img: "/illinois/index/IL_Billboards.jpg",
      color: "var(--billboards)"
    }
  ]

  const musicCredits = [
    {
      title: 'Song production',
      text: 'Aced Spade, Juan Cannon'
    },
    {
      title: 'Video Direction and Photos',
      text: 'Paul Elliot'
    },
    {
      title: 'Performers',
      text: 'Ronald Pierce, Michael Kportufe, CJ, Pressure, Michael Adebayo, Skye, Aced Spade'
    },
    {
      title: 'Fashion direction',
      text: 'AnnMarie Brown '
    },
    {
      title: 'Additional support',
      text: 'Kheshun Johnson\nAkeem Soyan'
    }
  ]
  const chipCredits = [
    {
      title: 'Concept and Abolitionist Nutritional Facts',
      text: 'Circles and Ciphers team: Ronald Pierce, Michael Kportufe, Kheshun Johnson, Cassius Batts, Akeem Soyan, & AnnMarie Brown'
    },
    {
      title: 'Portraits of youth leaders',
      text: 'Mark Strandquist in collaboration with Circles and Ciphers'
    },
    {
      title: 'Watercolor backgrounds and shapes',
      text: 'Kah Yangni & Kate DeCiccio'
    },
    {
      title: '‘Free Da Homie$’ text design',
      text: 'Kheshun Johnson'
    },
    {
      title: 'Chip bag printing and donation',
      text: 'Epac Flexibles'
    },
    {
      title: 'Display Painting',
      text: 'Kate DeCiccio'
    },
    {
      title: 'Chip bag contents',
      text: 'Circles and Ciphers, Performing Statistics, The Final Five Campaign, Crime Drought'
    },
    {
      title: 'Bag packing',
      text: 'Circles and Ciphers, Healthy Hood, Performing Statistics'
    }
  ]
</script>