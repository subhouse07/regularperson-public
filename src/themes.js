import birdposter from "./assets/birdposter.jpg";
import birdVP8 from "./assets/birdVP8.webm";
import birdx264 from "./assets/birdx264.mp4";
import driveposter from "./assets/driveposter.jpg";
import driveVP8 from "./assets/driveVP8.webm";
import drivex264 from "./assets/drivex264.mp4";
import twilightx264 from "./assets/twilightx264.mp4";
import twilightposter from "./assets/twilightposter.webp";
import drive from "./assets/drive.mp3";
import cloud from "./assets/cloud.mp3";
import twilight from "./assets/twilight.mp3";

const lightCloud = {
  dark: false,
  colors: {
    background: "#FFFFFF",
    surface: "#f0f8ff",
    "surface-bright": "#f7ffef",
    "surface-light": "#ffeff7",
    "surface-variant": "#424749",
    "on-surface": "#111111",
    "button-text": "#111111",
    "button-text-hover": "#f0f8ff",
    primary: "#0055b2",
    secondary: "#ffff93",
    error: "#B00020",
    info: "#4594e8",
    success: "#4CAF50",
    warning: "#FB8C00",
  },
  variables: {
    "video-opacity": 1.0,
  },
};

const darkCloud = {
  dark: true,
  colors: {
    background: "#111111",
    surface: "#1b1d1d",
    "surface-bright": "#252727",
    "surface-light": "#373939",
    "surface-variant": "#f0f8ff",
    "on-surface": "#f0f8ff",
    "button-text": "#f0f8ff",
    "button-text-hover": "#f0f8ff",
    primary: "#01458e",
    secondary: "#c2c275",
    error: "#fd264d",
    info: "#4594e8",
    success: "#4CAF50",
    warning: "#FB8C00",
  },
  variables: {
    "video-opacity": 0.6,
  },
};

const lightDrive = {
  dark: false,
  colors: {
    background: "#FFFFFF",
    surface: "#f6fff0",
    "surface-bright": "#f7fff2",
    "surface-light": "#f7fff2",
    "surface-variant": "#42473e",
    "on-surface": "#111111",
    "button-text": "#111111",
    "button-text-hover": "#f6fff0",
    primary: "#498b1d",
    secondary: "#bf8f2e",
    error: "#B00020",
    info: "#4594e8",
    success: "#4CAF50",
    warning: "#FB8C00",
  },
  variables: {
    "video-opacity": 1.0,
  },
};

const darkDrive = {
  dark: true,
  colors: {
    background: "#111111",
    surface: "#161816",
    "surface-bright": "#252825",
    "surface-light": "#363a36",
    "surface-variant": "#f2fff0",
    "on-surface": "#f6fff0",
    "button-text": "#f6fff0",
    "button-text-hover": "#f6fff0",
    primary: "#386718",
    secondary: "#916d23",
    error: "#B00020",
    info: "#4594e8",
    success: "#4CAF50",
    warning: "#FB8C00",
  },
  variables: {
    "video-opacity": 0.6,
  },
};

const lightTwilight = {
  dark: false,
  colors: {
    background: "#FFFFFF",
    surface: "#fff7f7",
    "surface-bright": "#fff7f7",
    "surface-light": "#fff7f7",
    "surface-variant": "#473e3e",
    "on-surface": "#111111",
    "button-text": "#111111",
    "button-text-hover": "#ffefef",
    primary: "#bf262b",
    secondary: "#2dbf9d",
    error: "#B00020",
    info: "#4594e8",
    success: "#4CAF50",
    warning: "#FB8C00",
  },
  variables: {
    "video-opacity": 1.0,
  },
};

const darkTwilight = {
  dark: true,
  colors: {
    background: "#111111",
    surface: "#161515",
    "surface-bright": "#282525",
    "surface-light": "#3a3636",
    "surface-variant": "#ffefef",
    "on-surface": "#ffefef",
    "button-text": "#ffefef",
    "button-text-hover": "#ffefef",
    primary: "#bf262b",
    secondary: "#24967b",
    error: "#B00020",
    info: "#4594e8",
    success: "#4CAF50",
    warning: "#FB8C00",
  },
  variables: {
    "video-opacity": 0.6,
  },
};

export const getTheme = (prefersLight) => {
  const defaultTheme = prefersLight ? "lightCloud" : "darkCloud";
  return {
    defaultTheme: defaultTheme,
    variations: {
      colors: ["primary", "secondary"],
      lighten: 2,
      darken: 1,
    },
    themes: {
      lightCloud,
      darkCloud,
      lightDrive,
      darkDrive,
      lightTwilight,
      darkTwilight,
    },
  };
};

export const zoneThemes = {
  cloud: {
    name: "Cloud",
    themes: {
      light: "lightCloud",
      dark: "darkCloud",
    },
    video: {
      poster: birdposter,
      vp8: birdVP8,
      mp4: birdx264,
    },
    audio: {
      mp3: cloud,
    },
  },
  drive: {
    name: "Drive",
    themes: {
      light: "lightDrive",
      dark: "darkDrive",
    },
    video: {
      poster: driveposter,
      vp8: driveVP8,
      mp4: drivex264,
    },
    audio: {
      mp3: drive,
    },
  },
  twilight: {
    name: "Twilight",
    themes: {
      light: "lightTwilight",
      dark: "darkTwilight",
    },
    video: {
      poster: twilightposter,
      vp8: null,
      mp4: twilightx264,
    },
    audio: {
      mp3: twilight,
    },
  },
};