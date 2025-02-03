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
        before:content-[''] before:absolute before:w-full before:h-[30svh] before:bg-gradient-to-b to-black from-black-trans before:-top-[30svh] before:left-0 before:z-0
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
          text="Working with dozens of youth, and an array of community partners, the project illustrated what that future would look, sound, and feel like while naming the changes youth leaders came up with to achieve that more just future. To create the final designs, youth leaders shared their portraits and poetry with an incredible group of local and national artists. Artists worked with the youth through zoom calls and in-person workshops to co-design the billboard. Each billboard represented a theme that youth leaders identified as a building block toward a future where all youth are safe, free, and healed. 15 billboards were printed and installed across the city sharing these future dreams with tens of thousands of viewers."
      />
      <BlockTextHeading
          text="Buildings transformed into megaphones for the dreams of youth!"
      />
      <BlockTextBody
          text="These beautiful collaborative designs were also printed on large banners and installed in locations across the city, helping to make these future dreams a reality! Huge thanks to our partners for hosting these beautiful banners; The Village of Arts and Humanities, Cherry St Pier, and Eastern State Penitentiary."
      />

      <BlockImageGallery
        class="mt-8"
        :images="[
          '/pennsylvania/billboards/PXL_20230525_141249677.jpg',
          '/pennsylvania/billboards/PXL_20230525_140907664.jpg'
        ]"
      />

      <BlockTextHeading
          text="Credits"
      />
      <BlockCredits
        :credits="credits"
      />
      <BlockTextHeading
          text="More from Pennsylvania"
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
      title: "Cultural Organizing Institute",
      link: "/pennsylvania/coi",
      img: "/pennsylvania/index/PA_COI.jpg",
      color: "var(--programs)"
    }
  ]

  const credits=[
    {
      title:'Billboard/banner artists',
      text: '<a href="https://www.amirkhadar.com/" target="_blank">Amir Khadar</a> (PHL), <span class="text-runde-xs">in collaboration with Mural Arts Philadelphia</span>\n<a href="https://joyland.space/" target="_blank">Killjoy</a> (TX), <span class="text-runde-xs">in collaboration with Juvenile Law Center</span>\n<a href="https://www.instagram.com/mz.icar/?hl=en" target="_blank">Mz. Icar</a> (PHL), <span class="text-runde-xs">in collaboration with Youth Arts and Self Empowerment Project</span>\n<a href="https://jasonkillinger.com/" target="_blank">Jason Killinger</a> (PHL), <span class="text-runde-xs">in collaboration with Care, Not Control</span>\n<a href="http://www.jessicasabogal.com/" target="_blank">Jess Sabogal</a> (CA), <span class="text-runde-xs">in collaboration with Care, Not Control</span>\n<a href="https://ashluka.com/" target="_blank">Ashley Lukashevsky</a> (CA), <span class="text-runde-xs">in collaboration with Care, Not Control</span>\n<a href="https://hankwillisthomas.com/" target="_blank">Hank Willis Thomas</a>, <span class="text-runde-xs">in collaboration with Mural Arts Philadelphia</span>\n<a href="https://nazeersabreestudios.com/" target="_blank">Nazeer Sabree</a> (PHL), <span class="text-runde-xs">in collaboration with Juvenile Law Center</span>\n<a href="https://www.kahyangni.com/" target="_blank">Kah Yangni</a> (PHL), <span class="text-runde-xs">in collaboration with Juvenile Law Center</span>'
    },
    {
      title: 'Billboard workshop participants',
      text: 'Duane, Rodney, Anahi, Alex, Bre, Jahir, Jared, Qilah, Tiguida, Rodney, Tasheema, and Jah'
    },
    {
      title: 'Billboard co-curation',
      text: 'Kah Yangni and Mark Stranquist'
    },
    {
      title: 'Design workshop co-facilitators',
      text: 'Kah Yangni, Kate DeCiccio, and Mark Strandquist'
    },
    {
      title: 'Mural Arts Philadelphia',
      text: 'Kali Silverman, Project Manager'
    },
    {
      title: 'Special thanks',
      text: 'Michaela Pommells, Marcia Hopkins, Cathy ____, Kade ____, Gabby (YASP), for their help with the youth workshop'
    }
  ]
</script>