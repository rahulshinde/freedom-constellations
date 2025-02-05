<template>
  <main>
    <BlockProjectHeader
      class="relative z-20"
      title="Minnesota"
      backLink="/minnesota"
      subtitle="#NoKidsInPrison, Twin Cities"
      location="Black Youth Healing Arts Center"
      introText="Organized in collaboration with End Youth Prisons MN, the exhibition filled the gymnasium at the Black Youth Healing Arts Center and premiered interactive sculptures and infographics created by local artists and youth organizers about youth incarceration in Minnesota."
      date="September 29 - October 8th, 2023"
      :onThisPage="[
        ['Target Surveillance Sculpture', 'target'],
        ['Youth designed Infographics', 'infographics'],
        ['Poetry from a Free Future', 'future-audio'],
        ['Programming Builds Community Power', 'programming']
      ]"
    />  

    <section
      class="
        bg-black relative z-10 pb-16
        before:content-[''] before:absolute before:w-full before:h-[30svh] before:bg-gradient-to-b to-black from-black-trans before:-top-[30svh] before:left-0 before:z-0
      "
    >

      <BlockImageFullWidthSlideshow
        class="mt-16"
        :images="slideshow"
      />

      <BlockProjectNav
        title="Minnesota"
        backLink="/minnesota"
        :onThisPage="[
          ['Target Surveillance Sculpture', 'target'],
          ['Youth designed Infographics', 'infographics'],
          ['Poetry from a Free Future', 'future-audio'],
          ['Programming Builds Community Power', 'programming']
        ]"
      />

      <BlockTextBody
        text="This interactive exhibition took viewers on an immersive journey from the history of youth incarceration, to the present-day impact on youth and their families, and ended in a future space world where all youth are free. Thousands of viewers engaged with immersive virtual reality, music by youth and and eight years of art made in collaboration with youth leaders nationwide."
      />

      <BlockTextPullQuote
        text="My hope for the future would be for youth to just be able to be youth and experience an actual a childhood where they are not adultified and they are not being incarcerated and they are able to go to school and be accepted and wanted and experience a future that they deserve."
        attribution="Sreeja, Youth Organizer Legal Rights Center"
        color="var(--nkip)"
      />

      <BlockTextHeading
        class="mt-16 scroll-mt-[11rem]"
        text="Target Surveillance Sculpture"
        id="target"
      />

      <div class="mx-4 mt-8 mb-8">
        <div class="flex justify-between">
          <img
            class="w-2/5 mr-4 h-[30vw] mx-4 object-cover"
            src="/minnesota/nkip/target/NKIPMN12.jpg"
          >
          <img
            class="w-1/5 object-cover mx-4 h-[30vw]"
            src="/minnesota/nkip/target/NKIPMN8.jpg"
          >
          <img
            class="w-2/5 object-cover mx-4 h-[30vw]"
            src="/minnesota/nkip/target/NKIPMN15.jpg"
          >
        </div>
      </div>

      <BlockTextBody
        text="Youth Organizers in MN lifted up that a significant part of the culture of over policing in the Twin Cities has been a result of excessive surveillance led by the superstore giant Target which is based in MN. Nearly every young person on the EYP team had a personal experience about being watched or followed while at Target. They wanted to create a piece lifting up the impact normalized surveillance has had on thousands of youth in Minneapolis. It was important to the young people that the art educated the public about the history of the Downtown100, a list of youth kept by Downtown Improvement District, a private police force funded by Target. The list largely targeted homeless young people who would spend time in the downtown area and served as an excuse for police to harass young people, pushing many of them into the system which impacts them to this day. 

In partnership with local journalist, Marjaan Sirdar we worked to illustrate how Target’s development of private surveillance and forensic systems have caused harm to young people in MN and beyond as they share their technology with police departments across the country.        "
      />
      
      <BlockTextPullQuote
        class="mt-16"
        text="100 different people that want us to keep quiet/they better listen/cause we gone go hard until they can see the picture/let's make a difference /what's our position/i bet they can never stop this 100 man resistance"
        attribution="lyrics from “Keep It 1hunnit”"
        color="var(--nkip)"
      />

      <BlockTextBody
        text="In EYP’s research about the history of the DT100, they found a song to make the sculpture even more powerful. “Keep it 100”  is a song written and produced by some of the young people who were on the DT100 list about their experiences. 

The idea was to play with Target’s retail imagery, create graphic t-shirts that show the true impact of Target on young people in MN along with their connection to private and local police."
      />

      <BlockAudio
        title="Use the player below to hear that poem and step into the future we all deserve."
        cover="/minnesota/nkip/target/NKIPMN7.jpg"
        src="/minnesota/nkip/target/KeepIt1hunnit.mp3"
      />

      <BlockTextHeading
        class="mt-16 scroll-mt-[11rem]"
        text="Youth designed Infographics"
        id="infographics"
      />


      <div class="mx-4 mt-8">
        <div class="flex justify-between mx-col1 px-8">
          <img
            class="w-1/3 mx-4 h-[35vw] object-cover"
            src="/minnesota/nkip/infographic/NKIPMN27.jpg"
          >
          <img
            class="w-2/3 object-cover mx-4 h-[35vw]"
            src="/minnesota/nkip/infographic/NKIPMN29.jpg"
          >
        </div>
      </div>

      <BlockTextBody
        text="The youth leaders at End Youth Prisons MN worked with performing Statistics to create a series of infographics illustrating the intersections of Indigenous youth experiences and the criminal legal system in Minnesota and the disproportionate rates of suspension and expulsion of Black students across the state."
      />

      <div class="mx-4 mt-8">
        <div class="flex mx-col1 px-8 justify-between">
          <img
            class="w-1/4 mx-4 h-[35vw] object-cover"
            src="/minnesota/nkip/infographic/MNDallasInfographic.jpg"
          >
          <img
            class="w-2/4 object-cover mx-4 h-[35vw]"
            src="/minnesota/nkip/infographic/MNMakingMap.jpg"
          >
          <img
            class="w-1/4 object-cover mx-4 h-[35vw]"
            src="/minnesota/nkip/infographic/MNTyshawnInfographic2.jpg"
          >
        </div>
      </div>

      <BlockTextHeading
        class="mt-16 scroll-mt-[11rem]"
        text="Poetry from a Free Future"
        id="future-audio"
      />

      <BlockTextBody
        text="Youth leaders from the End Youth Prisons MN campaign worked with Performing Statistics to co-write a poem that imagined a future where all youth are free, safe, and thriving. As NKIP viewers walked through the future section of the exhibit they moved between the beautiful silk portraits of youth leaders while the poem played from a speaker.

The poem was co-created with youth leaders in the No Youth Prisons MN campaign."
      />

      <BlockAudio
        title="Listen to the poem below"
        cover="/minnesota/nkip/future-audio/NKIPMN23.jpg"
        src="/minnesota/nkip/future-audio/No_Youth_Prisons_MN.mp3"
      />

      <BlockTextHeading
        text="Programming Builds Community Power"
        id="programming"
      />
      <BlockImageFullWidthSlideshow
        class="mt-16"
        :images="programmingSlideshow"
      />
      <BlockTextBody
        text="With input from the End Youth Prisons Mn campaign, #NoKidsInPrison in the Twin Cities had a series of programming events that were creative, impactful and centered multi-dimensional youth power. 

Highlights included screen printing by Nico Sardina and Abolitionist swag making with Amir Khadar. The youth leaders organized a Youth Ball hosted by Vogue Down MPLS, who taught attendees about the radical history of ballroom as a space for queer youth liberation.

Markevius from Rumble Boxing got everyone moving during the final weekend and the The Minnesota Coalition for Youth Justice held an intergenerational circle to close the week."
      />

      <BlockTextHeading
        text="Media Coverage"
      />

      <div class="flex mt-8">
        <div class="mx-col3 px-10 flex">
          <BlockLinkImage
            image="/minnesota/nkip/press/unnamed-2048x1365.jpg"
            text="Black Youth Arts Center celebrates opening of prison reform art exhibit"
            source="Minnesota Reformer"
            link="https://minnesotareformer.com/2023/10/05/black-youth-arts-center-celebrates-opening-of-prison-reform-art-exhibit/"
            color="var(--nkip)"
            class="mx-4 w-col6"
          />
          <BlockLinkImage
            image="/minnesota/nkip/press/No-Kids-In-Prison-Exhibit-Opening-2048x1152.jpg"
            text="#NoKidsInPrison Art Installation Highlights Youth Incarceration Driven By Target"
            source="Unicorn Riot"
            link="https://unicornriot.ninja/2023/nokidsinprison-art-installation-highlights-youth-incarceration-driven-by-target/"
            color="var(--nkip)"
            class="mx-4 w-col6"
          />
        </div>
      </div>

      <div class="relative">
        <BlockTextHeading
          text="Credits"
        />

        <BlockCredits
            text="#NKIP Exhibition Credits"
            :credits="credits" 
        />

        <BlockCredits
          title="Target Credits"
          :credits="targetCredits" 
      />

        <BlockCredits
          title="Infographics Credits"
          :credits="infographicCredits"
      />

        <BlockCredits
            title="Future Audio Credits"
            :credits="futureAudioCredits"
        />
        
        <img class="absolute z-[-1] -top-[15vw] w-[18vw] left-[15vw]" src="/zine-assets/planet3.png" />
        <img class="absolute z-[-1] -bottom-[2vw] w-[14vw] left-[40vw]" src="/zine-assets/zine-assets_0002_Layer-12.png" />
        <img class="absolute z-[-1] -top-[5vw] w-[12vw] -rotate-90 right-[4vw]" src="/zine-assets/zine-assets_0000_Layer-14.png" />
        <img class="absolute z-[-1] top-[30vw] w-[14vw] right-[10vw]" src="/zine-assets/zine-assets_0017_Layer-1.png" />
        <img class="absolute z-[-1] bottom-[35vw] w-[18vw] left-[0vw]" src="/zine-assets/bluecrown2.png" />
      </div>

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
    },
    {
      title: "Cultural Organizing Projects",
      link: "/minnesota/cultural-organizing",
      img: "/minnesota/index/MN_COI.jpg",
      color: "var(--programs)"
    }
  ]

  const slideshow = [
    {
      src: '/minnesota/nkip/slideshow/NKIPMN1.jpg',
      caption: ''
    },
    {
      src: '/minnesota/nkip/slideshow/NKIPMN2.jpg',
      caption: ''
    },
    {
      src: '/minnesota/nkip/slideshow/NKIPMN4.jpg',
      caption: ''
    },
    {
      src: '/minnesota/nkip/slideshow/NKIPMNpeople9.jpg',
      caption: ''
    },
    {
      src: '/minnesota/nkip/slideshow/NKIPMN6.jpg',
      caption: ''
    },
    {
      src: '/minnesota/nkip/slideshow/NKIPMN10.jpg',
      caption: ''
    },
    {
      src: '/minnesota/nkip/slideshow/NKIPMN11.jpg',
      caption: ''
    },
    {
      src: '/minnesota/nkip/slideshow/NKIPMN13.jpg',
      caption: ''
    },
    {
      src: '/minnesota/nkip/slideshow/NKIPMN15.jpg',
      caption: ''
    }
  ]

  const programmingSlideshow = [
    {
      src: '/minnesota/nkip/programming/MNVogue.jpg',
      caption: ''
    },
    {
      src: '/minnesota/nkip/programming/MNVogue2.jpg',
      caption: ''
    },
    {
      src: '/minnesota/nkip/programming/MNVogue3.jpg',
      caption: ''
    },
    {
      src: '/minnesota/nkip/programming/NKIPMNpeople6.jpg',
      caption: ''
    },
    {
      src: '/minnesota/nkip/programming/NKIPMNpeople10.jpg',
      caption: ''
    },
    {
      src: '/minnesota/nkip/programming/NKIPMNpeople11.jpg',
      caption: ''
    }
  ]

  const targetCredits = [
    {
      title: '“Keep it 100” song',
      text:'Crescent Moon, DeAundre Dent and Ace.'
    },
    {
      title: 'Research',
      text:'Targeted: How America’s Retail Darling Drives Youth Incarceration in Minneapolis By Marjaan Sirdar, Based on Unicorn Riot’s Investigative Series: 21st Century Jim Crow in the North Star City'
    },
    {
      title: 'T-shirt design',
      text:'Noah Lawrence-Holder'
    },
    {
      title: 'T-shirt screen-printing',
      text: 'Nico Sardinia'
    },
    {
      title: 'Project management',
      text: 'CRICE'
    }
  ]

  const infographicCredits = [
    {
      title: 'Racial bias infographics',
      text: 'a collaboration between End Youth Prisons MN and Performing Statistics'
    },
    {
      title: 'Bloom Beyond Boundaries',
      text: 'Dallas Downey'
    }
  ]

  const futureAudioCredits = [
    {
      title:'Workshop facilitation',
      text:'Mark Strandquist and Kate DeCiccio with support of Caelyn Steele and Lupita Herrera'
    },
    {
      title: 'Recording & Editing',
      text: 'Katharine DeCelle'
    },
    {
      title: 'Youth leaders who co-wrote the poem',
      text: 'Adia, Marrea, Dallas, Sreeja, Safa, Tyshawn, Aaliyah, Gabe, Myleeyah, Mira and Nadia'
    },
    {
      title: 'Voices in recording',
      text: 'Aaliyah, Dallas, Sreeja, Tyshawn, Gabe, Adia, Lupita, Michael, Myleeyah, Marrea'
    }
  ]

  const carCredits = [
    {
      title: 'Carjacking Counter Narratives Installation ',
      text: 'End Youth Prisons MN in collaboration with Performing Statistics'
    },
    {
      title: 'Interviews',
      text: 'Patience Zalanga, Caelyn Steele'
    },
    {
      title: 'Editing',
      text: 'Patience Zalanga'
    },
    {
      title: 'Matchbox Mobile',
      text: 'CRICE, Nick Popovici'
    },
    {
      title: 'Carseat booth production',
      text: '360 Property Solutions'
    }
  ]

  const credits = [
    {
      title: 'Community Partners',
      text: 'Legal Rights Center, End Youth Prisons MN'
    },
    {
      title: 'Campaign Lead',
      text: 'End Youth Prisons MN: Caelyn Steele'
    },
    {
      title: 'Community Strategy Program Director',
      text: 'Lupita Herrera'
    },
    {
      title: 'Production Manager',
      text: 'Con Rice'
    },
    {
      title: 'Installation Team',
      text: '360 Property Solution, Blocktoblock contractors, Property Guardians, Nick Popovici, Courtney Bowles'
    },
    {
      title: 'Site Manager',
      text: 'Takayla Lynne, Black Youth Healing Arts Center'
    },
    {
      title: 'Youth Docents from End Youth Prisons MN',
      text: 'Adia, Marrea, Dallas, Sreeja, Tyshawn, Aaliyah, Gabe, Myleeyah, Mira, Johnny'
    },
    {
      title: 'Zine design',
      text: 'Jason Killinger'
    },
    {
      title: 'Zine Cover art',
      text: 'Amarie Baker in collaboration with youth leaders at End Youth Prisons MN'
    }
  ]
</script>