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
//TODO: fix CSS for breadcrumb
function capitalize(word) {
  return (
    word.charAt(0).toUpperCase() + word.slice(1).toString().replaceAll("-", " ")
  )
}
</script>

<template>
  <ul
    class="mb-16 block flex flex-row justify-start align-center overflow-hidden flex-nowrap w-full"
  >
    <li
      v-for="link in crumbs"
      :key="link.name"
      class="flex flex-row flex-nowrap justify-start align-center"
    >
      <NuxtLink
        v-if="crumbs[crumbs.length - 1] != link"
        class="link"
        :to="link.path"
      >
        {{ capitalize(link.name) }}
      </NuxtLink>
      <span v-else class="text-ellipsis break-normal">
        {{ capitalize(link.name) }}
      </span>

      <span v-if="crumbs[crumbs.length - 1] != link" class="mx-1">></span>
    </li>
  </ul>
</template>
