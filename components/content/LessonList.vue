<script setup>
const props = defineProps(["path"]);
</script>

<template>
  <div class="">
    <ContentList :path="props.path" v-slot="{ list }">
      <NuxtLink v-for="lesson in list" :to="lesson._path">{{
        lesson.title
      }}</NuxtLink>
    </ContentList>
  </div>
</template>
