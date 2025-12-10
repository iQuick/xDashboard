<script setup lang="ts">
import "ant-design-vue/dist/reset.css";
import "@/assets/style/setting.scss";
import Topbar from "@/components/Topbar.vue";

import {reactive, ref} from "vue";
import {router} from "@/configs/router";
import {useSettingStoreWithOut} from "@/configs/pinia";
import {storeToRefs} from "pinia";
import logo from '@/assets/images/icon.png'

const main = window.main.getInfo()
const name = `${main.name} v${main.version}`
const setting = storeToRefs(useSettingStoreWithOut());
const active = reactive(['setting']);
const changeMenu = (key: any) => {
  active[0] = key;
  router.push(`/manager/${key}`)
};

const transitionName = ref('fade')

// 监听路由变化，根据路由类型和位置决定过渡方向
router.beforeEach((to, from) => {
  const toIsPlugin = to.meta.isPluginRoute
  const fromIsPlugin = from.meta.isPluginRoute
  const toDepth = to.meta.depth as number || 0
  const fromDepth = from.meta.depth as number || 0
  
  // 只有插件列表和详情之间的切换才使用左右滑动
  if (toIsPlugin && fromIsPlugin && toDepth !== fromDepth) {
    if (toDepth > fromDepth) {
      // 进入详情页：从右侧滑入
      transitionName.value = 'slide-left'
    } else {
      // 返回列表页：向右侧滑出
      transitionName.value = 'slide-right'
    }
  } 
  // 其他所有情况（包括菜单切换）都根据 menuIndex 使用上下滑动
  else {
    const toIndex = to.meta.menuIndex as number ?? -1
    const fromIndex = from.meta.menuIndex as number ?? -1
    
    if (toIndex > fromIndex) {
      // 向下切换：从下往上滑入
      transitionName.value = 'slide-up'
    } else if (toIndex < fromIndex) {
      // 向上切换：从上往下滑入
      transitionName.value = 'slide-down'
    } else {
      transitionName.value = 'fade'
    }
  }
})

</script>

<template>
  <div class="main">
    <Topbar :logo="logo" :title="name" />
    <div class="container">
      <div class="menu">
        <a-menu class="a-menu-item"
                :theme="setting.theme.value"
                :selected-keys="active"
                mode="vertical"
                @select="({key}) => changeMenu(key)"
        >
          <a-menu-item key="setting">{{ $t("settings.setting") }}</a-menu-item>
          <a-menu-item key="dock">{{ $t("settings.dock") }}</a-menu-item>
          <a-menu-item key="plugin">{{ $t("settings.plugin") }}</a-menu-item>
          <a-menu-item key="proxy">{{ $t("settings.proxy") }}</a-menu-item>
          <a-menu-item key="about">{{ $t("settings.about") }}</a-menu-item>
        </a-menu>
      </div>
      <div class="content">
        <RouterView v-slot="{ Component }">
          <template v-if="Component">
            <Transition :name="transitionName" mode="out-in">
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
      position: relative;
      
      &::-webkit-scrollbar {
        display: none;
      }
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  }
}

// 淡入淡出过渡
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

// 从右向左滑入（进入详情页）
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-left-enter-from {
  opacity: 0;
  transform: translateX(40px);
}

.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-40px);
}

// 从左向右滑出（返回列表页）
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-right-enter-from {
  opacity: 0;
  transform: translateX(-40px);
}

.slide-right-leave-to {
  opacity: 0;
  transform: translateX(40px);
}

// 从下往上滑入（向下切换菜单）
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

// 从上往下滑入（向上切换菜单）
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-down-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}

.slide-down-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
