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
        before:content-[''] before:absolute before:w-full before:h-[20svh] before:bg-gradient-to-b to-black from-black-trans before:-top-[20svh] before:left-0 before:z-0"
      >
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
      </section>
    </section>
  </main>
</template>

<script setup>
</script>