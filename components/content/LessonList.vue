<script setup>
const props = defineProps(["path"]);
</script>

<template>
  <div class="">
    <ContentList :path="props.path" v-slot="{ list }">
      <p v-for="id in list">{{ id.title }}</p>
    </ContentList>
  </div>
</template>
