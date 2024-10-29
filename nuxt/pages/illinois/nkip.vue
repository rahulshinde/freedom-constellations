<template>
  <main>
    <BlockProjectHeader
      class="relative z-20"
      title="Illinois"
      backLink="/illinois"
      subtitle="No Kids in Prison Exhibition"
      location="Chicago, Illinois"
      introText="Organized by Performing Statistics, #NoKidsInPrison Chicago featured collaborations with The Final 5 campaign and Circles and Ciphers. The exhibition immersed viewers into interactive installations about the history of youth incarceration, the state of youth incarceration today and what is needed to build a world where all youth are free. Youth voices from local incarcerated young people were included through an audio collaboration between Final Five and youth inside. SkyArts contributed paintings created by local incarcerated youth. Circles and Ciphers created a music video to drop their new song, “No Kids In Prison” a ballad that illustrates a prison free Chicago that centers youth leadership."
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
      <BlockImageFullWidthSlideshow
        class="mt-8"
        :images="[
          {
            src: '/illinois/nkip/NKIPChicago1.jpg',
          },
          {
            src: '/illinois/nkip/NKIPChicago3.jpg',
          },
          {
            src: '/illinois/nkip/NKIPChicago4.jpg',
          },
          {
            src: '/illinois/nkip/NKIPChicago8.jpg',
          },
          {
            src: '/illinois/nkip/NKIPChicago9.jpg',
          },
          {
            src: '/illinois/nkip/NKIPChicago10.jpg',
          },
          {
            src: '/illinois/nkip/NKIPChicago11.jpg',
          },
          {
            src: '/illinois/nkip/NKIPChicago12.jpg',
          },
          {
            src: '/illinois/nkip/NKIPChicago13.jpg',
          },
          {
            src: '/illinois/nkip/NKIPChicago14.jpg',
          }
        ]"
      />
      <BlockTextBody 
        text="Filled with virtual reality, interactive art installations, and eight years of art made in collaboration with youth leaders nationwide, the exhibition engaged thousands of viewers and helped support local campaigns to keep youth free.
      
Healthy Hood curated a robust set of programs open to the public and Final Five hosted multiple organizing events for youth." 
      />

      <BlockTextHeading
          text="Programming"
      />
      <BlockTextBody 
          text="Healthy Hood led by Tanya Lozano and Allen Washington led the programming schedule in Chicago. NoKidsInPrison Chicago featured ongoing abolitionist swag making with local screen printers combined with powerful panels and inspirational performances curated by Healthy Hood in collaboration with The Final Five Campaign and Circles and Ciphers.
          
Highlights from Chicago programming included:"
      />

      <BlockTextBulletList
          :list="[
            'The War on Children Panel, a conversation about the intersections between militarization and the experiences of youth in Gaza and the systemic criminalization of young people in the US.',
            'Circles and Ciphers performances and music video drop!',
            'The gr8 Cypher, led by TheGr8Thinkaz, a completely youth centered cipher designer to affirm the brilliance of young poets, rappers & Mcs.',
            'Youth in Power, youth summit led by The Final 5 campaign, an event designed to welcome youth organizers to the movement to close youth prisons.',
            'Onna Way Back resource guide drop by Final 5! This interactive workshop led by formerly incarcerated youth was a book release for their re-entry toolkit, a multi year project designing a guide with everything a young person needs when they return home.',
            'Meditation for the Abolitionist led by Tanya Lozana, ended the exhibition with the regrounding we all needed. This beautiful guided meditation held a room full of organizers and candles in love, abundance and affirmational power.'
          ]"
      />

      <BlockImageGallery
          :images="[
            '/illinois/nkip/programming/NKIPmedianarrativepanel1.jpg',
            '/illinois/nkip/programming/NKIPmedianarrativepanel5.jpg'
          ]"
          caption='The War on Children Panel'
      />

      <BlockImageFullWidthSlideshow
          class="mt-8"
          :images="[
            {
              src: '/illinois/nkip/programming/Finalfiveprogramming1.jpg',
              caption: 'Youth in Power, youth summit led by The Final 5 campaign'
            },
            {
              src: '/illinois/nkip/programming/Finalfiveprogramming4.jpg'
            },
            {
              src: '/illinois/nkip/programming/Finalfiveprogramming8.jpg'
            },
            {
              src: '/illinois/nkip/programming/Finalfiveprogramming9.jpg'
            }
          ]"
      />
    </section>
  </main>
</template>

<script setup>
</script>