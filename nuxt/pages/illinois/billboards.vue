<template>
  <main>
    <BlockProjectHeader
      class="relative z-20"
      title="Illinois"
      backLink="/illinois"
      subtitle="Abolitionist Billboards"
      location="Chicago, Illinois"
      introText="The billboards created in Chicago were a result of a series of workshops that held space for young people with vast perspectives. The Circles and Ciphers team worked to write a song about a future where No Black Kids are in Prison. From their lyrics they pulled lines for billboard messaging. The Final Five team collaborated on poetry with their organizers and also held a workshop inside a local detention center so their billboards carry perspectives from youth in the community and young people who are currently locked up."
      date=""
      :onThisPage="[
        ['Programming', 'programming'],
        ['Data', 'data'],
        ['Credits', 'credits']
      ]"
    />

    <section 
      class="
        bg-black relative z-10 pb-16
        before:content-[''] before:absolute before:w-full before:h-[20svh] before:bg-gradient-to-b to-black from-black-trans before:-top-[20svh] before:left-0 before:z-0
      "
    > 
      <BlockProjectFooterLinks
          heading="More from Illinois"
          :links="footerLinks"
      />
    </section>
  </main>
</template>

<script setup>
  const footerLinks = [
    {
      title: "No Kids In Prison Exhibition",
      link: "/illinois/nkip",
      img: "/illinois/index/IL_NKIP.jpg",
      color: "var(--nkip)"
    },
    {
      title: "Cultural Organizing Institute",
      link: "/illinois/coi",
      img: "/illinois/index/IL_Snackbags.jpg",
      color: "var(--programs)"
    }
  ]
</script>