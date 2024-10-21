<script setup>
import { musicProjects } from "../projects";
import TwoColumnPage from "./TwoColumnPage.vue";
const musicText =
  "Music is one of the main things I do - mostly writing and composing, and a little performing. Here is a small sample of some of my recent music projects.";
</script>
<template>
  <TwoColumnPage :projectList="musicProjects" :description="musicText" :mainImage="'me.jpg'" title="Music" />
</template>
