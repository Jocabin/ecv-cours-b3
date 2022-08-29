<script setup>
import { capitalize } from "../../utils.js";

const props = defineProps(["path"]);

function isIndex(path) {
  const splittedPaths = path.split("/");
  const lastItem = splittedPaths[splittedPaths.length - 1];

  return lastItem[0] == "_" ? true : false;
}
</script>

<template>
  <div class="flex flex-col gap-y-3 justify-start items-start">
    <ContentList :path="props.path" v-slot="{ list }">
      <NuxtLink
        v-for="lesson in list"
        :key="lesson._path"
        :to="lesson._path"
        class="link"
        :class="{ hidden: isIndex(lesson._path) }"
      >
        {{ capitalize(lesson.title) }}
      </NuxtLink>
    </ContentList>
  </div>
</template>
