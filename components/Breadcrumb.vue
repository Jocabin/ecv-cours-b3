<script setup>
const route = useRoute()
const crumbs = computed(() => {
  let splittedRoute = route.fullPath.split("/")
  let final = []

  splittedRoute.forEach((el) => {
    final.push({
      name: el === "" ? "accueil" : el,
      path: route.fullPath.split(el)[0] + el,
    })
  })

  return final
})
// TODO: breadcrumbs que en mode ordi, mobile montrer un bouton retour ariere */
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1)
}
</script>

<template>
  <ul class="mb-6 block flex flex-row justify-start align-center flex-wrap">
    <li v-for="link in crumbs">
      <NuxtLink
        v-if="crumbs[crumbs.length - 1] != link"
        class="link"
        :to="link.path"
      >
        {{ capitalize(link.name) }}
      </NuxtLink>
      <span v-else>
        {{ capitalize(link.name) }}
      </span>

      <span v-if="crumbs[crumbs.length - 1] != link" class="mx-1">></span>
    </li>
  </ul>
</template>
