<script setup>
const props = defineProps(["link"]);
const isSubMenuOpen = ref(false);

function itemClicked(l) {
  return l.children
    ? (isSubMenuOpen.value = !isSubMenuOpen.value)
    : (useState("open").value = false);
}

function genLinkPath(l) {
  return l.children ? "" : l._path;
}
</script>

<template>
  <li class="flex flex-col gap-y-2" :class="{ '': isSubMenuOpen }">
    <NuxtLink
      class="py-2 block w-full flex flex-row items-center gap-x-2"
      :to="genLinkPath(link)"
      @click="itemClicked(link)"
    >
      {{ link.title }}

      <svg
        v-if="link.children"
        class="w-4 h-4 bg-transparent"
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        ></path>
      </svg>
    </NuxtLink>

    <ul
      v-if="link.children && isSubMenuOpen"
      class="flex flex-col gap-y-2 pl-4"
    >
      <li v-for="subLink of link.children" :key="subLink._path">
        <NuxtLink
          class="py-2 block w-full flex flex-row items-center"
          :to="subLink._path"
          @click="useState('open').value = false"
        >
          {{ subLink.title }}
        </NuxtLink>
      </li>
    </ul>
  </li>
</template>
