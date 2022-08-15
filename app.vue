<script setup>
useHead
// FIXME: duplicate title template
// TODO: passer au crawleur SEO et créer un robots.txt
useHead({
  titleTemplate: "%s - Support de cours B3",
})
</script>

<template>
  <NavBar />
  <NuxtPage />
  <FooterBar />
</template>
