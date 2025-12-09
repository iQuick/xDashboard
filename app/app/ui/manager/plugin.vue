<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { DeleteOutlined, PlusOutlined, DownOutlined } from '@ant-design/icons-vue'
import { usePluginStoreWithOut } from '../../plugins/store/plugin'
import { storeToRefs } from 'pinia'

const pluginStore = usePluginStoreWithOut()
const { plugins } = storeToRefs(pluginStore)

const expandedPlugins = ref<Set<string>>(new Set())

onMounted(() => {
  pluginStore.fetchPlugins()
})

const toggleExpand = (pluginId: string) => {
  if (expandedPlugins.value.has(pluginId)) {
    expandedPlugins.value.delete(pluginId)
  } else {
    expandedPlugins.value.add(pluginId)
  }
}

const createInstance = (id: string) => {
  pluginStore.createInstance(id)
  setTimeout(() => pluginStore.fetchPlugins(), 500) // Refresh list
}

const deleteInstance = (id: string, instanceId: string) => {
  // TODO: Implement delete logic in store
  console.log('Remove plugin instance :', id, instanceId)
}

const uninstallPlugin = (id: string) => {
  pluginStore.uninstallPlugin(id)
}

const updatePlugin = (id: string) => {
  // TODO: 执行插件更新
  console.log('Update plugin:', id)
}

const toggleInstance = (instanceId: string, isOpen: boolean) => {
  if (isOpen) {
    window.xds.pluginActive(instanceId)
  } else {
    window.xds.pluginDeactivate(instanceId)
  }
}
</script>

<template>
  <div class="plugin-manager">
    <div class="plugin-list">
      <div v-for="plugin in plugins" 
           :key="plugin.id" 
           class="plugin-item"
      >
        <div v-if="plugin.hasUpdate" 
             class="update-badge"
             @click="updatePlugin(plugin.id)"
             :title="`点击更新到 ${plugin.latestVersion}`"
        >
          更新 {{ plugin.latestVersion }}
        </div>
        <div class="info-card">
          <div class="plugin-header">
            <div class="plugin-info">
              <div class="icon-wrapper">
                <img v-if="plugin.logo" :src="plugin.logo" class="plugin-logo" />
                <span v-else class="icon">{{ plugin.icon || '🧩' }}</span>
              </div>
              <div class="details">
                <h3 class="title">
                  {{ plugin.title }}
                </h3>
                <p class="desc">{{ plugin.description }}</p>
                <div class="meta">
                  <span class="author">{{ plugin.author }}</span>
                  <span class="version">v{{ plugin.version }}</span>
                </div>
              </div>
            </div>
            <div class="actions">
              <a-button 
                v-if="plugin.source !== 'built-in'"
                type="text"
                danger
                class="uninstall-btn"
                @click="uninstallPlugin(plugin.id)"
              >
                <template #icon><delete-outlined /></template>
                卸载插件
              </a-button>
              <a-button 
                type="link"
                class="create-btn"
                @click="createInstance(plugin.id)"
              >
                <template #icon><plus-outlined /></template>
                创建实例
              </a-button>
            </div>
          </div>
        </div>
        
        <div class="instances-card" v-if="expandedPlugins.has(plugin.id) && plugin.instances.length">
          <div class="instances">
            <div v-for="instance in plugin.instances"
                 :key="instance.id"
                 class="instance-item"
            >
              <div class="instance-info">
                <span class="name">{{ instance.name }}</span>
                <a-switch class="instance-active"
                  size="small"
                  v-model:checked="instance.isOpen"
                  @change="(checked) => toggleInstance(instance.id, checked)"
                />
              </div>
              <a-button 
                type="text"
                class="delete-btn"
                @click="deleteInstance(plugin.id, instance.id)"
              >
                <template #icon><delete-outlined /></template>
              </a-button>
            </div>
          </div>
          
          <!-- <div class="empty" v-else>
            暂无创建的插件实例
          </div> -->
        </div>
        
        <div class="expand-section" @click="toggleExpand(plugin.id)" v-if="plugin.instances.length">
          <span class="expand-text">{{ expandedPlugins.has(plugin.id) ? '收起' : '展开' }}</span>
          <down-outlined 
            class="expand-icon"
            :class="{ expanded: expandedPlugins.has(plugin.id) }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.plugin-manager {
  padding: 24px;
  
  .plugin-list {
    .plugin-item {
      position: relative;
      margin-bottom: 24px;
      background: var(--color-item-color);
      border: 1px solid var(--color-border);
      border-radius: 8px;
      transition: var(--transition-all);
      
      &:hover {
        border-color: var(--color-border-hover);
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
        cursor: pointer;
        transition: all 0.2s ease;
        
        &:hover {
          background: #e8b339;
        }
        
        &:active {
          transform: scale(0.98);
        }
        
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
      
      .info-card {
        padding: 20px;
        
        .plugin-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          width: 100%;
          
          .plugin-info {
            display: flex;
            gap: 16px;
            flex: 1;
            cursor: pointer;
            align-items: center;
            
            .icon-wrapper {
              position: relative;
              display: flex;
              align-items: center;
              height: 100%;
              
              .icon {
                font-size: 32px;
                line-height: 1;
              }
              
              .plugin-logo {
                width: 48px;
                height: 48px;
                object-fit: contain;
                border-radius: 8px;
              }
            }
            
            .details {
              flex: 1;
              padding: 4px 0;
              
              .title {
                margin: 0 0 8px;
                color: var(--color-text-primary);
                font-size: 16px;
                font-weight: 500;
              }
              
              .desc {
                margin: 0 0 8px;
                color: var(--color-text-desc);
                font-size: 14px;
              }
              
              .meta {
                display: flex;
                gap: 12px;
                
                .version,
                .author {
                  color: var(--color-text-desc);
                  font-size: 13px;
                }
              }
            }
          }
          
          .actions {
            display: flex;
            flex-direction: column;
            gap: 8px;
            align-items: flex-end;
            
            .uninstall-btn,
            .create-btn {
              height: 28px;
              font-size: 13px;
              padding: 4px 8px;
              
              :deep(.anticon) {
                font-size: 13px;
              }
            }
            
            .create-btn {
              color: var(--color-primary);
              
              &:hover {
                color: var(--color-primary-hover);
              }
            }
            
            .uninstall-btn {
              opacity: 0.85;
              
              &:hover {
                opacity: 1;
                border-color: var(--color-error);
                background-color: rgba(255, 77, 79, 0.1);
              }
              
              :deep(.anticon) {
                font-size: 13px;
              }
            }
          }
        }
      }
      
      .instances-card {
        padding: 16px 20px;
        border-top: 1px solid var(--color-border);
        
        .instances {
          .instance-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 12px;
            border-radius: 4px;
            transition: var(--transition-all);
            
            &:not(:last-child) {
              border-bottom: 1px solid var(--color-split);
            }
            
            .instance-info {
              .name {
                margin-right: 12px;
                color: var(--color-text-content);
                font-size: 14px;
              }
            }
            .instance-active {
              margin-left: 8px;
            }
            
            .delete-btn {
              opacity: 0;
              border-color: transparent;
            }
            
            &:hover {
              .delete-btn {
                opacity: 1;
              }
              .delete-btn:hover {
                color: var(--color-error);
                border-color: var(--color-error);
                background-color: rgba(255, 77, 79, 0.1);
              }
            }
              
            :deep(.anticon) {
              font-size: 14px;
            }
          }
        }
        
        .empty {
          padding: 24px;
          text-align: center;
          color: var(--color-text-desc);
        }
      }
      
      .expand-section {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
        padding: 8px;
        color: var(--color-text-desc);
        cursor: pointer;
        border-top: 1px solid var(--color-border);
        transition: var(--transition-all);
        
        &:hover {
          color: var(--color-primary);
          background-color: var(--color-item-color);
        }
        
        .expand-text {
          font-size: 14px;
        }
        
        .expand-icon {
          font-size: 12px;
          transition: transform 0.2s;
          
          &.expanded {
            transform: rotate(180deg);
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
