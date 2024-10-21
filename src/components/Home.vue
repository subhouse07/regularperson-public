<script setup>
import AnimatedButton from "./AnimatedButton.vue";
import ImageCard from "./ImageCard.vue";

const introText =
  "Hi, I'm Andy. Welcome to my portfolio website.";
const introImg = "me.jpg";
</script>
<template>
  <div class="home-container">
    <ImageCard title="regularperson.info" :text="introText" :thumbnail="introImg" :isTitleCard="true"
      :isHomeCard="true" />
    <div class="buttons">
      <AnimatedButton text="Software" @clicked="$router.push('/software')" />
      <AnimatedButton text="Multimedia" @clicked="$router.push('/multimedia')" />
      <AnimatedButton text="About Me" @clicked="$router.push('/about')" />
      <AnimatedButton text="Contact Me" @clicked="$router.push('/contact')" />
    </div>
    <div class="footer text-caption text-center">© 2024 Andy Peterson, regularperson.info</div>
  </div>
</template>

<style scoped>
.home-container {
  height: 100%;
  min-width: 75%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
}

.footer {
  min-width: 50%;
  padding: 1rem;
  text-shadow: -1px 1px 2px rgb(var(--v-theme-primary));
}

.buttons {
  min-width: 500px;
  display: flex;
  height: 60%;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  padding: 1em;
}

.buttons>h1 {
  text-shadow: -4px 4px rgb(var(--v-theme-primary));
}

@media screen and (width < 1400px) {
  .buttons {
    min-width: 400px;
  }
}

@media screen and (width < 1140px) {
  .buttons {
    min-width: 300px;
  }
}

@media screen and (width < 650px) {
  .home-container {
    min-width: none;
  }

  .buttons {
    width: 100%;
    height: auto;
    padding: 0;
  }

  .buttons>h1 {
    display: none;
  }
}
</style>
