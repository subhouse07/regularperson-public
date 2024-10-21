<script setup>
import AudioPlayer from "./AudioPlayer.vue";
import head from "../assets/head.webp";
import VideoSelector from "./VideoSelector.vue";
import { useTheme } from "vuetify";
import { mdiThemeLightDark, mdiEye, mdiEyeClosed } from "@mdi/js";
import { useRouter } from 'vue-router';
import { useVisibilityToggle } from "../plugins";

const router = useRouter();
const theme = useTheme();
const { isContentVisible, toggleContentVisible } = useVisibilityToggle();

function toggleTheme() {
  let themeName = theme.global.name.value;
  if (theme.global.current.value.dark) {
    themeName = themeName.replace("dark", "light");
  } else {
    themeName = themeName.replace("light", "dark");
  }
  theme.global.name.value = themeName;
}

function backToHome() {
  window.scrollTo(0, 0);
  router.push('/');
}

</script>
<template>
  <v-sheet :height="56" :elevation="2" color="surface" class="topbar">
    <div :style="{ display: 'flex', alignItems: 'center' }">
      <v-btn variant="plain" density="compact" @click="toggleTheme" icon>
        <v-icon :icon="mdiThemeLightDark" />
      </v-btn>
      <v-btn variant="plain" density="compact" @click="toggleContentVisible" icon>
        <v-icon v-if="isContentVisible" :icon="mdiEye" />
        <v-icon v-else :icon="mdiEyeClosed" />
      </v-btn>
    </div>

    <img class="logo" :src="head" @click="backToHome" />
    <div class="media-controls">
      <VideoSelector class="theme-selector" />
      <AudioPlayer />
    </div>
  </v-sheet>
  <div class="blank"></div>
</template>
<style scoped>
.topbar {
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-style: outset;
  top: 0;
  left: 0;
  width: 100vw;
  padding: 12px 16px 12px 12px;
  z-index: 100;
}

.blank {
  height: 56px;
}

.logo {
  height: 100%;
  cursor: pointer;
}

.media-controls {
  display: flex;
  align-items: center;
}

.theme-selector {
  width: 12em;
  margin-right: 16px;
}
</style>
