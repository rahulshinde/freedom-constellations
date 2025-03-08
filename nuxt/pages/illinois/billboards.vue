<template>
  <main>
    <BlockProjectHeader
      class="relative z-20"
      title="Illinois"
      backLink="/illinois"
      subtitle="Abolitionist Billboards"
      location="Chicago, Illinois"
      introText="The billboards created in Chicago were a result of a series of workshops that held space for young people with vast perspectives. The Circles and Ciphers team worked to write a song about a future where No Black Kids are in Prison. From their lyrics they pulled lines for billboard messaging. The Final Five team collaborated on poetry with their organizers and also held a workshop inside a local detention center so their billboards carry perspectives from youth in the community and young people who are currently locked up."
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
        before:content-[''] before:absolute before:w-full before:h-[30svh] before:bg-gradient-to-b to-black from-black-trans before:-top-[30svh] before:left-0 before:z-0
      "
    > 
      <BlockImageFullWidthSlideshow
        class="mt-8"
        :images="[
          {
            src: '/illinois/billboards/NKIPChicagoBillboards37.jpg',
          },
          {
            src: '/illinois/billboards/NKIPChicagoBillboards3.jpg',
          },
          {
            src: '/illinois/billboards/NKIPChicagoBillboards12.jpg',
          },
          {
            src: '/illinois/billboards/NKIPChicagoBillboards4.jpg',
          },
          {
            src: '/illinois/billboards/NKIPChicagoBillboards16.jpg',
          },
          {
            src: '/illinois/billboards/NKIPChicagoBillboards22.jpg',
          },
          {
            src: '/illinois/billboards/NKIPChicagoBillboards34.jpg',
          },
          {
            src: '/illinois/billboards/NKIPChicagoBillboards8.jpg',
          },
          {
            src: '/illinois/billboards/NKIPChicagoBillboards28.jpg',
          }
        ]"
      />
      <BlockTextBody
        text="Youth shared that they wanted the billboards to convey power, motivation, and a feeling of bold imagination and joy. They wanted to be represented in ways that express their passion, determination and that they deserve a seat at the table. They were hoping to see youth playing, broken chains, sun and POC being happy. 

The Performing Statistics team facilitated a series of workshops that allowed organizers to share their ideas with artists and give them feedback on the direction of their designs. Using input from the young people, the artists created ten billboard designs that were featured throughout Chicago and in Springfield where legislators are making decisions about youth freedom in IL. "
      />

      <BlockImageFullWidthSlideshow
          class="mt-8"
          :images="[
            {
              src: '/illinois/billboards/NKIPChicagoBillboards1.jpg',
            },
            {
              src:'/illinois/billboards/IMG_6570.jpg'
            },
            {
              src: '/illinois/billboards/PSSpringfieldbillboard2.jpg',
            },
          ]"
        />
      <BlockTextHeading
        text="Credits"
      />
      <BlockCredits
          :credits="credits"
      />
      <BlockTextHeading text="More from Illinois"/>
      <BlockProjectFooterLinks
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
      title: "Cultural Organizing Institute",
      link: "/illinois/coi",
      img: "/illinois/index/IL_Snackbags.jpg",
      color: "var(--programs)"
    }
  ]

  const credits = [
    {
      title: 'The Final Five Campaign billboard Artists',
      text: 'Monica Trinidad\nTracie Ching\nCaitlin Blunnie\nNicole Marriquin\nNoa Denmon'
    },
    {
      title: 'Circles and Ciphers billboard Artists',
      text: 'Killjoy\nYoung Mer\nCori Lin\nKah Kangni'
    },
    {
      title: 'Circles & Ciphers',
      text: 'MARKO STAT$, Pressure Baby R, Yung CJ, Sky Ford, Kofie Diamonds'
    },
    {
      title: 'The Final Five Campaign',
      text: 'Jay Krause'
    },
    {
      title: 'Poetry featured on billboards',
      text: 'Through a series of workshops youth in lock-up and youth leaders in the Final Five campaign wrote about a future world where all youth are free, safe and thriving. Their writing was combined together to create a collective poem that imagined that future.'
    },
    {
      title: 'Photograph Portraits for artist reference',
      text: 'Mark Strandquist in collaboration with The Final Five Campaign and Circles & Ciphers'
    },
    {
      title: 'Chicago Billboard documentation',
      text: 'Mark Strandquist'
    },
    {
      title: 'Springfield Billboard documentation',
      text: 'Zach Adams'
    }
  ]
</script>