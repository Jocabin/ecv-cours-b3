<script setup>
const open = useState("open");
</script>

<template>
  <nav
    id="primary-nav"
    class="border-b fixed top-0 border-gray flex flex-col bg-white dark:bg-black p-4 w-full gap-y-8"
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
          <NuxtLink class="py-2 block" :to="link._path">{{
            link.title
          }}</NuxtLink>

          <!-- <ul class="flex flex-col gap-y-2" v-if="link.children">
            <li v-for="subLink of link.children" :key="subLink._path">
              <NuxtLink class="py-1 block" :to="subLink._path">{{
                subLink.title
              }}</NuxtLink>
            </li>
          </ul> -->
        </li>
      </ul>

      <!-- <svg
          class="ml-2 w-4 h-4"
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
        </svg> -->
    </ContentNavigation>
  </nav>
</template>
