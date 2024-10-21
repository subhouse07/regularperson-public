<script setup>
import ImageCard from "./ImageCard.vue";

const props = defineProps({
  projectList: Array,
  description: String,
  mainImage: String,
  title: String
});
</script>
<template>
  <div class="sticky-two-col">
    <div>
      <ImageCard class="sticky-two-col__stuck" :text="props.description" :thumbnail="props.mainImage"
        :isTitleCard="true" :title="props.title" />
    </div>
    <div>
      <ImageCard class="sticky-two-col__item" v-for="project in props.projectList" :title="project.name"
        :text="project.desc" :linkText="project.linkText" :linkURL="project.linkUrl" :thumbnail="project.thumb"
        :embed="project.embed">
        <slot></slot>
      </ImageCard>
    </div>
  </div>
</template>
<style scoped>
.sticky-two-col__stuck {
  position: fixed;
}

.sticky-two-col {
  width: 75%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.sticky-two-col>div {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.sticky-two-col__item {
  width: 100%;
}

@media screen and (width < 875px) {
  .sticky-two-col {
    width: 100%;
    flex-wrap: wrap;
  }

  .sticky-two-col__item {
    max-width: 100%;
  }

  .sticky-two-col__stuck {
    max-width: 100%;
    position: relative;
  }
}
</style>