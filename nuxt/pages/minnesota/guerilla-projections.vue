<template>
  <main>
    <BlockProjectHeader
      class="relative z-20"
      title="Minnesota"
      backLink="/minnesota"
      subtitle="Guerilla Light: Illuminating the Night with Abolitionist Dreams"
      location="Minneapolis-Saint Paul"
      introText="The inspiration for this project came from the desire to push conversations around youth disenfranchisement and illuminate facts around Black and Indigenous youth incarceration."
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
      <BlockFullBleed
          class="mt-16"
          image="/minnesota/projections/MNProjections1.jpg"
        />

      <BlockTextWithQuote
        quote="As someone who comes from Minneapolis it was evident how youth of color are often not given resources to be successful."
        text="My artwork often fights against the criminalization of the Black identity and colonization, which has led me to work on projects centered on abolition.  With the arrival of Performing Statistics’ ‘No Kids In Prison’ show to the Twin Cities I was able to utilize my guerilla projecting experience to shed light on serious societal failings locally. The projections feature ancient symbols and imagery that is taken from the Black diaspora as well as statistics that highlight disparities within Minnesota schools.
        
The six locations that featured the projections were selected for their history of disenfranchisement and unjust policies towards youth of color. "
      />

      <BlockImageGallery
        :images="[
          '/minnesota/projections/MNProjections2.jpg',
          '/minnesota/projections/MNProjections3.jpg',
          '/minnesota/projections/MNProjections4.jpg',
          '/minnesota/projections/MNProjections5.jpg'
        ]"
      />

      <BlockTextBody
        text="The project’s statistics were provided through the collaboration and research of the Lupita Herrera, Community Strategy Program Director at Legal Rights Center and Caelyn Steele the Campaign Lead at End Youth Prisons MN. Additionally the two-day project was made possible with assistance from artists Ricki Williams and Sabrina Ford. Through direct action and art this project seeks to further proliferate the conversations around real justice and a free society for all."
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
      title: 'Billboards and Banners',
      link: "/minnesota/billboards",
      img: "/minnesota/index/MN_Billboards.jpg",
      color: "var(--billboards)"
    },
    {
      title: "Cultural Organizing Projects",
      link: "/minnesota/cultural-organizing",
      img: "/minnesota/index/MN_COI.jpg",
      color: "var(--programs)"
    }
  ]

  const credits = [
    {
      title: 'Lead Artist/Project text',
      text: 'Con Rice'
    },
    {
      title: 'Research and supporting collaboration',
      text: 'Lupita Herrera, Community Strategy Program Director at Legal Rights Center,  Caelyn Steele, Campaign Lead at End Youth Prisons MN'
    },
    {
      title: 'Projection collaboration and direction',
      text: 'Ricki Williams and Sabrina Ford'
    },
    {
      title: 'Documentation of projections',
      text: 'Mark Strandquist'
    }
  ]
</script>