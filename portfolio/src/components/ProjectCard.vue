<script setup>
const props = defineProps({
  title: String,
  text: String,
  resources: [String],
  repoUrl: String,
  url: String,
  img: String,
});
</script>

<template>
  <v-card class="proj-card" width="400" variant="tonal">
    <v-img class="proj-img" :src="props.img" width="100%"></v-img>
    <v-card-title>{{ props.title }}</v-card-title>
    <v-card-subtitle
      ><span class="text-overline" v-for="resource in resources"
        >{{ resource
        }}<span v-if="resource !== resources[resources.length - 1]"
          >,
        </span></span
      ></v-card-subtitle
    >
    <v-card-text>{{ props.text }}</v-card-text>
    <v-card-actions>
      <v-btn variant="outlined" :href="props.repoUrl" target="_blank">
        GitHub
      </v-btn>
      <v-btn
        variant="outlined"
        v-if="props.url"
        :href="props.url"
        target="_blank"
      >
        Link
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style>
.proj-img {
  filter: grayscale(100%);
  margin: 0px 10px;

  &:hover {
    filter: grayscale(0%);
  }
}
</style>
