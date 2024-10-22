<template>
  <main>
    <BlockProjectHeader
      class="relative z-20"
      title="Virginia"
      backLink="/virginia"
      subtitle="An interactive mural that came alive to envision a future world where all youth are free!"
      location="Richmond, VA Police Station"
      introText="In downtown Richmond, VA, located directly across from the VCU police station, youth activists built a mural to showcase their dreams of a world where all youth are free. The mural featured a vibrant tapestry that combined youth portraits, symbols of freedom, colorful shapes, and cosmic patterns."
      date="2021"
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
        :images = "[
          {
            'src': '/virginia/mural/MuralUnveiling_4_large.jpg'
          },
          {
            'src': '/virginia/mural/MuralUnveiling.jpg'
          },
          {
            'src': '/virginia/mural/MuralUnveiling_2_small.jpg'
          },
          {
            'src': '/virginia/mural/PerformingStats_Mural_PRessConference4_small.jpg'
          },
          {
            'src': '/virginia/mural/boombox.jpg'
          },
          {
            'src': '/virginia/mural/TaDreamasCity.jpg'
          }
        ]"
      />

      <BlockTextBody
        text="In 2021,  Performing Statistics collaborated with young people for RISE for Youth and Code VA to create the mural which became the first ‘star’ within the Freedom Constellations campaign.

The project connected youth advocates and youth coding students to build a one of a kind mural that came alive with interactive audio and augmented reality. Alongside massive portraits of each youth participant, motion sensors, LED lights and audio speakers were attached to the wall. When viewers walked by the youth leader’s portraits, the sensors would be triggered and the LED lights around each portrait would illuminate as the youth began talking to the viewer about the future they dream of through the speakers on the wall.

By collaborating with the youth coders at CODE VA to do the programming for the mural, the project created a rare collaboration between a diverse group of students."
      />

      <BlockVideo
        class="mt-8"
        video="https://player.vimeo.com/progressive_redirect/playback/1022172976/rendition/1080p/file.mp4?loc=external&signature=5a2e70d0a1e49ea850dc94abac8648433a6748a2a40505ee72b3bc16eb8ecef7"
      />

      <BlockTextBody
        text="The mural also included QR codes that triggered multiple audio pieces, augmented reality experiences, and calls to action to connect viewers with the advocates trying to make the dreams within the mural a reality."
      />

      <div class="mx-4 mt-8">
        <div class="ml-col3 mr-col3">
          <iframe class="w-full" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1195354759&color=%23ffcd00&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
        </div>
      </div>

      <BlockTextBody
        text="The mural stayed on display for over a year and was directly across the street from the police department. Positioned at 3rd and Broad st (one of the busiest intersections in the city), the mural received a feature article in the <a href='https://richmond.com/entertainment/art/on-the-wall-across-from-vcu-police-department-advocates-unveil-a-mural-that-imagines-a/article_0dc739f2-83c2-5318-b6c0-67fcf41ceb2f.html' target='_blank'>city’s largest newspaper</a> and was viewed by thousands of people."
      />

      <div class="mx-4 mt-8">
        <div class="ml-col3 mr-col3">
          <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1161880087&color=%23ffcd00&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
        </div>
      </div>

      <BlockTextPullQuote
        text="I could be a hero to some kids and they could be like us."
        attribution="Kayla"
        :reverse="true"
        color="var(--projects)"
      />

      <BlockTextPullQuote
        text="I feel like public art is going to always be there. It can affect the future. When the police officers look out their window and see the mural I hope they feel challenged to make a change."
        attribution="Khai, 17"
        color="var(--projects)"
      />

    </section>
  </main>
</template>

<script setup>
</script>