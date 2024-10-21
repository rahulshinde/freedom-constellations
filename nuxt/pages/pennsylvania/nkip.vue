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
        before:content-[''] before:absolute before:w-full before:h-[20svh] before:bg-gradient-to-b to-black from-black-trans before:-top-[20svh] before:left-0 before:z-0"
    >
      

    </section> 
  </main>  
</template>

<script setup>
</script>