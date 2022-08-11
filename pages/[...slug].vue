<template>
  <main class="p-4 dark:bg-black dark:text-white w-full min-h-full grow">
    <ContentDoc>
      <template #not-found>
        <div class="flex flex-col gap-y-4 items-center justify-center">
          <h1 class="leading-normal text-center">Cette page est introuvable</h1>
          <NuxtLink to="/" class="link text-center mx-auto"
            >Revenir à l'accueil</NuxtLink
          >
        </div>
      </template>
    </ContentDoc>
  </main>
</template>
<!-- TODO Centrer le bloc erreur -->
