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
        before:content-[''] before:absolute before:w-full before:h-[20svh] before:bg-gradient-to-b to-black from-black-trans before:-top-[20svh] before:left-0 before:z-0
      "
    >
      <BlockFullBleed
        class="mt-16"
        video="https://player.vimeo.com/progressive_redirect/playback/1027747781/rendition/1080p/file.mp4?loc=external&signature=e69dca889dc573a9dcddebfd344a3680ab15402068daf5e6d91ba5b8575d70d3"
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