<script setup>
import { videoProjects } from "../projects";
import TwoColumnPage from "./TwoColumnPage.vue";
const videoText =
  "I always end up doing a lot of video editing for one thing or another (like the backgrounds of this website for example). Usually when I shoot or edit video it's in service of some larger project but I enjoy it all the same. Have a look!";
</script>
<template>
  <TwoColumnPage :projectList="videoProjects" :description="videoText" :mainImage="'me.jpg'" title="Video" />
</template>
