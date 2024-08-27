<template>
  <header class="flex items-center relative justify-between mx-4 mt-4">
    <NuxtLink to="/" class="flex items-start w-col3 mx-4">
      <IconsLogo class="h-12 w-auto" />
    </NuxtLink>
    <nav class="mx-4 w-[30rem] font-hatton absolute left-1/2 -translate-x-1/2">
      <ul class="relative w-full h-24">
        <li 
          class="
            hover:text-navigation-highlight transition-colors group
            absolute bottom-[10%] left-0
            after:content-[''] after:absolute after:w-24 after:bottom-3 after:left-3 after:border-t-[1px] after:border-dashed after:w-full after:origin-left after:rotate-[-20deg] 
          "
        >
          <NuxtLink to="/virginia" class='flex'>
            <IconsStar1 class="h-5 [&_path]:transition-colors group-hover:[&_path]:fill-navigation-highlight" />
            Virginia
          </NuxtLink>
        </li>
        <li class="
          hover:text-navigation-highlight transition-colors group
          absolute top-[30%] left-[20%]
          after:content-[''] after:absolute after:w-20 after:bottom-3 after:left-3 after:border-t-[1px] after:border-dashed after:w-full after:origin-left after:rotate-[29deg]
          "
        >
          <NuxtLink to="/illinois" class='flex'>
            <IconsStar2 class="h-5 [&_path]:transition-colors group-hover:[&_path]:fill-navigation-highlight" />
            Illinois
          </NuxtLink>
        </li>
        <li class="
          hover:text-navigation-highlight transition-colors group
          absolute bottom-0 left-[35%]
          after:content-[''] after:absolute after:w-[6rem] after:bottom-3 after:left-3 after:border-t-[1px] after:border-dashed after:w-full after:origin-left after:-rotate-[45deg]
          "
        >
          <NuxtLink to="/pennsylvania" class='flex'>
            <IconsStar3 class="h-5 [&_path]:transition-colors group-hover:[&_path]:fill-navigation-highlight" />
            Pennsylvania 
          </NuxtLink>
        </li>
        <li class="
          hover:text-navigation-highlight transition-colors group
          absolute top-0 left-[50%]
          after:content-[''] after:absolute after:w-30 after:bottom-3 after:left-3 after:border-t-[1px] after:border-dashed after:w-full after:origin-left after:rotate-[18deg]
        "
        >
          <NuxtLink to="/new-jersey" class='flex'>
            <IconsStar4 class="h-5 [&_path]:transition-colors group-hover:[&_path]:fill-navigation-highlight" />
            New Jersey
          </NuxtLink> 
        </li>
        <li class="
          hover:text-navigation-highlight transition-colors group
          absolute top-[40%] left-[75%]
        ">
          <NuxtLink to="/minnesota" class='flex'>
            <IconsStar5 class="h-5 [&_path]:transition-colors group-hover:[&_path]:fill-navigation-highlight" />
            Minnesota
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <NuxtLink to="/abolitionist-toolkit" class="rounded-lg text-center mx-4 font-bold leading-[1] px-4 py-2 bg-bg-highlight">
      <IconsShackles class="h-10 mb-2" />
      Abolitionist <br> Tool-Kit
    </NuxtLink>
  </header>
</template>

<script setup>
  
</script>