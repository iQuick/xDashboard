<script setup lang="ts">
const isSun = false
const isMoon = true
const isLock = false
const isTop = false
const dragging = false

const maximize = () => {
    window.plugin.maximize("demo")
}
const minimize = () => {
    window.plugin.minimize("demo")
}
const close = () => {
    window.plugin.close("demo")
}

</script>

<template>
  <nav
    v-show="true"
    class="absolute z-50 w-full flex-row-between gap-x-2 px-2 py-1.5"
  >
    <ul class="flex-row-left gap-x-0.5">
      <svg
        class="i-ic-twotone-cancel text-red"
        :class="{
          'hover:text-red-300': isSun,
          'hover:text-red-500': isMoon,
        }"
        @click="close"
      ></svg>
      <svg
        class="i-ic-twotone-remove-circle text-yellow"
        :class="{
          'hover:text-yellow-300': isSun,
          'hover:text-yellow-500': isMoon,
        }"
        @click="minimize"
      ></svg>
      <svg
        class="i-ic-twotone-expand-circle-down text-green"
        :class="{
          'hover:text-green-300': isSun,
          'hover:text-green-500': isMoon,
          'rotate-180': isTop,
        }"
        @click="maximize"
      ></svg>
    </ul>
    <ul
      class="h-4 flex-auto cursor-pointer rounded bg-white opacity-0 hover:opacity-20"
      :class="{
        'opacity-20': dragging,
      }"
      @mousedown=""
    ></ul>
    <ul class="flex-row-right gap-x-0.5">
      <svg
        class="text-teal"
        :class="{
          'hover:text-teal-300': isSun,
          'hover:text-teal-500': isMoon,
          'i-ic-twotone-lock': isLock,
          'i-ic-twotone-lock-open': !isLock,
        }"
        @click=""
      ></svg>
      <svg
        :class="{
          'i-ic-twotone-light-mode text-orange hover:text-orange-300':
          isSun,
          'i-ic-twotone-dark-mode text-violet hover:text-violet-500':
          isMoon,
        }"
        @click=""
      ></svg>
      <svg
        class="i-ic-twotone-settings text-blue"
        :class="{
          'hover:text-blue-300': isSun,
          'hover:text-blue-500': isMoon,
          'hover:cursor-not-allowed!': false,
        }"
        @click=""
      ></svg>
    </ul>
  </nav>
</template>
