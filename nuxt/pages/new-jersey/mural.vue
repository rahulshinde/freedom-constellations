<template>
  <main>
    <BlockProjectHeader
      class="relative z-20"
      title="New Jersey"
      backLink="/new-jersey"
      subtitle="Wheat Paste Mural: A mobile wheat paste mural featuring larger than life youth organizer icons!"
      location="Camden, New Jersey"
      introText="As cultural organizers working to reach broad audiences with imagery that affirms youth leadership, we’re always imagining how to access different spaces. With so many powerful portraits of the New Jersey team, the youth leaders were able to utilize several strategies to flood New Jersey with their vision of leadership. Organizers worked with Performing Statistics to cut out and paint huge wood cut outs and then wheatpaste giant print outs of their portraits onto the wood. The team held a photoshoot with the pieces in Camden and then they went on the road as part of #NoKidsInPrison."
      date="2022"
    />

    <section 
      class="
        bg-black relative z-10 pb-16
        before:content-[''] before:absolute before:w-full before:h-[30svh] before:bg-gradient-to-b to-black from-black-trans before:-top-[30svh] before:left-0 before:z-0"
    >
      <BlockImageFullWidthSlideshow
        :images="[
          {
            src: '/new-jersey/mural/Camden_WheatPaste_2.jpg'
          },
          {
            src: '/new-jersey/mural/Camden_WheatPaste_4.jpg'
          },
          {
            src: '/new-jersey/mural/Camden_WheatPaste_5.jpg'
          },
          {
            src: '/new-jersey/mural/Camden_WheatPaste_6.jpg'
          },
          {
            src: '/new-jersey/mural/Camden_WheatPaste_7.jpg'
          },
          {
            src: '/new-jersey/mural/Camden_WheatPaste_8.jpg'
          },
        ]"
      />
      <BlockTextBody
        text="The beauty of this strategy is that the pieces are sturdy, moveable and stand alone. They are bold gorgeous portraits when inside and tough enough to stand the weather when installed outside. With every iteration of a project, we are doing our best to teach young people about materials and skills that they can apply to future projects. The mobile wheat paste mural sculptures will be installed in Camden so they can continue to model youth leadership and add youth energy and power to wherever they live."
      />

      <div class="mx-8">
        <div class="flex mt-8 justify-between mx-col1">
          <img
            class="w-col6 mx-4 h-[25vw] object-cover"
            src="/new-jersey/mural/Camden_WheatPaste_9.jpg"
          >
          <img
            class="w-col6 object-cover mx-4 h-[25vw]"
            src="/new-jersey/mural/Camden_WheatPaste_10.jpg"
          >
        </div>
        <div class="flex mt-8 justify-between mx-col1">
          <img
            class="w-col6 mx-4 h-[25vw] object-cover"
            src="/new-jersey/mural/Camden_WheatPaste_11.jpg"
          >
          <img
            class="w-col6 object-cover mx-4 h-[25vw]"
            src="/new-jersey/mural/Camden_WheatPaste_12.jpg"
          >
        </div>
      </div>

      <BlockImageWithPullQuote
        class="!mt-16"
        img="/new-jersey/mural/Camden_WheatPaste_3.jpg"
        quote="When I put on the jumpsuit I feel like I inspire the world."
        attribution="Samiyah"
        color="var(--programs)"
      />
      <BlockTextHeading
        text="Credits"
      />
      <BlockCredits
        :credits="credits"
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
      title: "Cultural Organizing Institute",
      link: "/new-jersey/coi",
      img: "/new-jersey/index/NJ_COI.jpg",
      color: "var(--nkip)"
    }, 
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
    } 
  ]

  const credits = [
    {
      title: 'Workshop facilitation',
      text: 'Kate DeCiccio & Mark Strandquist'
    },
    {
      title: 'Newark team',
      text: 'Youth Leaders: Semaj Roberts, Samiyah Webster'
    },
    {
      title: 'Camden team',
      text: 'Youth leaders: Tamia Hudson, Alicia Garcia-Rivas, Chigozie'
    },
    {
      title: 'Youth Advocacy Coordinators',
      text: 'Emilie Stewart, Camden & Krystal Seruya, Newark'
    },
    {
      title: 'Documentation',
      text: 'Mark Strandquist'
    },
    {
      title: 'Workshop/Site partners',
      text: 'Camden Library'
    }
  ]

</script>