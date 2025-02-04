<template>
  <main class="w-full overflow-hidden">
    <BlockTextHeading class="relative z-20 !mt-16" text="Illinois: a future where all hearts can finally heal" />

    <BlockTextBody class="!mt-4 relative z-20" text="Combining billboards, music videos, robust public programming, and the largest version of the NKIP exhibition to date, Illinois reached massive audiences while creating spaces for activists to connect and build power." />


    <section 
      class="
        bg-black relative z-10 pb-16
        before:content-[''] before:absolute before:w-full before:h-[30svh] before:bg-gradient-to-b to-black from-black-trans before:-top-[30svh] before:left-0 before:z-0
      "
    > 
      <BlockImageFullWidth class="z-10 relative" img="/illinois/index/NKIPChicagoBillboards5.jpg" alt="NKIP Chicago 21" />
      <BlockTextBody text="Use the sections below to experience and learn more about each project that took place in Illinois." />
      <div class="relative">
        <img class="absolute z-[1] -top-[8vw] w-[24vw] right-[15vw] rotate-[15deg]" src="/zine-assets/zine-assets_0008_Layer-6.png" />
        <IndexLink
          class="relative z-10"
          text="No Kids In Prison Exhibition"
          link="/illinois/nkip"
          img="/illinois/index/IL_NKIP.jpg"
          color="var(--nkip)"
          />
        <img class="absolute z-[1] top-[8vw] w-[20vw] right-[0vw] rotate-[15deg]" src="/zine-assets/pinkstar.png" />
      </div>
      <div class="relative">
        <IndexLink
          class="relative z-10"
          text="Abolitionist Billboards"
          link="/illinois/billboards"
          img="/illinois/index/IL_Billboards.jpg"
          color="var(--billboards)"
          :reverse="true"
        />
        <img class="absolute z-[1] -top-[5vw] w-[15vw] left-[10vw] rotate-[15deg]" src="/zine-assets/yellowstar1.png" />
        <img class="absolute z-[1] -top-[7vw] w-[20vw] left-[30vw]" src="/zine-assets/redhexchalk2.png" />
        <img class="absolute z-[1] top-[7vw] w-[25vw] left-[0vw]" src="/zine-assets/zine-assets_0016_Layer-10.png" />
      </div>
      <div class="relative">
        <IndexLink
          class="relative z-10"
          text="Cultural Organizing Institute"
          link="/illinois/coi"
          img="/illinois/index/IL_Snackbags.jpg"
          color="var(--programs)"
          />
        <img class="absolute z-[1] -bottom-[10vw] w-[30vw] -right-[10vw] -rotate-[10deg]" src="/zine-assets/zine-assets_0007_Layer-7.png" />
      </div>

      <BlockTextBody text="Organized in collaboration with The Final 5 campaign, Circles and Ciphers, Healthy Hood and the Youth First Justice Collaborative, Illinois provided an opportunity to build on all we learned in previous states while exploring new creative tactics and strategies. 

Securing a massive gallery space in Chicago lent the opportunity to produce a unique version of NKIP full of immersive spaces, a black box theater for film screenings, and a large space for public programming and hands-on art making workshops. With a dedicated public event space, we worked with programming curators from Health Hood, who organized an incredible array of events, workshops, panels, dance parties, abolitionist sound baths, and more.

Beautiful Billboards imagining a free future sprouted up across Chicago, were transformed into thousands of free posters, and installed as billboards in southern Illinois strategically near state legislators and youth prisons.

While so much planning went into making the project what it was, sometimes what you don’t plan for, can be just as surprising and powerful. Like when one of our abolitionist billboards was placed next to a Chicago advertisement promoting the police department. Or when another billboard was placed directly beside the training facility for all Illinois Department of Corrections staff." />
    </section>
  </main>
</template>

<script setup>

</script>