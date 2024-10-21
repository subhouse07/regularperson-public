<script setup>
import { ref, onMounted } from "vue";

const emit = defineEmits(["clicked"]);
const props = defineProps({
  title: String,
  text: String,
  linkText: String,
  linkURL: String,
  thumbnail: String,
  videoPath: String,
  videoPoster: String,
  isRouterLink: Boolean,
  isTitleCard: Boolean,
  embed: String,
  isHomeCard: Boolean,
});
const cardClass = ref("card");
const imgClass = ref("in-img");

function buildAssetPath(assetFile) {
  return new URL(`../assets/${assetFile}`, import.meta.url);
}

function onClick() {
  if (props.isRouterLink) {
    setTimeout(() => {
      emit("clicked");
    }, 25)
  }
}

onMounted(() => {
  if (props.isRouterLink) {
    cardClass.value = "card shadow-animate";
  }
  if (!props.isTitleCard) {
    imgClass.value = "in-img clickable"
  }
  if (props.isHomeCard) {
    cardClass.value = "card home"
  }
});
</script>

<template>
  <v-sheet :class="cardClass" @click="onClick">
    <div class="text-h5 font-weight-bold text-lg-h4" v-if="title">{{ title }}</div>
    <hr v-if="title" />
    <div v-if="thumbnail || videoPath" class="media">
      <img v-if="thumbnail" :class="imgClass" :src="buildAssetPath(thumbnail)">
      <v-overlay v-if="!isRouterLink && !isTitleCard" class="align-center justify-center" activator="parent">
        <v-card flat outlined color="transparent" width="100%">
          <img class="overlay-embed" :src="buildAssetPath(thumbnail)" />
        </v-card>
      </v-overlay>
      </img>
    </div>
    <div v-if="embed" v-html="embed"></div>
    <div id="text" class="text-body-1 font-weight-regular">{{ text }}</div>
    <slot></slot>
    <a class="text-body-1 text-decoration-underline" v-if="linkText" :href="linkURL" target="_blank">{{ linkText }}</a>
  </v-sheet>
</template>

<style scoped>
hr {
  margin: 0 64px 8px 0;
  border-color: rgb(var(--v-theme-primary));
}

.in-img {
  width: 100%;
}

.in-img.clickable {
  cursor: pointer;
}

.card {
  background-color: rgb(var(--v-theme-surface));
  margin-bottom: 1em;
  box-shadow: -4px 4px rgb(var(--v-theme-primary-darken-1));
  max-width: 500px;
  padding: 0.7em;
  display: flex;
  flex-direction: column;
  height: fit-content;
}

.image {
  border-style: inset;
}

#text {
  margin: 8px 0;
}

.overlay-embed {
  max-width: 100%;
  padding: 5%;
}

.card.shadow-animate {
  transition-duration: 0.3s;
}

.card.shadow-animate:hover {
  transform: translateX(2px);
  background-color: rgb(var(--v-theme-primary-lighten-1));
  box-shadow: -4px 2px 2px rgb(var(--v-theme-secondary-lighten-1));
  color: rgb(var(--v-theme-button-text-hover));
  cursor: pointer;
}

.card.shadow-animate:active {
  transition-duration: 0.1s;
  box-shadow: 0 0 2px rgb(var(--v-theme-secondary));
  transform: translateX(0);
}

@media screen and (width < 1400px) {
  .card {
    max-width: 400px;
  }
}

@media screen and (width < 1140px) {
  .card {
    max-width: 300px;
  }
}

@media screen and (width < 875px) {
  .card {
    max-width: 500px;
  }

  .card.home {
    max-width: 300px;
  }
}

@media screen and (width < 650px) {

  .card,
  .card.home {
    width: 100%;
    max-width: none;
  }
}
</style>
