<template>
  <main>
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
      title: "Abolitionist Billboards",
      link: "/illinois/billboards",
      img: "/illinois/index/IL_Billboards.jpg",
      color: "var(--billboards)"
    }
  ]
</script>