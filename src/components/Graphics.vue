<script setup>
import { graphics } from "../projects";
import TwoColumnPage from "./TwoColumnPage.vue";
const graphicText =
  "Most of my graphics work has been creating album artwork for my music projects, but I also have some UI design experience, and even some limited pixel art experience. Feel free to take a look at a few of my graphical works!";
</script>
<template>
  <TwoColumnPage :projectList="graphics" :description="graphicText" :mainImage="'me.jpg'" title="Graphics" />
</template>
