<template>
  <main>
    <BlockProjectHeader
      class="relative z-20"
      title="Pennsylvania"
      backLink="/pennsylvania"
      subtitle="Billboards: Transforming advertising space into visions of a more free future"
      location="Philadelphia, PA"
      introText="Can art create a map toward a more free future? Freedom Constellations worked with local youth leaders to use multiple forms of public art to guide us toward that just vision."
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
        class="mt-8"
        :images="[
          {
            'src': '/pennsylvania/billboards/2022-076FreedomConstellationsBillboards-2.jpg'
          },
          {
            'src': '/pennsylvania/billboards/2022-076FreedomConstellationsBillboards-7.jpg'
          },
          {
            'src': '/pennsylvania/billboards/2022-076FreedomConstellationsBillboards-10.jpg'
          },
          {
            'src': '/pennsylvania/billboards/2022-076FreedomConstellationsBillboards-17.jpg'
          },
          {
            'src': '/pennsylvania/billboards/2022-076FreedomConstellationsBillboards-19.jpg'
          },
          {
            'src': '/pennsylvania/billboards/2022-076FreedomConstellationsBillboards-24.jpg'
          }
        ]"
      />
      
      <BlockTextBody
          text="Working with over dozens of youth leaders, and an array of community partners, the project illustrated what that future would look, sound, and feel like while naming the changes youth leaders came up with to achieve that more just future. To create the final designs, youth leaders shared their portraits and poetry with an incredible group of local and national artists. Artists worked with the youth through zoom calls and in-person workshops to co-design the billboard. Each billboard represented a theme that youth leaders identified as a building block toward a future where all youth are safe, free, and healed. 15 billboards were printed and installed across the city sharing these future dreams with tens of thousands of viewers."
      />
      <BlockTextHeading
          text="Buildings transformed into megaphones for the dreams of youth!"
      />
      <BlockTextBody
          text="These beautiful collaborative designs were also printed on large banners and installed in locations across the city, helping to make these future dreams a reality! Huge thanks to our partners for hosting these beautiful banners; The Village of Arts and Humanities, Cherry St Pier, and Eastern State Penitentiary."
      />
    </section>
  </main>
</template>

<script setup>
</script>