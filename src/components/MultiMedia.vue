<script setup>
import ImageCard from "./ImageCard.vue";
import { useRouter } from 'vue-router';
const router = useRouter()

const musicImg = "music.webp";
const graphicImg = "jp_sheet.webp";
const videoImg = "video.webp";

function routeTo(path) {
  window.scrollTo(0, 0);
  router.push(path);
}

</script>
<template>
  <div class="multimedia">
    <ImageCard class="multimedia__card" title="Music" :thumbnail="musicImg" :isRouterLink="true"
      @clicked="() => routeTo('/multimedia/music')" />
    <ImageCard class="multimedia__card" title="Video" :thumbnail="videoImg" :isRouterLink="true"
      @clicked="() => routeTo('/multimedia/video')" />
    <ImageCard class="multimedia__card" title="Graphics" :thumbnail="graphicImg" :isRouterLink="true"
      @clicked="() => routeTo('/multimedia/graphics')" />
  </div>
</template>

<style scoped>
.multimedia {
  width: 100%;
  height: min-content;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}

.multimedia__card {
  width: 100%;
  margin: 16px 0;
}
</style>
