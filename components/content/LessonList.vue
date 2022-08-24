<script setup>
const props = defineProps(["path"])
</script>

<template>
  <div class="flex flex-col gap-y-3 justify-start items-start">
    <ContentList :path="props.path" v-slot="{ list }">
      <NuxtLink
        v-for="lesson in list"
        :key="lesson._path"
        :to="lesson._path"
        class="link"
      >
        {{ lesson.title }}
      </NuxtLink>
    </ContentList>
  </div>
</template>
