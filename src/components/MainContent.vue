<script setup>
import { RouterView } from "vue-router";
import { useVisibilityToggle } from "../plugins";

const { isContentVisible } = useVisibilityToggle();

</script>
<template>
  <main>
    <RouterView v-slot="{ Component }" mode="out-in">
      <Transition name="slide">
        <component :class="isContentVisible ? 'content-visible' : 'content-hidden'" :is="Component" />
      </Transition>
    </RouterView>
  </main>
</template>
<style>
main {
  height: 90vh;
  padding: 1rem;
  display: flex;
  justify-content: center;
}

.content-visible {
  visibility: visible;
}

.content-hidden {
  visibility: hidden;
}

.slide-enter-active,
.slide-leave-active {
  transition: 500ms ease all;
}

.slide-leave-active {
  position: absolute;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(100vw);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-50vw);
}
</style>