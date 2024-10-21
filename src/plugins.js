import { inject, ref } from "vue";
import { zoneThemes } from "./themes";

const visibilityKey = Symbol("visibilityToggle");
const zoneKey = Symbol("zoneThemes");

export const useVisibilityToggle = () => {
    return inject(visibilityKey);
}

export const useZoneTheme = () => {
    return inject(zoneKey);
}

const isContentVisible = ref(true);
const zoneTheme = ref(zoneThemes.cloud);

const toggleContentVisible = () => {
    isContentVisible.value = !isContentVisible.value;
};

const updateZoneTheme = (themeName, vTheme) => {
    const updateTheme = zoneThemes[themeName.toLowerCase()];
    zoneTheme.value = updateTheme;
    vTheme.global.name.value = vTheme.global.current.value.dark
      ? updateTheme.themes.dark
      : updateTheme.themes.light;
};

export const contentVisiblePlugin = {
    install(app) {
        app.provide(visibilityKey, { isContentVisible, toggleContentVisible });
        app.config.globalProperties.$isContentVisible = isContentVisible;
    }
};

export const zonePlugin = {
    install(app) {
      app.provide(zoneKey, { zoneTheme, updateZoneTheme });
      app.config.globalProperties.$zoneTheme = zoneTheme;
    },
};