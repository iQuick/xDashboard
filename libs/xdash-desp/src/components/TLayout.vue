<script setup>

import Control from './layouts/control.vue'
import Setting from './layouts/setting.vue'

</script>

<template>
  <div class="tlayout">
    <Transition name="slide-fade">
      <Control />
    </Transition>
    <Transition name="slide-fade">
      <Setting />
    </Transition>
    <Transition name="fade">
      <slot></slot>
    </Transition>
  </div>
</template>

<style>
.tlayout{
  background-color: #ff0f00;
}
</style>

