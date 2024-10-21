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
      <BlockImageFullWidthSlideshow
        class="mt-8"
        :images = "[
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
            'src': '/pennsylvania/nkip/NKIPPhilly_15_small.jpg'
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
      

    </section> 
  </main>  
</template>

<script setup>
</script>