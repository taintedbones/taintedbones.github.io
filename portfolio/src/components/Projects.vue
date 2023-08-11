<script setup>
import ProjectCard from "./ProjectCard.vue";
import CovidDashImg from "../assets/covid-dash-world-map.jpg";


</script>

<template>
  Projects
  <ProjectCard
    title="COVID-19 Dashboard"
    text="A web application for tracking live COVID-19 data globally and in the US."
    repoUrl="https://github.com/taintedbones/covid-dash"
    url="https://taintedbones.github.io/covid-dash/"
    :resources="['JavaScript', 'Material UI', 'Nivo', 'Axios']"
    :img="CovidDashImg"
  />
</template>
