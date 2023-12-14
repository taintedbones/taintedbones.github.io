<script setup>
import ProjectCard from "./ProjectCard.vue";
import CovidDashImg from "../assets/covid-dash-world-map.jpg";
import SpaceGeoImg from "../assets/space-geo-moon.jpg";

const projects = [
  {
    title: "COVID-19 Dashboard",
    text: "A web application for tracking live COVID-19 data globally and in the US.",
    repoUrl: "https://github.com/taintedbones/covid-dash",
    url: "https://taintedbones.github.io/covid-dash/",
    resources: ["JavaScript", "Material UI", "Nivo", "Axios"],
    img: CovidDashImg,
  },
  {
    title: "DnD Combat Tracker",
    text: "A full stack web application for tracking combat stats and initiatives for Dungeons and Dragons.",
    repoUrl: "https://github.com/taintedbones/combat-track",
    url: "https://combat-track.web.app/",
    resources: ["TypeScript", "React", "Material UI", "Firebase"],
    img: CovidDashImg,
  },
  {
    title: "Space Geo",
    text: "An educational website highlighting how scientists use geological practices to study our solar system.",
    repoUrl: "https://github.com/taintedbones/space-geo/tree/dev",
    url: "https://taintedbones.github.io/space-geo/",
    resources: ["JavaScript", "React", "Material UI"],
    img: SpaceGeoImg,
  },
];
</script>

<template>
  <div class="root">
    <v-sheet theme="dark">
      <v-container class="container">
        <v-row class="text-h4"> Projects </v-row>
        <v-row v-for="(project, i) in projects">
          <ProjectCard
            :title="project.title"
            :text="project.text"
            :repoUrl="project.repoUrl"
            :url="project.url"
            :resources="project.resources"
            :img="project.img"
            :imgOnLeft="i % 2 === 0"
          />
        </v-row>
      </v-container>
    </v-sheet>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.root {
  width: 100%;
}
</style>
