<template>
  <main>
    <BlockProjectHeader
      class="relative z-20"
      title="Pennsylvania"
      backLink="/pennsylvania"
      subtitle="Cultural Organizing Institute"
      location="Philadelphia, PA."
      introText="Care Not Control is a statewide coalition of young people and organizers working to close youth prisons in Pennsylvania. Youth from across the state meet monthly to inform the vision and strategy for the campaign. A group of youth leaders from the Care Not Control coalition worked together to create a cultural organizing project to support their broader organizing throughout the state."
      date=""
      :onThisPage="[
        ['Exhibition Data', 'data'],
        ['Programming', 'programming']
      ]"
    />

    <section 
      class="
        bg-black relative z-10 pb-16
        before:content-[''] before:absolute before:w-full before:h-[30svh] before:bg-gradient-to-b to-black from-black-trans before:-top-[30svh] before:left-0 before:z-0
      "
    >
      <BlockFullBleed
        class="mt-16"
        :cover="true"
        video="https://player.vimeo.com/progressive_redirect/playback/1027747781/rendition/1080p/file.mp4?loc=external&signature=e69dca889dc573a9dcddebfd344a3680ab15402068daf5e6d91ba5b8575d70d3"
      />

      <BlockTextBody
        text="The goals of the strategy for the CNC organizers were:"
      />

      <BlockTextBulletList
        :list="[
          'Create a spectacle so whether Care Not Control is at a press conference or performing their album, they look like a coordinated team with clear visible messaging about what they represent and their demands.',
          'The art must carry Care Not Control messaging and be able to be rolled out in many different locations.',
          'Assets created can be used in future creative workshops with more young people. Care Not Control identified creative activity as one way that new organizers enjoy coming together. They wanted the designs they created to be able to be used to make more powerful swag with new campaign members.'
        ]"
      />

      <BlockImageHalfWidth
        class="mt-8"
        img="/pennsylvania/coi/construction/CNC_COI_9_small.jpg"
      />

      <BlockTextBody
        text="The group decided that jackets and a series of beautiful signage would successfully meet their goals.

From the Care Not Control Principles, a set of concrete demands to support young people to keep them free, we worked together to create a visual language that the organizers felt represents the spirit of liberation they are working to create. From being cuffed, to having fingerprints taken, they lifted up how much hands are involved through the process of being arrested and booked. The group decided they wanted part of the imagery to express taking back these violations, “Let’s take our fingerprints back!” The team landed on stars, megaphones, people power fists & fingerprints, broken chains, keys and arrows to use to begin to build their spectacle.

Performing Statistics presented 3 directions alongside possible ways to alter each garment.  
“Which garment best tells your story?”"
      />

      <BlockTextBullet
        title="The Denim Jacket"
        text="An American classic to take hold of your moment in history."
      />
      <BlockTextBullet
        title="The Flight/Bomber Jacket"
        text="A  symbol of flight and subversive change-making to steer us toward a new reality."
      />
      <BlockTextBullet
        title="Construction/Workwear"
        text="Garments that signal construction to flag you’re building a new future?"
      />

      <BlockTextBody
        text="The majority of the team decided to work with bomber jackets and two people chose denim jackets. Their thinking was that they could represent present day ambassadors who were supporting to lead toward the more futuristic vision of their peers."
      />

      <BlockImageHalfWidth
        img="/pennsylvania/coi/construction/COIpublicworkshops3.jpg"
      />

      <BlockTextBody
        text="Once PS had all of this information, we presented the creative brief to Amir Khadar and Katie Kaplan. Amir and Katie ran with the ideas and worked through how to engineer all of the ideas into signage and assets for altering bomber jackets that the organizers could work with to make a series of similar but individual jackets. Amir took the lead designing text, pins, patches, vinyl and the overall aesthetic vision. Katie worked on figuring out interesting signage possibilities and strategized some of the more technical textile components. CNC wanted to work with messaging that aligned with their current work getting 5 bills passed:"
      />

      <BlockTextBulletList
        :list="[
          'End Direct File',
          'End Fines & Fees',
          'Raise the Age'
        ]"
        :large="true"
      />

      <BlockTextBody
        text="Throughout the design process, Amir and Katie shared options for CNC to choose. Before sending anything to be fabricated, the entire team met and walked through each element of the plan. The organizers made decisions about color, vinyl textures, acrylic finish, and shapes. 

Once we had all of the materials and working assets ready, we held 2 workshops. Workshop 1 focused on designing the jackets."
      />

      <div class="mx-4 mt-8">
        <div class="flex justify-between mx-col1 px-8">
          <img
            class="w-1/3 mx-4 h-[15vw] object-cover"
            src="/pennsylvania/coi/ideation/CNC_COI_2_small.jpg"
          >
          <img
            class="w-1/3 object-cover mx-4 h-[15vw]"
            src="/pennsylvania/coi/ideation/CNC_COI_3.jpg"
          >
          <img
            class="w-1/3 object-cover mx-4 h-[15vw]"
            src="/pennsylvania/coi/ideation/CNC_COI_4_small.jpg"
          >
        </div>
      </div>

      <BlockTextBody
        text="Workshop 2 focused on signage and assembling the sculptural elements that carry messaging. After these two workshops, the Care Not Control team was confident in the process and how they wanted to see the assets used together. They were ready to use the assets to hold more workshops to engage more youth. When organizers from Chicago and Minneapolis came to Philly for the youth convening, the team facilitated a abolitionist tote making workshop where visiting organizers were able to play with all of the assets to make swag of their own."
      />

      <BlockImageFullWidthSlideshow
        :images="[
          {
            src: '/pennsylvania/coi/construction/COIpublicworkshops2.jpg',
          },
          {
            src: '/pennsylvania/coi/construction/COIpublicworkshops3.jpg',
          },
          {
            src: '/pennsylvania/coi/construction/COIpublicworkshops5.jpg',
          },
          {
            src: '/pennsylvania/coi/construction/COIpublicworkshops5.jpg',
          },
          {
            src: '/pennsylvania/coi/construction/COIpublicworkshops6.jpg',
          },
          {
            src: '/pennsylvania/coi/construction/20230322_144136.jpg',
          },
          {
            src: '/pennsylvania/coi/construction/COIpublicworkshops10.jpg',
          }
        ]"
      />

      <BlockImageAutoSlideshow
        class="!mt-16"
        :images="[
          '/pennsylvania/coi/pdfs/PHILLYCNC1.jpg',
          '/pennsylvania/coi/pdfs/PHILLYCNC2.jpg',
          '/pennsylvania/coi/pdfs/PHILLYCNC3.jpg',
          '/pennsylvania/coi/pdfs/PHILLYCNC4.jpg',
          '/pennsylvania/coi/pdfs/PHILLYCNC5.jpg',
        ]"
        heading="Download the full curriculum here"
        downloadLink="/pennsylvania/coi/pdfs/PHILLYCNC_Ideas.pdf"
        downloadText="Care Not Control, Cultural Strategy Project"
        color="var(--programs)"
      />


      <BlockTextHeading
        text="Credits"
      />
      <BlockCredits
        :credits="credits"
      />
      <BlockTextHeading
        text="More from Pennsylvania"/>
      <BlockProjectFooterLinks
        :links="footerLinks"
      />
    </section>
  </main>
</template>

<script setup>
  const footerLinks = [
    {
      title: 'A Massive Interactive Exhibit',
      link: "/pennsylvania/nkip",
      img: "/pennsylvania/index/PA_NKIP.jpg",
      color: "var(--nkip)"
    },
    {
      title: 'Augmented Reality Banners',
      link: "/pennsylvania/ar",
      img: "/pennsylvania/index/PA_AR.jpg",
      color: "var(--projects)"
    },
    {
      title: "Abolitionist Billboards",
      link: "/pennsylvania/billboards",
      img: "/pennsylvania/index/PA_Billboards.jpg",
      color: "var(--billboards)"
    },
  ]

  const credits = [
    {
      title: 'Care Not Control Organizers',
      text: 'Rodney, Anahi, Alex, Bre, Jahir'
    },
    {
      title: 'CNC campaign lead',
      text: 'Michaela Pommells'
    },
    {
      title: 'Partner Organizations',
      text: 'Care Not Control, Juvenile Law Center, Youth Arts and Self-Empowerment Project'
    },
    {
      title: 'Artists',
      text: 'Amir Khadar, Katie Kaplan'
    },
    {
      title: 'Vinyl cutting',
      text: 'Lena Kolb, Stick Em Up'
    },
    {
      title: 'Acrylic cutting',
      text: 'Steve Cambell at Tyler School of Art'
    },
    {
      title: 'Documentation',
      text: 'Mark Strandquist, Kate Deciccio, Wren Rene'
    },
    {
      title: 'Cultural Organizing Workshop facilitation',
      text: 'Kate DeCiccio'
    },
    {
      title: 'Workshop Location',
      text: 'The Cedarworks'
    }
  ]

</script>