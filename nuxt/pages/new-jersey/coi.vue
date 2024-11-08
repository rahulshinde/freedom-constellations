<template>
  <main>

    <BlockProjectHeader
      class="relative z-20"
      title="New Jersey"
      backLink="/new-jersey"
      subtitle="Cultural Organizing Institute: A jumpsuit take-back to show the world what abolitionist youth power is all about!"
      location="Newark & Camden, New Jersey"
      introText="The New Jersey cohort began their process as part of our Cultural Organizing Institute, developed in collaboration with Youth First as an effort to bring together campaigns to learn about creative strategy and cultural organizing during pandemic. Together with organizers from Connecticut and Maine, teams from Newark and Camden started their project through a series of virtual workshops."
      date="2020—2022"
    />

    <section 
      class="
        bg-black relative z-10 pb-16
        before:content-[''] before:absolute before:w-full before:h-[20svh] before:bg-gradient-to-b to-black from-black-trans before:-top-[20svh] before:left-0 before:z-0"
    >
      <BlockImageFullWidthSlideshow
        class='mt-8'
        :images="[
          {
            src: '/new-jersey/coi/NJ_BIllboardPhotos2.jpg',
          },
          {
            src: '/new-jersey/coi/NJ_PhotoShoot_24.jpg',
          },
          {
            src: '/new-jersey/coi/NJ_PhotoShoot_12_small.jpg',
          },
          {
            src: '/new-jersey/coi/2023CamdenPortraits.jpg',
          },
          {
            src: '/new-jersey/coi/Camden_WheatPaste_4.jpg',
          },
        ]"
      />
      <BlockTextBody
        text="While the governor of New Jersey was preparing to make recommendations to build 3 new youth prisons, spending over $600k per year on imprisoning each young person, the New Jersey cohort came together around a campaign illustrating youth leadership and power. The jumpsuit takeback project grew out of the messaging “Put Youth in Power not Prison.”  In a state where Black youth are 18x more likely to be incarcerated than their white peers, the team worked to create iconic images of BIPOC youth glowing with messaging and symbolism of their values and demands for NJ to invest in their dreams.  

Inspired by the iconography of The Black Panthers, Young Lords and Afro-futurism, the team settled on a color scheme that felt youthful, futurist and royal. They chose to play with crowns, butterflies and breaking chains. Nodding to the revolutionary history of the beret, they decided to nod to the lineage by including a graduation cap. The top line messaging that led this body of art included:"
      />
      <BlockTextBulletList
        :list="[
          'Put Youth in Power Not Prison',
          'Fund the Future',
          'Uncuff the Future',
          'Healing Not Harm',
          'Destroy Detainment'
        ]"
      />

      <BlockTextHeading
        text="Check out the curriculum here"
      />
        
      <div class="flex mt-8">
        <div class="mx-col3 px-10 flex">
          <BlockPdfDownload
            text="Inspiration Slideshow for jumpsuits"
            filePath="/new-jersey/coi/pdfs/NJConceptExamples"
            color="var(--nkip)"
            class="mx-4 w-col6"
          />
          <BlockPdfDownload
            text="Iconography of power concept development"
            filePath="/new-jersey/coi/pdfs/Iconography&Power"
            color="var(--nkip)"
            class="mx-4 w-col6"
          />
        </div>
      </div>

      <BlockImageAutoSlideshow
        :images="[
          '/new-jersey/coi/pdfs/NJJumpsuitCOIproject.jpg',
          '/new-jersey/coi/pdfs/NJJumpsuitCOIproject2.jpg',
          '/new-jersey/coi/pdfs/NJJumpsuitCOIproject3.jpg',
          '/new-jersey/coi/pdfs/NJJumpsuitCOIproject4.jpg',
          '/new-jersey/coi/pdfs/NJJumpsuitCOIproject5.jpg',
        ]"
        downloadLink="/new-jersey/coi/pdfs/NJJumpsuitCOIproject.pdf"
        downloadText="Download Abolitionists Jumpsuits New Jersey Youth 4 Justice"
        color="var(--nkip)"
      />
      
      <BlockTextBody
        text="Once the jumpsuits and caps were created, Performing Statistics and Project for Empty Space facilitated photoshoots with organizers wearing the garments in Newark and Camden. Portraits of the organizers were collaged into posters, banners and billboard designs. Giant banners were printed and hung in downtown Newark. During the #NoKidsInPrison exhibit in neighboring Philadelphia, billboards filled the streets of Camden. The woodcut sculptures are slated to be installed at a local organization in Camden. Art went up on the only billboard on the way to the largest youth prison in New Jersey, making sure that everyone driving there had to hear the demand of these youth leaders, “Put Youth in Power, Not Prison!"
      />

      <div class="mx-8">
        <div class="flex mt-8 justify-between mx-col1">
          <img
            class="w-col4 mx-4 h-[35vw] object-cover"
            src="/new-jersey/coi/process/20210912_110409.jpg"
          >
          <img
            class="w-col4 object-cover mx-4 h-[35vw]"
            src="/new-jersey/coi/process/20210912_143909.jpg"
          >
          <img
            class="w-col4 object-cover mx-4 h-[35vw]"
            src="/new-jersey/coi/process/20210912_144234.jpg"
          >
        </div>
        <div class="flex mt-8 justify-between mx-col1">
          <img
            class="w-col4 mx-4 h-[35vw] object-cover"
            src="/new-jersey/coi/process/20210912_155431.jpg"
          >
          <img
            class="w-col4 object-cover mx-4 h-[35vw]"
            src="/new-jersey/coi/process/20210912_161525.jpg"
          >
          <img
            class="w-col4 object-cover mx-4 h-[35vw]"
            src="/new-jersey/coi/process/njgradcapdesign.jpg"
          >
        </div>
      </div>
      
      <BlockTextBody text="Check out each project section to see and learn more about the posters, billboards, banners and woodcuts created centering the youth wearing their abolitionist  jumpsuits."/>

      <BlockTextHeading
        text="Credits"
      />
      <BlockCredits
        :credits="credits"
      />
      <BlockCredits
        title="Youth 4 Justice NJ: Newark"
        :credits="youthForJusticeNewark"
      />
      <BlockCredits
      title="Youth 4 Justice NJ: Camden"
        :credits="youthForJusticeCamden"
      />

      <BlockTextHeading
        text="More from New Jersey"
      />
      <BlockProjectFooterLinks
        :links='footerLinks'
      />
    </section> 
  </main>  
</template>

<script setup>
  const footerLinks = [
    {
      title: "Posters",
      link: "/new-jersey/posters",
      img: "/new-jersey/index/NJ_Poster.jpg",
      color: "var(--projects)"
    }, 
    {
      title: "Abolitionist Billboards & Banners",
      link: "/new-jersey/billboards",
      img: "/new-jersey/index/NJ_Billboards.jpg",
      color: "var(--billboards)"
    },
    {
      title: "Massive Wheat Paste Mural",
      link: "/new-jersey/mural",
      img: "/new-jersey/index/NJ_Mural.jpg",
      color: "var(--programs)"
    }
  ]

  const youthForJusticeCamden = [
    {
      title: 'Youth leaders',
      text: 'Alicia Garcia-Rivas, Tamia Hudson'
    },
    {
      title: 'Youth Advocacy Coordinator',
      text: 'Emilie Stewart'
    }
  ]

  const youthForJusticeNewark = [
    {
      title: 'Youth leaders',
      text: 'Semaj Roberts, Samiyah Webster'
    },
    {
      title: 'Youth Advocacy Coordinator',
      text: 'Krystal Seruya'
    }
  ]

  const credits = [
    {
      title: 'Community Partners',
      text: 'The NJ Institute for Social Justice\nRetha Onitiri, Community Engagement Director'
    },
    {
      title: 'Workshop facilitation',
      text: 'Kate DeCiccio with support from Mark Strandquist'
    },
    {
      title: 'Project management',
      text: 'Rebecca Jampol, Project for Empty Space'
    },
    {
      title: 'Jumpsuit, cap & pin design, poster design',
      text: 'Interdesign Collective:\nJan Kathleen, Luis Reyes, Maria Ismail, and Michael Oliphan'
    },
    {
      title: 'Screen printing support',
      text: 'Angela Pilgrim'
    },
    {
      title: 'Vinyl application support',
      text: 'Marylin Rini, Kebin Robin'
    },
    {
      title: 'Vinyl cutting',
      text: 'Stick Em Up'
    },
    {
      title: 'Laser cutting',
      text: 'Express Newark'
    },
    {
      title: 'Newark photoshoot makeup artist',
      text: 'Alicia Mitchel'
    },
    {
      title: 'Photographers',
      text: 'Mark Strandquist, Rachel Fawn'
    },
    {
      title: 'Videographer',
      text: 'Wren Rene'
    }
  ]


</script>