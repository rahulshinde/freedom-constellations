<template>
  <main>
    <BlockProjectHeader
      class="relative z-20"
      title="New Jersey"
      backLink="/new-jersey"
      subtitle="Powerful posters featuring the strength of youth leadership!"
      location="Camden & Newark, New Jersey"
      introText="We know that young people hold the vision and perspectives that are critical to building a prison free world. Our work demanding the end of youth incarceration requires that we also develop blueprints that map us toward a reality that centers healing, care, and education. The New Jersey team worked with interDesign Collective to create posters illustrating their vision of what youth need to thrive and stay free.

Once the New Jersey Team completed the jumpsuit fabrication it was time to use them to create powerful materials they could strategically use to promote the demands of their campaign and engage more youth organizers. Creating a series of posters became an opportunity to talk about how youth feel when they are supported and what it looks like to inspire base building using portraits of confident youth leaders in abolitionist jumpsuits that feature values and calls to action."
      date=""
    />

    <section 
      class="
        bg-black relative z-10 pb-16
        before:content-[''] before:absolute before:w-full before:h-[20svh] before:bg-gradient-to-b to-black"
    >
       <BlockTextBody
        text="To create the posters, each young person chose a message to be featured with their portrait."
      />
      <BlockTextBulletList
        :list="[
          'Put Youth In Power Not Prison',
          'Fund the Future',
          'Uncuff the Future',
          'Healing Not Harm',
          'Destroy Detainment'
        ]"
      />

      <BlockTextBody 
        text="They worked with Performing to design poses and group formations that expressed power, unity and confidence. With the designers from interDesign Collective, they developed a vision of a futuristic galaxy where the values of youth leaders are celebrated and young people are centered as visionaries of liberation."
      />
      <BlockTextHeading
        text="Credits"
      />
      <BlockCredits
        :credits="credits"
      />
    </section>
  </main>
</template>

<script setup> 
  const credits = [
    {
      title: 'Workshop facilitation',
      text: 'Kate DeCiccio'
    },
    {
      title: 'Poster Design',
      text: 'Youth 4 Justice NJ in collaboration with interDesign Collective, Rebecca Jampol, Project for Empty Space'
    },
    {
      title: 'Newark/Camnden photoshoots photographer',
      text: 'Mark Strandquist'
    },
    {
      title: 'Camden photoshoots makeup artist',
      text: 'Casandra Dominguez'
    },
    {
      title: 'Community Partners',
      text: 'Rebecca Jampol, Project for Empty Space'
    },
    {
      title: 'Workshop/Site Partners',
      text: 'Heart of Camden, Project for Empty Space'
    }
  ]
</script>