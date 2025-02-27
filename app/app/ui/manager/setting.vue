<script setup lang="ts">

import {useSettingStoreWithOut} from "../../configs/pinia";
import {storeToRefs} from "pinia";
import {onMounted, watch} from "vue";

const setting = storeToRefs(useSettingStoreWithOut())
const themes = ['light', 'dark']

watch(setting.theme, (newValue) => {
  setTheme(newValue);
})

onMounted(() => {
  setTheme(setting.theme.value)
})

const setTheme = (theme) => {
  document.documentElement.classList.remove(...themes);
  document.documentElement.classList.add(theme);
}

</script>

<template>
  <div class="setting">

    <div class="item">
      <span>主题</span>
      <a-select
          style="width: 80px"
          v-model:value="setting.theme.value"
      >
        <a-select-option v-for="(name, key) in themes" :value="name" v-bind:key="key">
          {{ $t(`themes.${name}`) }}
        </a-select-option>
      </a-select>
    </div>

    <div class="item">
      <span>开机自启动</span>
      <a-switch v-model:checked="setting.autoStart.value"/>
    </div>
    <div class="item">
      <span>系统启动时不显示主窗口</span>
      <a-switch v-model:checked="setting.showMain.value"/>
    </div>


  </div>
</template>

<style lang="scss" scoped>
.setting {
  .item {
    display: flex;
    justify-content: space-between;
    justify-items: center;
    align-items: center;
    padding: 16px 24px;
    margin: 16px;
    background: var(--color-item-color);
    border-radius: 8px;
    
    span {
      color: var(--color-text-content);
    }
  }
}
</style>

