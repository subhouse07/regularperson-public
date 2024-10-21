<script setup>
import { useZoneTheme } from "../plugins";
import { zoneThemes } from "../themes";
import { watch, ref } from "vue";
import { useTheme } from "vuetify";

const { zoneTheme, updateZoneTheme } = useZoneTheme();
const vuetifyTheme = useTheme();
const videoItems = Object.values(zoneThemes).map(theme => theme.name);
const video = ref(videoItems[0])

watch(video, (newVideo) => {
    if (zoneTheme.value.name !== newVideo) {
        updateZoneTheme(newVideo, vuetifyTheme);
    }
});
</script>

<template>
    <v-select density="compact" hide-details v-model="video" :items="videoItems"></v-select>
</template>
