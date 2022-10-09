<script setup>
import {capitalize} from "../utils.js"

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
</script>

<template>
  <ul
      class="mb-16 block  w-full text-ellipsis whitespace-nowrap overflow-hidden"
  >
    <li
        v-for="link in crumbs"
        :key="link.name"
        class="w-fit inline break-normal"
    >
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
