<template>
  <main class="w-full overflow-hidden">
    <BlockTextHeading class="relative z-20" text="Illinois" />

    <section 
      class="
        bg-black relative z-10 pb-16
        before:content-[''] before:absolute before:w-full before:h-[20svh] before:bg-gradient-to-b to-black from-black-trans before:-top-[20svh] before:left-0 before:z-0
      "
    > 
      <BlockTextBody text="Use the sections below to experience and learn more about each project that took place in Chicago." />
      <div class="relative">
        <IndexLink
          class="relative z-10"
          text="No Kids In Prison Exhibition"
          link="/illinois/nkip"
          img="/illinois/index/NKIPChicago2.jpg"
          color="var(--nkip)"
        />
      </div>
      <div class="relative">
        <IndexLink
          class="relative z-10"
          text="Billboards"
          link="/illinois/billboards"
          img="/illinois/index/NKIPChicagoBillboards5.jpg"
          color="var(--billboards)"
          :reverse="true"
        />
      </div>
    </section>
  </main>
</template>

<script setup>

</script>