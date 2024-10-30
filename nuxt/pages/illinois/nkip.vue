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
        ['Programming', 'programming'],
        ['Data', 'data'],
        ['Credits', 'credits']
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

      <BlockTextHeading
          text="Data"
      />

      <BlockTextBulletList
          :list="[
            'Transforming viewers perspectives…nearly 66% of viewers said that, after viewing the exhibit, they were committed to ending youth incarceration',
            'People who came saw a personal connection…nearly 70% of viewers have a loved one who is/was incarcerated',
            'Youth voices mattered the most…out of everything people saw and experienced in the NKIP exhibition, 55% of viewers said hearing from youth was what impacted them the most',
            'The exhibit was able to reach young people….85% of attendees were 18 - 35 years old ',
          ]"
      />

      <BlockTextHeading
          text="Credits"
      />

      <BlockCredits
          title="Youth Art"
          :credits = credits
      />

      <BlockCredits
          title="SkyART‘s Just-Us Program"
          :credits = skyart
      />

      <BlockCredits
          title="Programming Coordination & Curation"
          :credits = programmingCoordination
      />
      <BlockCredits
          title="Programming"
          :credits = programming
      />
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
      title: "Abolitionist Billboards",
      link: "/illinois/billboards",
      img: "/illinois/index/IL_Billboards.jpg",
      color: "var(--billboards)"
    },
    {
      title: "Cultural Organizing Institute",
      link: "/illinois/coi",
      img: "/illinois/index/IL_Snackbags.jpg",
      color: "var(--programs)"
    }
  ]

  const credits = [
    {
      title: 'Final 5',
      text: 'audio interviews and letters  from inside, collaboration with youth at local lock-up facility'
    },
    {
      title: 'Site Coordinator',
      text: 'AnnMarie Brown, Alicia Brown, Sheriff Polk'
    },
    {
      title: 'Youth Docents',
      text: 'CJ Paris (aka CJ)\nWilliam Adebayo\nSky Ford\nHernan\nDestiny\nMalika'
    },
    {
      title: 'Local Artists',
      text: 'Qyjon the Icon, Emma McKee aka The Stitch Gawd'
    }
  ]

  const skyart = [
    {
      title: 'Project Impact Clinical Interns',
      text: 'Lauren Appelson, Zoe Friedland, Esther Han, Rachel Kaufman, Shea Love, Dalila Perez'
    },
    {
      title: 'Project Impact therapist',
      text: 'Ashley Williams'
    },
    {
      title: 'Local Org Partners',
      text: 'Trap House Chicago, Crime Drought, Sky Arts'
    },
    {
      title: 'Site Support',
      text: 'Christian Ortiz, David Weinberg'
    },
    {
      title: 'Screenprinting',
      text: 'Hoofprint\nScout Cartenga\nChema'
    },
  ]

  const programmingCoordination = [
    {
      title: 'Healthy Hood',
      text: 'Tanya Lozano, Allen Washington, Joline Lozano'
    },
    {
      title: 'The Final Five Campaign',
      text: 'Alicia Brown, Nicole Negrete, Ja’Vaune Jackson, Destiny Bell, Malika Anthony, Sherrif Polk'
    }
  ]

  const programming = [
    {
      title: 'Features',
      text: 'Circles and Ciphers\nThe Gr8Thinkaz\nThe Chicago Coalition for Intercommunalism\nChicago Liberation Center\nParty for Socialism and Liberation\nPalestinian Assembly for Liberation\nBella Bahhs\nLaila Zayed\nNino Brown\nOmar Younes\nLilla Sol'
    },
    {
      title: 'Youth Performers',
      text: 'Kofie Kportufe (aka Kofie Diamonds)\nRonald Pierce (aka Cmthr23)\nCJ Paris (aka CJ)\nCarris Jones-James (aka CJ)\nJuan Cannon\nMichael Adebayo (aka Marko Stat$)\nPrecious Atwood (aka Pressure)\nKuumbalynx'
    },
    {
      title: 'Local Artists',
      text: 'Qyjon the Icon\nEmma McKee aka The Stitch Gawd'
    },
    {
      title: 'Local Org Partners',
      text: 'Trap House Chicago, Crime Drought\nViet Coffee\nZealous'
    }
  ]
</script>