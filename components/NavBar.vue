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
        <Logo />
        <MenuToggle />
      </div>

      <ul
        v-if="open"
        class="flex flex-col gap-y-2 bg-white dark:bg-black"
        role="list"
        aria-label="Premier niveau"
      >
        <MenuItem v-for="link of navigation" :key="link._path" :link="link">
        </MenuItem>
      </ul>
    </ContentNavigation>
  </nav>
</template>
