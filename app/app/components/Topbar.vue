<script setup lang="ts">
import { 
  MinusOutlined, 
  BorderOutlined, 
  CloseOutlined 
} from '@ant-design/icons-vue';
import { defineProps } from 'vue';

const props = defineProps<{
  logo: string;
  title: string;
}>();

const handleMinimize = () => {
  window.main.minimize()
}

const handleMaximize = () => {
  window.main.maximize()
}

const handleClose = () => {
  window.main.close()
}
</script>

<template>
  <div class="header">
    <div class="left">
      <img :src="props.logo" class="logo" alt="logo" />
      <h1 class="title">{{ props.title }}</h1>
    </div>
    <div class="right">
      <div class="window-controls">
        <button class="control-btn minimize" @click="handleMinimize">
          <minus-outlined />
        </button>
        <!-- <button class="control-btn maximize" @click="handleMaximize">
          <border-outlined />
        </button> -->
        <button class="control-btn close" @click="handleClose">
          <close-outlined />
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--color-bg-elevated);
  -webkit-app-region: drag;
      
  
  .left { 
    display: flex;
    align-items: center;
    margin: 0 16px;
    gap: 12px;
    
    .logo {
      width: 16px;
      height: 16px;
      object-fit: contain;
    }
    
    .title {
      margin: 0;
      font-size: 12px;
      font-weight: 500;
      color: var(--color-text-primary);
      user-select: none;
    }
  }
  
  .right {
    display: flex;
    align-items: center;
    
    .window-controls {
      display: flex;
      align-items: center;
      margin-left: 16px;
      -webkit-app-region: no-drag; // 按钮区域不可拖动
      
      .control-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        border: none;
        background: transparent;
        color: var(--color-text-desc);
        cursor: pointer;
        transition: all 0.2s;
        
        &:hover {
          background: var(--color-item-color);
          
          &.close {
            background: var(--color-error);
            color: #fff;
          }
        }
        
        .anticon {
          font-size: 12px;
        }
      }
    }
  }
}
</style> 