<template>
  <main>
    <h1 class="mx-8 mt-8 relative z-20 text-runde-xxl font-semibold">About</h1>

    <section 
      class="
        bg-black relative z-10
        before:content-[''] before:absolute before:w-full before:h-[30svh] before:bg-gradient-to-b to-black from-black-trans before:-top-[30svh] before:left-0 before:z-0
      "
    >
      <BlockImageGallery
        :images="['/about/NKIPChicago1.jpg', '/about/MNBillboards30.jpg']"
      />
      <div class="mt-8 mx-12">
        <p class="px-8 ml-col3 mr-col3 text-white text-runde-xl">
          This website is an archive of the Freedom Constellations campaigns produced by Performing Statistics and their partners between 2020 and 2024.
        </p>
        <p class='px-8 ml-col3 mr-col3 text-white text-runde-m mt-8'>
          For more information about Performing Statistics check out their ongoing work <a href="https://www.performingstatistics.org/" target='_blank' class="underline hover:text-navigation-highlight">HERE</a>.
        </p>
        <p class='px-8 ml-col3 mr-col3 text-white text-runde-m mt-4'>
          Interested in more information about the Freedom Constellations campaigns? Please fill out <a href='#' target='_blank' class="underline hover:text-navigation-highlight">this form</a> we’ll get right back to you; 
        </p>
        <p class='px-8 ml-col3 mr-col3 text-white text-runde-m mt-4'>
          From 2021 - 2024, Performing Statistics was co-directed by Kate DeCiccio, J Slater, and Mark Strandquist. 
        </p>
        <p class='px-8 ml-col3 mr-col3 text-white text-runde-m mt-4'>
          Endless thanks to all our partners and to all the brave and brilliant youth leaders who shared their voices, dreams and demands for a more just world. 
        </p>
      </div>

      <BlockTextHeading class="mt-8" text="Want to see more powerful art??" />

      <div class="mt-8 mx-col3 px-10 flex">
        <BlockLinkImage
          class="w-col6 mx-auto"
          link="https://www.nokidsinprison.org/experience/"
          image="/about/nkip-digital.jpg"
          text="#NKIP Digital Experience"
          color="var(--nkip)"
        />
      </div>

      <BlockTextHeading class="mt-8" text="Colophon" />

      <div class="mt-12 pb-8 mx-12">
        <div class="ml-col3 mr-col3 px-8 columns-3 gap-8">
          <div class="break-after-column text-runde-xs break-inside-avoid">
            <h2 class="uppercase font-bold mb-4">Website Design</h2>
             <a href="https://jasonkillinger.com/" target="_blank" class="underline hover:text-navigation-highlight">Jason Killinger</a> & <br> <a href="https://r-s-s.net" target="_blank" class="underline hover:text-navigation-highlight">Rahul Subhash Shinde</a>
          </div>
          <div class='break-after-column text-runde-xs break-inside-avoid'>
            <h2 class="uppercase font-bold mb-4">Site Programming</h2>
            Rahul Subhash Shinde
          </div>
  
          <div class="text-runde-xs break-inside-avoid">
            <h2 class="uppercase font-bold mb-4 ">Typefaces</h2>
            <a href="https://github.com/lauridskern/open-runde" target="_blank" class="underline hover:text-navigation-highlight">Open Runde</a> by Laurids Kern
            <br>
            <a href="https://pangrampangram.com/products/hatton" target="_blank" class="underline hover:text-navigation-highlight">PP Hatton</a> by Pangram Pangram Foundry.
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
</script>