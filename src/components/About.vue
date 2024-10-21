<script setup>
import { useRouter } from "vue-router";
import ImageCard from "./ImageCard.vue";
const router = useRouter();
const textClass = "about-text text-body-1";
function goToContactMe() {
  window.scrollTo(0, 0);
  router.push("/contact");
}
</script>

<template>
  <div :style="{ height: 'min-content' }">
    <ImageCard :style="{ maxWidth: '500px' }" :title="'About Me'" :thumbnail="'me.jpg'" :isTitleCard="true">
      <div>
        <div :class="textClass">My name is Andy and I am a software engineer and artist, in no particular order. I love
          my wife, playing piano, Formula 1, Ryuichi Sakamoto, writing music, writing software, writing music for
          software, and writing software for
          music. How do
          you like my website?
          Let me know over on the <span><a :class="textClass" :style="{ cursor: 'pointer' }"
              @click="goToContactMe">Contact
              Me</a></span> page.</div>
        <div :class="textClass">Separate from its contents, the site itself is an amalgam of all my skills. The
          background videos are a blend of photos and videos that I shot, 2D/3D animation and shaders. I wrote the
          background music using the Android application I made, XGBuddy. And in building the site, I took an
          opportunity to learn the JS framework Vue (and also learned the lesson that sometimes it's okay to stick to
          things you know - like React).</div>
        <div :class="textClass">If you're here, you probably came from my resume or a job application because (at the
          time of this writing) I'm looking for a new software job. Hopefully this website gives you an
          understanding of my skill set and abilities; I'm always working on new projects and learning new ways of
          solving software problems so it's only onward and upward from here.
        </div>
        <div :class="textClass">And just in case you're interested, <span><a :class="textClass"
              :style="{ cursor: 'pointer' }" href="https://github.com/subhouse07/my_portfolio" target="_blank">here is
              the github repo for this website</a></span>. It's nothing crazy, but it is the most recent piece of
          software I've completed so maybe it has some relevance.</div>
        <div :class="textClass">And sorry about the stupid photo of myself on every page, but I thought it made the site
          feel a little more alive - as if I was personally showing you around my site while sitting at my desk. Did it
          work? Let me know on the <span><a :class="textClass" :style="{ cursor: 'pointer' }"
              @click="goToContactMe">Contact
              Me</a></span> page!</div>
      </div>
    </ImageCard>
  </div>

</template>

<style scoped>
.about-text {
  margin-bottom: 8px;
}
</style>
