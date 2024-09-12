<template>
  <main>
    <BlockProjectHeader
      class="relative z-20"
      title="Pennsylvania"
      subtitle="Augmented Reality: Using Immersive Technology to Bring Abolitionist Dreams to Life!"
      location="Eastern State Penitentiary"
      introText="The central stars of Freedom Constellations were a series of monumental banners that came alive with augmented reality animations. The project showcased how the newest forms of interactive technology can transform public art and public spaces into megaphones for the voices we need to hear most."
      date="January 2023"
      :onThisPage="[
        ['About the Project', 'about'],
        ['AR Video', 'video'],
        ['Process Photos', 'process']
      ]"
    />

    <section 
      class="
        bg-black relative z-10 pb-16
        before:content-[''] before:absolute before:w-full before:h-[20svh] before:bg-gradient-to-b to-black from-black-trans before:-top-[20svh] before:left-0 before:z-0
      "
    >
      <BlockFullBleed
        class="mt-16"
        video="https://player.vimeo.com/progressive_redirect/playback/1008534310/rendition/1080p/file.mp4?loc=external&signature=8dffa6399b5433c59dd5e912c9ff81dd7a04aaf059eaba5e3098bbf22b971ad3"
      />

      <BlockImageWithPullQuote
        img="/pennsylvania/ar/FreedomConstellations.jpg"
        quote="Beyond banners, the experience was printed on thousands of No Kids in Prison zines that were handed out at Cherry St Pier and other public events and actions allowing the AR to be seen over and over again."
        :includeArLink="true"
      />

      <BlockTextBody
        text="The interactive banners were printed and installed in multiple locations so we could share the amazing youth dreams with as many people as possible;

• Eastern State Penitentiary
• Cherry Street Pier
• The Village of Arts and Humanities"
      />

      <BlockTextBody
        heading="The Animation"
        text="Youth leaders from Juvenile Law Center, YASP, Care, Not Control, and Mural Arts Philadelphia’s Restorative Justice Guild program wrote hundreds of lines of poetry that imagined a more free and safe future. They then worked together to edit that poem down and created paper cuts and other ways to illustrate the future world their poetry imagined.  The Invisible Thread team then took their art, portraits, and animation direction and transformed it into the augmented reality animation you can see on giant banners across the city."
      />

      <div class="mx-8">
        <div class="flex mt-16 justify-between mx-col1">
          <img
            class="w-1/3 mr-2 h-[35vw] object-cover"
            src="/pennsylvania/ar/20220803_133603.jpg"
          >
          <img
            class="w-2/3 object-cover ml-2 h-[35vw]"
            src="/pennsylvania/ar/Philly_Ar_Workshops_5.jpg"
          >
        </div>
        <div class="flex items-stretch mt-4 mx-col1">
          <img class="w-1/2 mr-2 object-cover" src="/pennsylvania/ar/Philly_Ar_Workshops_6.jpg">
          <div class="flex flex-col w-1/2 ml-2">
            <img class="mb-4" src="/pennsylvania/ar/Philly_Ar_Workshops_4.jpg">
            <img src="/pennsylvania/ar/Philly_Ar_Workshops_1.jpg">
          </div>
        </div>
      </div>

      <BlockCredits
        :credits="credits"
      />
    </section>
  </main>
</template>

<script setup>

  const credits = [
    {
      title: 'AR Animation',
      text: 'Invisible Thread and Performing Statistics in collaboration with Qilah, Tiguida, Rodney, Jared, Duane, Tasheema, and Jah, Jahir'
    },
    {
      title: 'Partner Orgs',
      text: 'Juvenile Law Center, YASP, Care Not Control, and Mural Arts Philadelphia’s Restorative Justice Guild, Eastern State Penitentiary, Cherry Street Pier, The Village of Arts and Humanities'
    },
    {
      title: 'Augmented Reality and poetry workshop and facilitation',
      text: 'Kate DeCiccio and Mark Strandquist with support from Katie Kaplan.'
    },
    {
      title: 'Portraits and Audio',
      text: 'Mark Strandquist'
    },
    {
      title: 'Workshop Location',
      text: 'The Cedarworks'
    }
  ]
</script>