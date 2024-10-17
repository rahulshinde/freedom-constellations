<template>
  <main>
    <BlockProjectHeader
      class="relative z-20"
      title="Minnesota"
      backLink="/minnesota"
      subtitle="#NoKidsInPrison, Twin Cities"
      location="Black Youth Healing Center"
      introText="Organized by Performing Statistics in collaboration with End Youth Prisons MN, this interactive exhibition took viewers on an immersive journey from the history of youth incarceration, to the present-day impact on youth and their families, and ended in a future space world where all youth are free. The exhibition filled the gymnasium at Black Youth Healing Arts Center and premiered interactive sculptures and infographics created by local artists and youth organizers about the state of youth incarceration in Minnesota. Thousands of viewers engaged with immersive virtual reality, music by youth and and eight years of art made in collaboration with youth leaders nationwide."
      date="September 29 - October 8th, 2023"
      :onThisPage="[
        ['Target', 'target'],
        ['Infographics', 'infographics'],
        ['Future Audio', 'future-audio'],
        ['Car Jacking Installation', 'car-jacking-installation']
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

      <BlockTextHeading
        class="mt-16"
        text="Target"
        id="target"
      />

      <BlockTextBody
        text="Youth Organizers in MN lifted up that a significant part of the culture of over policing in the Twin Cities has been a result of excessive surveillance led by the superstore giant Target which is based in MN. Nearly every young person on the EYP team had a personal experience about being watched or followed while at Target. They wanted to create a piece lifting up the impact normalized surveillance has had on thousands of youth in Minneapolis. It was important to the young people that the art educated the public about the history of the Downtown100, a list of youth kept by Downtown Improvement District, a private police funded by Target. The list largely targeted homeless young people who would spend time in the downtown area and served as an excuse for police to harass young people, pushing many of them into the system which impacts them to this day. "
      />
      
      <BlockImageWithPullQuote
        class="mt-16"
        img="/minnesota/nkip/target/NKIPMN12.jpg"
        quote="In partnership with local journalist, Marjaan Sirdar we worked to illustrate how Target’s development of private surveillance and forensic systems have caused harm to young people in MN and beyond as they share their technology with police departments across the country."
      />

      <BlockTextBody
        text="In EYP’s research about the history of the DT100, they found a song to make the sculpture even more powerful. “Keep it 100”  is a song written and produced by some of the young people who were on the DT100 list about their experiences. 

The idea was to play with Target’s retail imagery, create graphic t-shirts that show the true impact of Target on young people in MN along with their connection to private and local police."
      />

      <audio
        class="video-js vjs-default-skin"
        ref="audioPlayer"
      >
        <source
          src="/minnesota/nkip/target/KeepIt1hunnit.mp3"
          type='audio/mp3'
        >

      </audio>

      <BlockCredits
          title="Target Credits"
          :credits="targetCredits" 
      />

      <BlockTextHeading
        class="mt-16"
        text="Infographics"
        id="infographics"
      />


      <div class="mx-8">
        <div class="flex mt-16 justify-between mx-col1">
          <img
            class="w-1/3 mr-2 h-[35vw] object-cover"
            src="/minnesota/nkip/infographic/NKIPMN27.jpg"
          >
          <img
            class="w-2/3 object-cover ml-2 h-[35vw]"
            src="/minnesota/nkip/infographic/NKIPMN29.jpg"
          >
        </div>
      </div>

      <BlockTextBody
        text="The youth leaders at End Youth Prisons MN worked with performing Statistics to create a series of infographics illustrating the intersections of Indigenous youth experiences and the criminal legal system in Minnesota and the disproportionate rates of suspension and expulsion of Black students across the state."
      />

      <div class="mx-8">
        <div class="flex mt-16 justify-between mx-col1">
          <img
            class="w-1/4 mr-2 h-[35vw] object-cover"
            src="/minnesota/nkip/infographic/MNDallasInfographic.jpg"
          >
          <img
            class="w-2/4 object-cover ml-2 mr-2 h-[35vw]"
            src="/minnesota/nkip/infographic/MNMakingMap.jpg"
          >
          <img
            class="w-1/4 object-cover ml-2 h-[35vw]"
            src="/minnesota/nkip/infographic/MNTyshawnInfographic2.jpg"
          >
        </div>
      </div>

      <BlockCredits
          title="Infographics Credits"
          :credits="infographicCredits"
      />

      <BlockTextHeading
        class="mt-16"
        text="Future Audio"
        id="future-audio"
      />

      <BlockTextBody
        text="Youth leaders from the End Youth Prisons MN campaign worked with Performing Statistics to co-write a poem that imagined a future where all youth are free, safe, and thriving. As NKIP viewers walked through the future section of the exhibit they moved between the beautiful silk portraits of youth leaders while the poem played from a speaker.

The poem was co-created with youth leaders in the No Youth Prisons MN campaign."
      />

      <BlockCredits
          title="Future Audio Credits"
          :credits="futureAudioCredits"
      />

      <BlockTextHeading
        class="mt-16"
        text="Car Jacking Installation"
        id="car-jacking-installation"
      />

      <BlockTextBody
        text="Youth leaders from End Youth Prisons MN shared that car-jacking in the Twin Cities area has been used to spread criminalized narratives about young people. Despite rates of car-jacking actually going down, police high speed chases have caused a series of deaths in Minneapolis. As counter-narrative to city officials saying carjacking is a justification for the over-policing of young people, youth leaders decided to create a piece that unpacks the systemic failures that can push a young person to feel like they have to steal a car. The piece features interviews with youth about car theft and how to support youth in ways that are preventative."
      />

      <BlockCredits
        title="Car Jacking Installation Credits"
        :credits="carCredits"
      />


      <BlockCredits
          title="Exhibition Credits"
          :credits="credits" 
      />

    </section>
  </main>
</template>

<script setup>

  import videojs from "video.js";

  const audioPlayer = ref(null);
  import 'video.js/dist/video-js.css'

  onMounted(() => {
    const player = videojs(audioPlayer.value, {
      autoplay: false,
      controls: true,
    }, function onPlayerReady() {
      console.log('Player is ready!');
    });
  });

  const slideshow = [
    {
      src: '/minnesota/nkip/slideshow/NKIPMN2.jpg',
      caption: ''
    },
    {
      src: '/minnesota/nkip/slideshow/NKIPMN4.jpg',
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