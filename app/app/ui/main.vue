<script setup lang="ts">
import "ant-design-vue/dist/reset.css";
import "@/assets/style/setting.scss";
import Topbar from "@/components/Topbar.vue";

import {reactive} from "vue";
import {router} from "../configs/router";
import {useSettingStoreWithOut} from "../configs/pinia";
import {storeToRefs} from "pinia";

const main = window.xds.getPluginInfo('main')
const logo = '../assets/images/icon.png'
const setting = storeToRefs(useSettingStoreWithOut());
const active = reactive(['setting']);
const changeMenu = (key: any) => {
  active[0] = key;
  router.push(`/manager/${key}`)
};

</script>

<template>
  <div class="main">
    <Topbar :logo="logo" :title="main.name" />
    <div class="container">
      <div class="menu">
        <a-menu class="a-menu-item"
                :theme="setting.theme.value"
                :selected-keys="active"
                mode="vertical"
                @select="({key}) => changeMenu(key)"
        >
          <a-menu-item key="setting">{{ $t("settings.setting") }}</a-menu-item>
          <a-menu-item key="plugin">{{ $t("settings.plugin") }}</a-menu-item>
          <a-menu-item key="store">{{ $t("settings.store") }}</a-menu-item>
          <a-menu-item key="proxy">{{ $t("settings.proxy") }}</a-menu-item>
          <a-menu-item key="about">{{ $t("settings.about") }}</a-menu-item>
        </a-menu>
      </div>
      <div class="content">
        <RouterView v-slot="{ Component }">
          <template v-if="Component">
            <Transition name="fade">
              <Component :is="Component"/>
            </Transition>
          </template>
        </RouterView>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  background: var(--color-body-bg);
  width: 100%;
  height: 100%;
  
  .container {
    display: flex;
    flex: 1;
    overflow: hidden;
    
    .menu {
      width: 32vh;
      background: var(--color-bg-container);
      
      .ant-menu {
        padding: 16px;
        font-size: 16px;
      }
      
      .a-menu-item {
        height: 100%;
      }
    }
    
    .content {
      flex: 1;
      height: 100%;
      overflow-y: auto;
      
      &::-webkit-scrollbar {
        display: none;
      }
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  }
}
</style>
