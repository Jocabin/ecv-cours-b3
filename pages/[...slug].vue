<template>
  <main
    class="p-4 bg-white dark:bg-black dark:text-white w-full min-h-full grow overflow-hidden"
  >
    <ContentDoc>
      <template v-slot="{ doc }">
        <Breadcrumb v-if="$route.path != '/'" />
        <ContentRenderer :value="doc" />
      </template>

      <!-- Si le page n'existe pas -->
      <template #not-found>
        <Title>Page introuvable</Title>
        <div class="flex flex-col gap-y-4 items-center justify-center">
          <h1 class="leading-normal text-center">Cette page est introuvable</h1>
          <NuxtLink to="/" class="link text-center mx-auto"
            >Revenir à l'accueil</NuxtLink
          >
        </div>
      </template>

      <!-- Si la page/le document est vide -->
      <template #empty>
        <Title>Document vide</Title>
        <div class="flex flex-col gap-y-4 items-center justify-center">
          <h1 class="leading-normal text-center">Ce document est vide</h1>
          <NuxtLink to="/" class="link text-center mx-auto"
            >Revenir à l'accueil</NuxtLink
          >
        </div>
      </template>
    </ContentDoc>
  </main>
</template>
<!-- TODO: Centrer le bloc erreur -->
