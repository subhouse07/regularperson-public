<script setup>
import { useZoneTheme } from "../plugins"
const { zoneTheme } = useZoneTheme();
</script>

<template>
    <div class="video-container">
        <video :src="zoneTheme.video.mp4" :poster="zoneTheme.video.poster" autoplay playsInline muted loop></video>
    </div>
</template>

<style scoped>
.video-container {
    position: fixed;
    left: 0;
    top: 0;
    min-width: 100vw;
    min-height: 100vh;
    z-index: -1;
}

video {
    position: absolute;
    top: -9999px;
    bottom: -9999px;
    left: -9999px;
    right: -9999px;
    margin: auto;
    min-width: 100%;
    min-height: 100%;
    opacity: var(--v-video-opacity);
}
</style>