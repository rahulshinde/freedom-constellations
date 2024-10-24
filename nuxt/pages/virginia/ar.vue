<template>
  <main>
    <BlockProjectHeader
      class="relative z-20"
      title="Virginia"
      backLink="/virginia"
      subtitle="Transforming Richmond’s City Hall into a Megaphone for the Dreams of Youth"
      location="City Hall, Richmond, VA"
      introText="The central star of Virginia’s Freedom Constellations campaign were 2 monumental banners on the sides of Richmond’s City Hall building.
  
The banners, which could be seen from miles away, included an interactive augmented reality experience that brought the banners to life through new storytelling technology. As viewers held their phones up to the portraits, animations played in the clouds above city hall that visualized the dreams and demands of youth leaders for a world where all youth are free, thriving and safe."
      date=""
      :onThisPage="[
      ]"
    />

    <section 
      class="
        bg-black relative z-10 pb-16
        before:content-[''] before:absolute before:w-full before:h-[20svh] before:bg-gradient-to-b to-black from-black-trans before:-top-[20svh] before:left-0 before:z-0"
    >
      <BlockImageFullWidthSlideshow
        class="mt-8"
        :images="[
          {
            'src': '/virginia/ar/intro/FC_CityHall2.jpg'
          },
          {
            'src': '/virginia/ar/intro/CityHall_unveiling_5small.jpg'
          },
          {
            'src': '/virginia/ar/intro/CityHall_unveiling_9_small.jpg'
          },
          {
            'src': '/virginia/ar/intro/CityHall_2.jpg'
          },
          {
            'src': '/virginia/ar/intro/CityHall_3.jpg'
          }
        ]"
      />
      <BlockTextBody
        text="Performing Statistics Creative Director Mark Strandquist collaborated with Ta’Dreama McBride and Clyde Walker, youth leaders in Richmond from <a href='https://www.riseforyouth.org/' target='_blank'>RISE for Youth</a>, to create the two, 160 ft Tall monumental portraits that covered the sides of Richmond City Hall."
      />

      <div class="mx-8">
        <div class="flex mt-8 justify-between mx-col1">
          <img
            class="w-1/5 mr-4 h-[35vw] object-cover"
            src="/virginia/ar/intro/Iyana_Storyboard.jpg"
          >
          <img
            class="w-4/5 object-cover ml-4 h-[35vw]"
            src="/virginia/ar/intro/TaDreama_Storyboard.jpg"
          >
        </div>
      </div>

      <BlockTextBody
        text="“I see money that would have been going toward putting youth in cages that is now being put into the school system, into jobs, into support for kids. We can love ourselves. We can shape our future. We can finally heal. We are together. We are safe. We are free.” These words, which were read as narration for the AR animations, illustrated a collective poem co-created by youth organizers from RISE for Youth and Performing Statistics in Richmond, as well as dozens of youth organizers from across the country."
      />

      <BlockFullBleed
        video="https://player.vimeo.com/progressive_redirect/playback/1022999696/rendition/720p/file.mp4?loc=external&signature=a06103b176bad73a11c1649d07f566f3479ae2228f746d4a1b8ce0cacf45386a"
      />

      <BlockTextBody
          text="At the time, this was the largest interactive public art installation on a government building ever installed in the United States. The installation stayed up for over a year, received wide media attention, and was likely was viewed by hundreds of thousands of people.

Connected workshops were done in collaboration with the Valentine museum and the John Marshall House."
      />

      <BlockTextHeading
        text="City Hall Workshops"
      />

      <BlockTextBody
        text="High above the city, at the top floor of Richmond, VA’s city hall, participants met together in a circle. They had just been on the street below doing the Performing Statistics’s Augmented Reality experience that brought the massive banners to life with animations, audio, and calls to action. After hearing the dreams of youth, participants came to the observation deck where they learned about Richmond’s history from the Valentine museum. They then could respond to various questions that were taped to the windows so that as you looked out, their ideas and thoughts blended in with the Richmond landscape. 

These workshops not only gave historical context to the contemporary advocacy of the youth leaders, but invited participants to see how they could step up to help support the needs and dreams of the next generation. Huge thanks to Patty Parks and the Valentine museum for helping to create and facilitate these tours."
      />

      <div class="mx-8">
        <div class="flex mt-8 justify-between mx-col1">
          <img
            class="w-1/2 mr-4 h-[25vw] object-cover"
            src="/virginia/ar/cityhall/CityHallObservationTour3.jpg"
          >
          <img
            class="w-1/2 object-cover ml-4 h-[25vw]"
            src="/virginia/ar/cityhall/CityHallObservationTour4.jpg"
          >
        </div>
        <div class="flex mt-8 justify-between mx-col1">
          <img
            class="w-1/2 mr-4 h-[25vw] object-cover"
            src="/virginia/ar/cityhall/CityHallObservationTour.jpg"
          >
          <img
            class="w-1/2 object-cover ml-4 h-[25vw]"
            src="/virginia/ar/cityhall/CityHallObservationTour2.jpg"
          >
        </div>
      </div>

      <BlockTextHeading
        text="John Marshall House Workshops"
      />

      <BlockTextBody
        text="The banners on City Hall transform a building where adults in power typically speak for residents of the city and instead lift up youth voices, by turning the building into a giant megaphone for their dreams.  Young people generally have no say in the laws, budgets, and policies that impact their lives. The banners provide an example of how political and legal spaces could create platforms for youth to demand to be heard even though they do not possess power in formal elected positions like the adults inside.

As part of the 3 part City Hall tour, participants could step into the historic John Marshall House and imagine how Richmond would be different if there was a Youth or Citizens Supreme Court. This interactive workshops connected civil rights efforts on a national level, with those that participants could support and initiate on a local level."
      />

      <BlockTextHeading
        text="Credits"
        class="mt-32"
      />
      <BlockCredits
        :credits="credits"/>
      <BlockCredits
        title="Invisible Thread"
        :credits="invisibleThread"/>
      <BlockCredits
        title="Additional Credits"
        :credits="additional"/>
    </section>
  </main>
</template>

<script setup>
  const credits = [
    {
      title: 'Lead artist',
      text: 'Mark Strandquist'
    },
    {
      title: 'Youth featured on banners',
      text: 'Ta’Dreama McBride and Clyde Walker'
    },
    {
      title: 'Youth featured in the animation',
      text: 'Kiara, Khai, Kayla, Reese'
    },
    {
      title: 'Animation direction',
      text: 'Ta’Dreama, Clyde, and Iyana in collaboration with Mark Strandquist and Invisible Thread'
    },
    {
      title: 'Poem',
      text: 'Co-written during Performing Statistics workshops with dozens of youth organizers fighting to end youth incarceration. Collaborating campaigns include: RISE for Youth (Richmond, VA), Care Not Control (Philadelphia, PA), RECESS (Brooklyn, NY), Maine Youth Justice (Portland, ME), Connecticut Justice Alliance (Hartford, CT), New Jersey Institute for Social Justice (Camden, NJ), and Youth First Initiative. Vision sessions led by Mark Strandquist and Kate DeCiccio. Poem edited by Mark Strandquist.'
    },
    {
      title: 'Producer',
      text: 'Trey Hartt'
    }
  ]

  const invisibleThread = [
    {
      title: 'Supervisor',
      text: 'Alex Hessler'
    },
    {
      title: 'Executive Producer',
      text: 'Annie Pomeranz'
    },
    {
      title: 'Creative Director',
      text: 'Rich Moore'
    },
    {
      title: 'Technical Lead',
      text: 'Daniel Chamberlin'
    },
    {
      title: 'Animator',
      text: 'Christin Smolinski'
    }
  ]

  const additional = [
    {
      title: 'Special thanks',
      text: 'To all the brave and brilliant youth who shared their words, vision, voices, and images to make this project possible, to the staff at Human Services, and to Sam Schwartzkopf for all their time and support.' 
    },
    {
      title: 'Support from',
      text: 'City of Richmond, Dominion logo, Altria, CultureWorks, Art for Justice and the John Marshall House'
    }
  ]
</script>