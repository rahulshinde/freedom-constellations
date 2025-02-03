<template>
  <main>
    <BlockProjectHeader
      class="relative z-20"
      title="New Jersey"
      backLink="/new-jersey"
      subtitle="Abolitionist Billboards & Banners"
      location="Camden, New Jersey"
      introText="A goal of Performing Statistics has always been to support campaigns to think big about the many ways to disseminate their messaging into spaces that target strategic audiences. Our project took place when many discussions were happening in the highest offices of state government about the needs of youth in New Jersey.  With a shift in commitment of the governor's office from saying they would close the youth prisons to recommending that they build three more; one very important set of perspectives was missing, the young people impacted by these decisions. Using banners and billboards, the youth leaders decided to take up space making it impossible for their target audiences to miss their message."
      date=""
    />
    <section>
      <section 
      class="
        bg-black relative z-10 pb-16
        before:content-[''] before:absolute before:w-full before:h-[30svh] before:bg-gradient-to-b to-black from-black-trans before:-top-[30svh] before:left-0 before:z-0"
      >
      <BlockImageFullWidthSlideshow
        class='mt-8'
        :images="[
          {
            src: '/new-jersey/billboards/RachelAlban_pesmurals-03.jpg',
          },
          {
            src: '/new-jersey/billboards/RachelAlban_pesmurals-07.jpg',
          },
          {
            src: '/new-jersey/billboards/RachelAlban_pesmurals-05.jpg',
          },
          {
            src: '/new-jersey/billboards/ArtInstall-128.jpg',
          },
        ]"
      />
        <BlockTextBody text="After the campaign completed a series of posters interdesign Collective featuring their messaging. "/>
        <BlockTextBulletList
          :list="[
            'Put Youth in Power Not Prison',
            'Fund the Future',
            'Uncuff the Future',
            'Healing Not Harm',
            'Destroy Detainment'
          ]"
        />
        <BlockTextWithQuote
          text="Next, the New Jersey team collaborated with Performing Statistics to design giant banners and billboards that went up in strategic public spaces ensuring they reached important audiences. In Newark, Semaj and Samiyah are featured on massive banners covering the wall of Project Empty Space that faces city hall. In Camden Tamia’s billboard took up a huge rooftop spot in a neighborhood where the campaign was growing momentum of youth engagement. During the #NoKidsInPrison exhibition, near a bridge leading to Philly and along a busy throughway, Chigozie, Eva, Ha, Alicia and Carmi captivated huge billboards featuring their abolitionist messaging and drove people to the exhibition. Simultaneously, Alicia, Tamia and Semaj were featured on a billboard on the road leading to the largest youth prison in New Jersey. Yes! Every person driving to work to participate in incarcerating youth, and every family going to visit their incarcerated loved one, all passed by a beautiful billboard of the organizers with the message “Put Youth in Power, Not Prison.”"
          quote="Semaj: I want the people who work at that facility to have a conversation with themselves when they go past the billboard…i want them to ask themselves , “Why do I work here? What can I do to help these young people get away from the system and be who they want to be.”"
        />
        <BlockTextHeading
          text="Credits"
        />
        <BlockCredits :credits="credits"/>

        <BlockTextHeading
          text="More from New Jersey"
        />
        <BlockProjectFooterLinks
          :links="footerLinks"
        />
      </section>
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
      title: "Massive Wheat Paste Mural",
      link: "/new-jersey/mural",
      img: "/new-jersey/index/NJ_Mural.jpg",
      color: "var(--programs)"
    }
  ]

  const credits = [
    {
      title: 'Camden photoshoots photographer',
      text: 'Mark Strandquist'
    },
    {
      title: 'Camden photoshoots makeup artist',
      text: 'Casandra Dominguez'
    },
    {
      title: 'Banner & billboard design',
      text: 'Kate DeCiccio in collaboration with Youth4Justice NJ'
    },
    {
      title: 'Organizers featured on billboards',
      text: 'Alicia Garcia-Rivas, Tamia Hudson, Carmi Jackson, Chigozie Ekeabu, Ha Nguyen, Eva Boucher, Semaj Roberts'
    },
    {
      title: 'Community Partners',
      text: 'Rebecca Jampol, Project for Empty Space, Shaneka Boucher, Social Responsibility Through Me'
    },
    {
      title: 'Banner Installation at Project For Empty Space',
      text: 'Randy Haze & Luis Lopez'
    },
    {
      title: 'Newark banner at Project For Empty Space documentation photographers',
      text: 'Rachel Fawn & Becca Guzzo'
    },
    {
      title: 'Organizers featured on Newark banners',
      text: 'Semaj Roberts, Samiyah Webster'
    },
    {
      title: 'Organizer featured on Spring Hill Arts Gathering banner',
      text: 'Tamia Hudson'
    },
    {
      title: 'Workshop/Site partners',
      text: 'Camden Free Writers, Heart of Camden, Camden Library'
    },
    {
      title: 'Billboard documentation/Videographer',
      text: 'Wren Rene'
    }
  ]
</script>