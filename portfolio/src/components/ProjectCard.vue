<script setup>
const props = defineProps({
  title: String,
  text: String,
  resources: [String],
  repoUrl: String,
  url: String,
  img: String,
  imgOnLeft: Boolean
});
</script>

<template>
  <v-card class="proj-card" width="100%" variant="tonal">
    <div class="card-body" style="display: flex;">
      <div class="card-img" v-if="props.imgOnLeft">
        <v-img class="proj-img" :src="props.img" width="400px"></v-img>
      </div>
      <div class="card-text" style="display: flex; flex-direction: column; justify-content: space-between;">
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
      </div>
      <div class="card-img" v-if="!props.imgOnLeft">
        <v-img class="proj-img" :src="props.img" width="400px"></v-img>
      </div>
    </div>
  </v-card>
</template>

<style>
.proj-img {
  filter: grayscale(80%);
  margin: 0px 10px;

  &:hover {
    filter: grayscale(0%);
  }
}
</style>
