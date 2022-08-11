<script setup>
const route = useRoute();
const links = ref(route.fullPath.split("/"));
// TODO breadcrumbs que en mode ordi, mobile montrer un bouton retour ariere
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function concatenate(l) {
  let spliter = links.value[links.value.indexOf(l) + 1];

  return route.fullPath.split(spliter)[0];
}
</script>

<template>
  <span class="mb-6 block">
    <NuxtLink class="link" to="/">Accueil</NuxtLink>
    <span v-for="link in links">
      <NuxtLink
        v-if="links[links.length - 1] != link"
        class="link"
        :to="concatenate(link)"
      >
        {{ capitalize(link) }}
      </NuxtLink>
      <span v-else>
        {{ capitalize(link) }}
      </span>

      <span v-if="links[links.length - 1] != link"> > </span>
    </span>
  </span>
</template>
