import { createApp } from "vue";
import "./style.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi-svg";
import * as components from "vuetify/components";
import App from "./App.vue";
import router from "./router";
import { getTheme } from "./themes";
import { zonePlugin, contentVisiblePlugin } from "./plugins";

let prefersLightTheme =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme)".media !== "not at all") &&
  window.matchMedia("(prefers-color-scheme: light)")
    ? false
    : true;

const vuetify = createVuetify({
  theme: getTheme(prefersLightTheme),
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
  defaults: {
    VIcon: {
      color: "primary-lighten-1",
    },
  },
  components,
});

const app = createApp(App);
app.provide("isContentVisible", true);
app.use(router).use(vuetify).use(zonePlugin).use(contentVisiblePlugin).mount("#app");
