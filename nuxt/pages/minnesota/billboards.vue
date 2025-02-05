<template>
  <main>
    <BlockProjectHeader
      class="relative z-20"
      title="Minnesota"
      backLink="/minnesota"
      subtitle="Billboards: Transforming advertising space into visions of a youth driven future"
      location="Minneapolis-Saint Paul"
      introText="After seeing the billboards and banners in Philadelphia, the youth leaders from the End Youth Prisons MN campaign got to work writing poetry and developing messaging. Each young person worked 1:1 with Mark Strandquist to create portraits that capture the attention of viewers and emphasize the power of their campaign vision. Next, in collaboration with local and national artists,  they art directed compositions that illustrated a Minnesota that affirms both youth dreams and leadership."
      date="January 2023"
      :onThisPage="[
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
        :images="slideshow"
      />

      <BlockTextBody
        text="During the #NoKidsInPrison exhibition, billboards and banners stretched across the Twin Cities infusing youth created abolitionist messaging into the cityscape. The presence of the art launched conversations about ending youth incarceration and drove people to the exhibition for even deeper learning and imagining.

These beautiful collaborative designs were also printed on large banners and installed in locations across the city, helping to make these future dreams a reality! Huge thanks to our partners for hosting these beautiful banners (Legal Rights Center and Springboard for the Arts).        "
      />

      <BlockImageWithPullQuote
        class="mt-8"
        img="/minnesota/billboards/MNBillboards31.jpg"
        quote="Often times we say youth are the future but I don’t agree with that. … They are ‘the now!’"
        attribution="Lupita Herrera"
        color="var(--billboards)"
      />

      <BlockTextHeading
        text="Credits"
      />

      <BlockCredits
        :credits="credits"
      />

      <BlockTextHeading
        text="More from Minnesota"
      />
      <BlockProjectFooterLinks
        :links="footerLinks"
      />
    </section>
  </main>
</template>

<script setup>

  const footerLinks = [
    {
      title: "A Massive Interactive Exhibit",
      link: "/minnesota/nkip",
      img: "/minnesota/index/MN_NKIP.jpg",
      color: "var(--nkip)"
    },
    {
      title: "Guerilla Public Projections",
      link: "/minnesota/guerilla-projections",
      img: "/minnesota/index/MN_Projections.jpg",
      color: "var(--projects)"
    },
    {
      title: "Cultural Organizing Projects",
      link: "/minnesota/coi",
      img: "/minnesota/index/MN_COI.jpg",
      color: "var(--programs)"
    }
  ]


  const slideshow = [
    {
      src: '/minnesota/billboards/MNBillboards6.jpg',
      caption: ''
    },
    {
      src: '/minnesota/billboards/MNBillboards7.jpg',
      caption: ''
    },
    {
      src: '/minnesota/billboards/MNBillboards11.jpg',
      caption: ''
    },
    {
      src: '/minnesota/billboards/MNBillboards15.jpg',
      caption: ''
    },
    {
      src: '/minnesota/billboards/MNBillboards21.jpg',
      caption: ''
    },
    {
      src: '/minnesota/billboards/MNBillboards23.jpg',
      caption: ''
    },
    {
      src: '/minnesota/billboards/MNBillboards24.jpg',
      caption: ''
    },
    {
      src: '/minnesota/billboards/MNBillboards30.jpg',
      caption: ''
    },
    {
      src: '/minnesota/billboards/MNBillboards29.jpg',
      caption: ''
    },
    {
      src: '/minnesota/billboards/MNBillboards32.jpg',
      caption: ''
    }
  ]

  const credits = [
    {
      title: 'Billboard/banner artists',
      text: "Amir Khadar, Philadelphia\nShyama Kuver (Heart Over Crown), DC\nKatie Kaplan, Philadelphia\nandres guzman, Minneapolis\nJackie Fawne, New York\nMyc Daz, Minneapolis\nHawwa Youngmark, Minneapolis\nSharita Towne, Portland\nJennifer White Johnson, Baltimore"
    },
    {
      title: 'Billboard workshop participants',
      text: 'Adia, Marrea, Dallas, Sreeja, Tyshawn, Aaliyah, Gabe, Myleeyah, Mira, Johnny'
    }
  ]
</script>