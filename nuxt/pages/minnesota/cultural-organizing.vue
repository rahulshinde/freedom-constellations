<template>
  <main>
    <BlockProjectHeader
      class="relative z-20"
      title="Minnesota"
      backLink="/minnesota"
      subtitle="Race Car Jacket Design"
      location="Minneapolis-Saint Paul"
      introText="When End Youth Prisons MN expressed interest in exploring carjacking counter narratives, they saw an opportunity to use the aesthetics and language of car racing to talk about centering youth leadership. In the face of excessive surveillance and local police who continue to violate orders not to chase people, the MN team designed race car jackets calling attention to what young people need to chase their dreams and not have to worry about being chased by police."
      date="January 2023"
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
        class="mt-16"
        :images="slideshow"
      />

      <BlockTextWithQuote
        quote="Youth leaders worked to create a visual language utilizing street signs and car racing aesthetics integrated with messaging that calls for a world where young people are in the driver's seat."
        text="Youth leaders from End Youth Prisons MN shared that car-jacking in the Twin Cities area has been used to spread criminalized narratives about young people. Despite rates of car-jacking actually going down, police high speed chases have caused a series of deaths in Minneapolis. As counter-narrative to city officials saying carjacking is a justification for the over-policing of young people, youth leaders decided to create a piece that unpacks the systemic failures that can push a young person to feel like they have to steal a car. Coming out of the uprisings in 2020, the Twin Cities saw school districts end contracts with police and community conversations that appeared to push for more accountable policing. The youth leaders at the End Youth Prisons campaign decided it was important to lift up the ways that despite momentum, carjacking is still being used to fuel criminalized narratives among people who mostly err on the side of community investment.

The End Youth Prisons campaign leaders covered their jackets in demands for a MN free of youth prisons. The team continues to wear the jackets at press conferences and community events as they call for elected officials to listen to youth perspectives and calls to action. 
"
      />

      <div class="mx-8 mt-16">
        <div class="flex items-stretch mx-col1">
          <img
            class="w-full object-cover ml-2 h-[35vw]"
            src="/minnesota/jackets/process/MNjacketideas.jpg"
          >
        </div>
        <div class="flex mt-4 justify-between mx-col1">
          <img
            class="w-1/2 mr-2 h-[30vw] object-cover"
            src="/minnesota/jackets/process/MNjacket.jpg"
          >
          <img class="w-1/4 ml-2 h-[30vw] mr-2 object-cover" src="/minnesota/jackets/process/MNjacketmaking.jpg">
          <img class="w-1/4 ml-2 h-[30vw] object-cover" src="/minnesota/jackets/process/MNpatches.jpg">
        </div>
      </div>

      <BlockTextHeading
        class="mt-8"
        text="Credits"
      />

      <BlockCredits
        :credits="credits"
      />

      <BlockProjectFooterLinks
        class="mt-16"
        heading="More from Minnesota"
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
      title: "Guerilla Public Projections",
      link: "/minnesota/guerilla-projections",
      img: "/minnesota/index/MN_Projections.jpg",
      color: "var(--projects)"
    }
  ]

  const slideshow = [
    {
      src: '/minnesota/jackets/leaders/MYJportraits20.jpg',
      caption: 'Test caption'
    },
    {
      src: '/minnesota/jackets/leaders/MYJportraits.jpg',
      caption: 'Test longer caption, Test longer caption Test longer caption,Test longer caption, Test longer caption Test longer caption'
    },
    {
      src: '/minnesota/jackets/leaders/MYJportraits4.jpg',
      caption: ''
    },
    {
      src: '/minnesota/jackets/leaders/MYJportraits12.jpg',
      caption: ''
    },
    {
      src: '/minnesota/jackets/leaders/MYJportraits19.jpg',
      caption: ''
    },
    {
      src: '/minnesota/jackets/leaders/MYJportraits17.jpg',
      caption: ''
    }
  ]

  const credits = [
    {
      title: 'Workshop facilitation',
      text: 'Kate DeCiccio with support of Caelyn Steele and Lupita Herrera, Michael Harrell, Nick Popovicci'
    },
    {
      title: 'Lead Artist',
      text: 'Amir Khadar'
    },
    {
      title: 'Youth leaders who co-designed jackets',
      text: 'Adia, Marrea, Dallas, Sreeja, Tyshawn, Aaliyah, Gabe, Myleeyah, Mira, Johnny'
    },
    {
      title: 'Vinyl cutting',
      text: 'Stick Em Up Philly'
    },
    {
      title: 'End Youth Prisons patches',
      text: 'Lars Adams'
    }
  ]
</script>