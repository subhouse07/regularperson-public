<script setup>
import { mdiVolumeHigh, mdiVolumeMute } from '@mdi/js';
import { onMounted, ref, watch } from 'vue';
import { useZoneTheme } from '../plugins';

const { zoneTheme } = useZoneTheme();
const bgm = new Audio(zoneTheme.value.audio.mp3);
const muted = ref(true)

onMounted(() => {
    bgm.loop = true
    bgm.muted = true
    bgm.load()
})

watch(zoneTheme, (newTheme) => {
    bgm.src = newTheme.audio.mp3;
    bgm.load();
    bgm.play();
})

watch(muted, (newValue) => {
    if (bgm.paused || !bgm.currentTime) {
        bgm.play();
    }
    bgm.muted = newValue;
})
</script>

<template>
    <v-btn variant="plain" density="compact" icon @click="muted = !muted">
        <v-icon v-if="muted" :icon="mdiVolumeMute" />
        <v-icon v-else :icon="mdiVolumeHigh" />
    </v-btn>
</template>