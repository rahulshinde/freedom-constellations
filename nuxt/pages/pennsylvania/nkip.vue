<template>
  <main>

    <BlockProjectHeader
      class="relative z-20"
      title="Pennsylvania"
      backLink="/pennsylvania"
      subtitle="#NoKidsInPrison: Cherry Street Pier Exhibition"
      location="121 N Christopher Columbus Blvd, Philadelphia, PA."
      introText="Organized by Performing Statistics, this interactive exhibition took viewers on an immersive journey from the history of youth incarceration, to the present-day impact on youth and their families, and ended in a future space world where all youth are free. Filled with virtual reality, interactive art installations, and eight years of art made in collaboration with youth leaders nationwide, the exhibition engaged thousands of viewers and helped support local campaigns to keep youth free."
      date=" May 20 – Jun 11, 2023"
      :onThisPage="[
        ['Exhibition Data', 'data'],
        ['Programming', 'programming']
      ]"
    />

    <section 
      class="
        bg-black relative z-10 pb-16
        before:content-[''] before:absolute before:w-full before:h-[30svh] before:bg-gradient-to-b to-black from-black-trans before:-top-[30svh] before:left-0 before:z-0"
    >
      <BlockImageFullWidthSlideshow
        class="mt-8"
        :images = "[
          {
            'src': '/pennsylvania/nkip/NKIPPhilly_15_small.jpg'
          },
          {
            'src': '/pennsylvania/nkip/PXL_20230606_195010795.jpg'
          },
          {
            'src': '/pennsylvania/nkip/NKIPPhilly_2.jpg'
          },
          {
            'src': '/pennsylvania/nkip/NKIPPhilly_8.jpg'
          },
          {
            'src': '/pennsylvania/nkip/NKIPPhilly_10.jpg'
          },
          {
            'src': '/pennsylvania/nkip/NKIPPhilly_14.jpg'
          },
          {
            'src': '/pennsylvania/nkip/NKIPPhilly_17.jpg'
          },
          {
            'src': '/pennsylvania/nkip/NKIPPhilly_21.jpg'
          },
          {
            'src': '/pennsylvania/nkip/NKIPPhilly_23.jpg'
          },
          {
            'src': '/pennsylvania/nkip/20230519_185512.jpg'
          }
        ]"
      />

      <BlockTextBody
        text="The exhibit featured a robust set of programs led by local youth leaders, seasoned abolitionist advocates and artists, all free and open to the public. Attendees created abolitionist swag using vinyl designs and custom patches. The Philly screen printing community made sure everyone went home with a gorgeous freshly printed tote! The space was also an opportunity for organizers who have been fighting for youth freedom for decades to sit down with young people and talk through solidarity, wins, organizing heartbreak and the best strategies to keep fighting for liberation together."
      />

      <div class="mx-8">
        <div class="flex mt-16 justify-between mx-col1">
          <img
            class="w-1/3 mr-2 h-[33vw] object-cover"
            src="/pennsylvania/nkip/programming/20230520_181258.jpg"
          >
          <img
            class="w-1/3 object-cover ml-2 mr-2 h-[33vw]"
            src="/pennsylvania/nkip/programming/20230611_145320.jpg"
          >
          <img
            class="w-1/3 ml-2 h-[33vw] object-cover"
            src="/pennsylvania/nkip/programming/20230525_155137.jpg"
          >
        </div>
        <div class="flex items-stretch mt-4 mx-col1">
          <img
            class="w-1/2 object-cover mr-2 h-[30vw]"
            src="/pennsylvania/nkip/programming/PXL_20230611_201740424.jpg"
          >
          <img
            class="w-1/2 object-cover ml-2 h-[30vw]"
            src="/pennsylvania/nkip/programming/PXL_20230611_202930016.jpg"
          >
        </div>
      </div>

      <BlockTextBody
        heading="Youth Convening"
        text="Understanding the power of youth cross pollination and relationship building, Performing Statistics hosted a youth convening where organizers from Minnesota and Illinois were about to experience the exhibition, see public art across the city and learn from Pennsylvania and New Jersey organizers about the process. The time together created space for relationships building between campaigns and opportunity to begin planning for the exhibition to travel to Chicago and Minneapolis."
      />

      <BlockTextBody
        heading="Exhibition Data"
        text="Thousands of viewers came through the NKIP exhibition and data from their surveys show what we have always believed….that youth driven storytelling, that incorporates a multitude of art forms and media, impacts people in deep and energizing ways."
      />

      <BlockTextData
        :dataPoints="[
          {
            'number': '50%',
            'text': 'of attendees had someone they care about that is or has been incarcerated.'
          },
          {
            'number': '60%',
            'text': 'of attendees lived in Philly.'
          },
          {
            'number': '30%',
            'text': 'of attendees lived outside of PA.'
          },
          {
            'number': '55%',
            'text': 'of attendees said they are more committed to fighting to end youth incarceration and supporting youth leadership than when they arrived.'
          },
          {
            'number': '56%',
            'text': 'of attendees felt like they understood the issue better and hearing from directly impacted youth and their families helped me understand things I didn\'t realize before.'
          },
          {
            'number': '50%',
            'text': 'of attendees said that they were most impacted by hearing from young people and their families about their experiences.'
          }
        ]"      
      />

      <BlockTextHeading
        text="Credits"
      />
      <BlockCredits
        title="Cherry Street Pier Team"
        :credits="csp_credits"
      />
      <BlockCredits
        title="#NKIP Team"
        :credits="credits"
      />
      <BlockCredits
        title="Programming"
        :credits="programmingCredits"
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
      title: 'Augmented Reality Banners',
      link: "/pennsylvania/ar",
      img: "/pennsylvania/index/PA_AR.jpg",
      color: "var(--projects)"
    },
    {
      title: "Abolitionist Billboards",
      link: "/pennsylvania/billboards",
      img: "/pennsylvania/index/PA_Billboards.jpg",
      color: "var(--billboards)"
    },
    {
      title: "Cultural Organizing Institute",
      link: "/pennsylvania/coi",
      img: "/pennsylvania/index/PA_COI.jpg",
      color: "var(--programs)"
    }
  ]

  const csp_credits = [
    {
      title: 'Creative Director & Programming',
      text: 'Sarah Eberle, Libby Rosa'
    },
    {
      title: 'Comms Team',
      text: 'Mike Baroner, Austin Marsdale, Jasmine Wiggins'
    },
    {
      title: 'Operations & Security',
      text: 'Marcus Bush'
    },
    {
      title: 'Installation support',
      text: 'The IATSE local 8 Stagehands'
    },
    {
      title: 'Site Manager',
      text: 'Tim Lynch'
    }
  ]

  const credits = [
    {
      title: 'Event Coordination',
      text: 'Indie Life Media: Rasheed Abdellah, Mayleen Pangelina, Bria Scott, Abel Teclemariam'
    },
    {
      title: 'Technology producer',
      text: 'Oliver Spencer'
    },
    {
      title: 'Install Team',
      text: 'Jessie Riggens, Courtney Bowles, Pernot Hudson'
    },
    {
      title: 'Youth Docents',
      text: 'Anahi, Alex, Rodney, Bree, Qilah, Tasheema'
    },
    {
      title: 'NKIP Zine Design',
      text: 'Jason Killinger, cover art: Amarie Baker'
    },
    {
      title: '“Put Youth in Power Not Prison” hoodie screen printing',
      text: 'Malokul Industries'
    },
    {
      title: 'Juvenile Law Center',
      text: 'Marcia Hopkins, Malik Pickett, Katy Otto'
    },
    {
      title: 'Social Responsibility Through Me',
      text: 'Shaneka Boucher'
    },
  ]

  const programmingCredits = [
    {
      title: 'Village of Arts and Humanities',
      text: 'Michaela Pomellis'
    },
    {
      title: 'The Youth Sentencing and Reentry Project',
      text: 'Bianca Van Heydoorn'
    },
    {
      title:'Panelists: “Abolition Across Generations”',
      text: 'Anahi, Alex, Abd’Allah Lateef'
    },
    {
      title: 'Abolitionist Swag Workshops',
      text: 'Amir Khadar, Katie Kaplan'
    },
    {
      title: 'Screenprinters',
      text: 'Josh Graupera, Mike Smaczylo, Scout Cartagena, Eric Ruin'
    },
    {
      title: 'Comms Support',
      text: 'Autumn Talley\nDarnell Schoolfield, Mural Arts Philadelphia\nChad Eric Smith, Mural Arts Philadelphia\nKareen Preble, The Village of Arts and Humanities'
    }
  ]
</script>