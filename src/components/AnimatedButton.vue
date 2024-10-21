<script setup>
const emit = defineEmits(["clicked"]);
const props = defineProps({
  text: String,
});

function onClick() {
  setTimeout(() => {
    emit("clicked")
  }, 50);
}
</script>
<template>
  <v-btn height="42" rounded="0" class="animated" @click="onClick">{{ props.text }}</v-btn>
</template>

<style>
.animated {
  width: 100%;
  margin: 0.3em 0;
  box-shadow: -4px 4px rgb(var(--v-theme-primary-darken-1));
  font-weight: 600;
  cursor: pointer;
  background-color: rgb(var(--v-theme-surface));
  transition-duration: 0.3s;
  color: rgb(var(--v-theme-button-text));
}

.animated:hover {
  transform: translateX(2px);
  background-color: rgb(var(--v-theme-primary-lighten-1));
  box-shadow: -4px 2px 2px rgb(var(--v-theme-secondary));
  color: rgb(var(--v-theme-button-text-hover));
}

.animated:active {
  transition-duration: 0.1s;
  box-shadow: 0 0 2px rgb(var(--v-theme-secondary));
  transform: translateX(0);
}
</style>
