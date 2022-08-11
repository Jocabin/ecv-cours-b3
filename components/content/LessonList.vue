<script setup>
const props = defineProps(["path"]);
</script>

<template>
  <div class="flex flex-col gap-y-2 justify-start items-start">
    <ContentList :path="props.path" v-slot="{ list }">
      <NuxtLink
        v-for="lesson in list"
        :to="lesson._path"
        class="border-b border-blue text-blue"
      >
        {{ lesson.title }}
      </NuxtLink>
    </ContentList>
  </div>
</template>
