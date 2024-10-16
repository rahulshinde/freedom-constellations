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
        before:content-[''] before:absolute before:w-full before:h-[20svh] before:bg-gradient-to-b to-black from-black-trans before:-top-[20svh] before:left-0 before:z-0
      "
    >

      <BlockTextBody
        text="During the #NoKidsInPrison exhibition, billboards and banners stretched across the Twin Cities infusing youth created abolitionist messaging into the cityscape. The presence of the art launched conversations about ending youth incarceration and drove people to the exhibition for even deeper learning and imagining."
      />

      <BlockTextHeading
        text="Buildings transformed into megaphones for the dreams of youth!:"
      />

      <BlockTextBody
        text="These beautiful collaborative designs were also printed on large banners and installed in locations across the city, helping to make these future dreams a reality! Huge thanks to our partners for hosting these beautiful banners (Legal Rights Center and Springboard for the Arts)."
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
      title: 'Billboard/banner artists',
      text: "Amir Khadar, Philadelphia\nShyama Kuver (Heart Over Crown), DC\nKatie Kaplan, Philadelphia\nandres guzman, Minneapolis\nJackie Fawne, New York\nMyc Daz, Minneapolis\nHawwa Youngmark, Minneapolis\nSharita Towne, Portland\nJennifer White Johnson, Baltimore"
    },
    {
      title: 'Billboard workshop participants',
      text: 'Adia, Marrea, Dallas, Sreeja, Tyshawn, Aaliyah, Gabe, Myleeyah, Mira, Johnny'
    }
  ]
</script>