<template>
  <main>
    <BlockProjectHeader
      class="relative z-20"
      title="Illinois"
      backLink="/illinois"
      subtitle="No Kids in Prison Exhibition"
      location="Chicago, Illinois"
      introText="Organized by Performing Statistics, #NoKidsInPrison Chicago featured collaborations with The Final 5 campaign and Circles and Ciphers. The exhibition immersed viewers into interactive installations about the history of youth incarceration, the state of youth incarceration today and what is needed to build a world where all youth are free. Youth voices from local incarcerated young people were included through an audio collaboration between Final Five and youth inside. SkyArts contributed paintings created by local incarcerated youth. Circles and Ciphers created a music video to drop their new song, “No Kids In Prison” a ballad that illustrates a prison free Chicago that centers youth leadership."
      date=""
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
            src: '/illinois/nkip/NKIPChicago1.jpg',
          },
          {
            src: '/illinois/nkip/NKIPChicago3.jpg',
          },
          {
            src: '/illinois/nkip/NKIPChicago4.jpg',
          },
          {
            src: '/illinois/nkip/NKIPChicago8.jpg',
          },
          {
            src: '/illinois/nkip/NKIPChicago9.jpg',
          },
          {
            src: '/illinois/nkip/NKIPChicago10.jpg',
          },
          {
            src: '/illinois/nkip/NKIPChicago11.jpg',
          },
          {
            src: '/illinois/nkip/NKIPChicago12.jpg',
          },
          {
            src: '/illinois/nkip/NKIPChicago13.jpg',
          },
          {
            src: '/illinois/nkip/NKIPChicago14.jpg',
          }
        ]"
      />
      <BlockTextBody 
        text="Filled with virtual reality, interactive art installations, and eight years of art made in collaboration with youth leaders nationwide, the exhibition engaged thousands of viewers and helped support local campaigns to keep youth free.
      
Healthy Hood curated a robust set of programs open to the public and Final Five hosted multiple organizing events for youth." 
      />

      <BlockTextHeading
          text="Programming"
      />
      <BlockTextBody 
          text="Healthy Hood led by Tanya Lozano and Allen Washington led the programming schedule in Chicago. NoKidsInPrison Chicago featured ongoing abolitionist swag making with local screen printers combined with powerful panels and inspirational performances curated by Healthy Hood in collaboration with The Final Five Campaign and Circles and Ciphers.
          
Highlights from Chicago programming included:"
      />
    </section>
  </main>
</template>

<script setup>
</script>