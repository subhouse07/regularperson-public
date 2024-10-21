<script setup>
import { softwareProjects } from "../projects";
import TwoColumnPage from "./TwoColumnPage.vue";
const softwareText =
  "It may not come as a surprise to you that I spend a lot of time developing software. I do it for work and for fun. It sure is satisfying to see a project come together! Anyways, here's a collection of some of my favorite projects.";
</script>
<template>
  <TwoColumnPage :projectList="softwareProjects" :description="softwareText" :mainImage="'me.jpg'" title="Software" />
</template>
