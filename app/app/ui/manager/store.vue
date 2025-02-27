<script setup lang="ts">
import { ref } from 'vue'
import { DownloadOutlined as IconDownload, SyncOutlined, DeleteOutlined } from '@ant-design/icons-vue'

interface Plugin {
  id: string
  icon: string
  title: string
  description: string
  version: string
  author: string
  downloads: number
  hasUpdate?: boolean
  latestVersion?: string
  installed?: boolean
}

const plugins = ref<Plugin[]>([
  {
    id: 'demo-plugin',
    icon: '🔌',
    title: 'Demo Plugin',
    description: '这是一个示例插件，展示插件的基本功能',
    version: '1.0.0',
    author: 'XDash Team',
    downloads: 1234,
    installed: true,
    hasUpdate: true,
    latestVersion: '1.1.0'
  },
  {
    id: 'network-monitor',
    icon: '📊',
    title: '网络监控',
    description: '实时监控网络状态、流量统计等',
    version: '1.2.0',
    author: 'NetWatch',
    downloads: 3456
  },
  {
    id: 'network-monitor',
    icon: '📊',
    title: '网络监控',
    description: '实时监控网络状态、流量统计等',
    version: '1.2.0',
    author: 'NetWatch',
    downloads: 3456
  },
  {
    id: 'network-monitor',
    icon: '📊',
    title: '网络监控',
    description: '实时监控网络状态、流量统计等',
    version: '1.2.0',
    author: 'NetWatch',
    downloads: 3456
  },
  {
    id: 'network-monitor',
    icon: '📊',
    title: '网络监控',
    description: '实时监控网络状态、流量统计等',
    version: '1.2.0',
    author: 'NetWatch',
    downloads: 3456
  },
  {
    id: 'network-monitor',
    icon: '📊',
    title: '网络监控',
    description: '实时监控网络状态、流量统计等',
    version: '1.2.0',
    author: 'NetWatch',
    downloads: 3456
  }
])

const handlePluginAction = (plugin: Plugin) => {
  if (plugin.installed && plugin.hasUpdate) {
    // 执行更新操作
    console.log('更新插件:', plugin.id)
  } else {
    // 执行安装操作
    console.log('安装插件:', plugin.id)
  }
}

const uninstallPlugin = (e: Event, plugin: Plugin) => {
  e.stopPropagation()  // 阻止事件冒泡
  console.log('卸载插件:', plugin.id)
}
</script>

<template>
  <div class="store">
    <div class="grid">
      <div v-for="plugin in plugins" 
           :key="plugin.id" 
           class="card"
      >
        <div v-if="plugin.installed" class="card-actions">
          <a-button 
            type="text"
            class="uninstall-btn"
            @click="(e) => uninstallPlugin(e, plugin)"
          >
            <template #icon><delete-outlined /></template>
          </a-button>
        </div>
        <div v-if="plugin.installed && plugin.hasUpdate" 
             class="update-badge"
             :title="`可更新到 ${plugin.latestVersion}`"
        >
          可更新
        </div>
        <div class="header">
          <div class="icon">{{ plugin.icon }}</div>
          <h3 class="title">{{ plugin.title }}</h3>
        </div>
        <div class="content">
          <p class="desc">{{ plugin.description }}</p>
          <div class="meta">
            <span class="author">{{ plugin.author }}</span>
            <span class="version">v{{ plugin.version }}</span>
          </div>
        </div>
        <div class="actions">
          <a-button 
            :type="plugin.installed && plugin.hasUpdate ? 'default' : 'primary'"
            :class="['action-btn', { 'update-btn': plugin.installed && plugin.hasUpdate }]"
            @click="handlePluginAction(plugin)"
          >
            <template #icon>
              <icon-download v-if="!plugin.installed"/>
              <sync-outlined v-else-if="plugin.hasUpdate" />
            </template>
            {{ plugin.installed && plugin.hasUpdate ? '更新' : '安装' }}
          </a-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.store {
  padding: 24px;
  
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 24px;
    
    .card {
      display: flex;
      flex-direction: column;
      padding: 20px;
      background: var(--color-item-color);
      border: 1px solid var(--color-border);
      border-radius: 8px;
      transition: var(--transition-all);
      position: relative;
      
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        border: 1px solid var(--color-border-hover);
      }
      
      .card-actions {
        position: absolute;
        top: 12px;
        right: 12px;
        z-index: 1;
        
        .uninstall-btn {
          opacity: 0;
          color: var(--color-text-desc);
          padding: 4px;
          height: 28px;
          border-color: transparent;
          
          &:hover {
            opacity: 1;
            color: var(--color-error);
            border-color: var(--color-error);
            background-color: rgba(255, 77, 79, 0.1);
          }
          
          .anticon {
            font-size: 14px;
          }
        }
      }
      
      &:hover {
        .card-actions .uninstall-btn {
          opacity: 0.8;
        }
      }
      
      .update-badge {
        position: absolute;
        top: 0;
        left: 0;
        background: var(--color-warning);
        color: #fff;
        font-size: 12px;
        padding: 4px 12px;
        border-top-left-radius: 8px;
        border-bottom-right-radius: 8px;
        z-index: 1;
        font-weight: 500;
        
        &::after {
          content: '';
          position: absolute;
          inset: 0;
          background: inherit;
          border-top-left-radius: 8px;
          border-bottom-right-radius: 8px;
          opacity: 0.15;
          animation: pulse 2s infinite;
        }
      }
      
      .header {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 16px;
        
        .icon {
          font-size: 32px;
        }
        
        .title {
          margin: 0;
          color: var(--color-text-primary);
          font-size: 18px;
          font-weight: 500;
        }
      }
      
      .content {
        flex: 1;
        
        .desc {
          margin: 0 0 16px;
          color: var(--color-text-desc);
          font-size: 14px;
          line-height: 1.5;
        }
        
        .meta {
          display: flex;
          gap: 16px;
          color: var(--color-text-desc);
          font-size: 12px;
          
          .author {
            display: flex;
            align-items: center;
          }
          
          .version {
            display: flex;
            align-items: center;
          }
        }
      }
      
      .actions {
        margin-top: 16px;
        display: flex;
        justify-content: flex-end;
        
        .action-btn {
          padding: 4px 16px;
          height: 32px;
          border-radius: 16px;
          font-size: 14px;
          
          &.update-btn {
            background: var(--color-warning);
            border-color: var(--color-warning);
            color: #fff;
            
            &:hover {
              background: #e8b339;
              border-color: #e8b339;
            }
            
            .anticon {
              color: #fff;
            }
          }
          
          &:hover {
            transform: translateY(-1px);
          }
          
          .anticon {
            font-size: 14px;
          }
        }
      }
    }
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.2;
  }
  70% {
    transform: scale(1.1);
    opacity: 0;
  }
  100% {
    transform: scale(1.1);
    opacity: 0;
  }
}
</style>
