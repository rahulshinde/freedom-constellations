<template>
  <main>
    <h1 class="mx-8 mt-8 relative z-20 text-runde-xxl font-semibold">About</h1>

    <section 
      class="
        bg-black relative z-10
        before:content-[''] before:absolute before:w-full before:h-[20svh] before:bg-gradient-to-b to-black from-black-trans before:-top-[20svh] before:left-0 before:z-0
      "
    >
      <BlockImageGallery
        :images="['/about/NKIPChicago1.jpg', '/about/MNBillboards30.jpg']"
      />
      <div class="mt-4 mx-4">
        <p class="ml-col3 mr-col3 text-white text-runde-xl">
          This website is an archive of the Freedom Constellations campaigns produced by Performing Statistics and their partners between 2020 and 2024.
        </p>
        <p class='ml-col3 mr-col3 text-white text-runde-m mt-8'>
          For more information about Performing Statistics check out their ongoing work <a href="https://www.performingstatistics.org/" target='_blank' class="underline hover:text-navigation-highlight">HERE</a>.
        </p>
        <p class='ml-col3 mr-col3 text-white text-runde-m mt-4'>
          Interested in more information about the Freedom Constellations campaigns? Please fill out <a href='#' target='_blank' class="underline hover:text-navigation-highlight">this form</a> we’ll get right back to you; 
        </p>
        <p class='ml-col3 mr-col3 text-white text-runde-m mt-4'>
          From 2021 - 2024, Performing Statistics was co-directed by Kate DeCiccio, J Slater, and Mark Strandquist. 
        </p>
        <p class='ml-col3 mr-col3 text-white text-runde-m mt-4'>
          Endless thanks to all our partners and to all the brave and brilliant youth leaders who shared their voices, dreams and demands for a more just world. 
        </p>
      </div>
      <div class="mt-12 pb-8 mx-4">
        <div class="ml-col3 mr-col3 columns-3 gap-4">
          <div class="break-after-column">
            <h2 class="uppercase font-bold text-runde-xs mb-4">Website Design</h2>
             <a href="https://www.ashleyjanelewis.com" target="_blank" class="underline hover:text-navigation-highlight">Jason Killinger</a> & <br> <a href="https://r-s-s.net" target="_blank" class="underline hover:text-navigation-highlight">Rahul Subhash Shinde</a>
          </div>
          <div class='break-after-column'>
            <h2 class="uppercase text-runde-xs font-bold mb-4">Site Programming</h2>
            Rahul Subhash Shinde
          </div>
  
          <div class="break-inside-avoid">
            <h2 class="uppercase text-runde-xs font-bold mb-4 ">Typefaces</h2>
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