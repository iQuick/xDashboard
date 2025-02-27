<script setup lang="ts">
</script>

<template>
  <RouterView v-slot="{ Component }">
    <template v-if="Component">
      <Transition name="fade">
        <Component :is="Component" />
      </Transition>
    </template>
  </RouterView>
</template>

<style>
#app {
  width: 100%;
  height: 100%;
}
body {
  -webkit-user-select: none;
  -ms-user-select: none;
  -moz-user-select: none;
  user-select: none;
}
</style>
