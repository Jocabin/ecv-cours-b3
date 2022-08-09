<template>
  <footer
    class="w-full border-t border-gray p-4 flex flex-col items-center justify-center gap-y-8"
  >
    <!-- <nav>
      <ContentNavigation v-slot="{ navigation }">
        <ul role="list" aria-label="Second niveau">
          <li v-for="link of navigation" :key="link._path">
            <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
          </li>
        </ul>
      </ContentNavigation>
    </nav> -->

    <address class="text-center not-italic">
      Ce site est maintenu par
      <a class="text-blue" href="https://github.com/Jocabin">Jocabin</a>
    </address>
  </footer>
</template>
