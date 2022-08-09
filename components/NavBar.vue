<script setup>
const open = useState("open");
</script>

<template>
  <nav
    id="primary-nav"
    class="border-b fixed top-0 border-gray flex flex-col bg-white dark:bg-black p-4 w-full gap-y-4"
  >
    <ContentNavigation v-slot="{ navigation }">
      <div
        class="flex flex-row flex-nowrap w-full justify-between items-center"
      >
        <ThemeToggle />
        <MenuToggle />
      </div>

      <ul
        v-if="open"
        class="flex flex-col gap-y-2 bg-white dark:bg-black"
        role="list"
        aria-label="Premier niveau"
      >
        <li v-for="link of navigation" :key="link._path">
          <NuxtLink class="py-1 flex" :to="link._path">{{
            link.title
          }}</NuxtLink>

          <ul v-if="link.children">
            <li v-for="subLink of link.children" :key="subLink._path">
              <NuxtLink :to="subLink._path">{{ subLink.title }}</NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
    </ContentNavigation>
  </nav>
</template>
