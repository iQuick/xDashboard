<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ArrowLeftOutlined, DeleteOutlined, CloudUploadOutlined, ExclamationCircleOutlined } from '@ant-design/icons-vue'
import { usePluginStoreWithOut } from '@/plugins/store/plugin'

const route = useRoute()
const router = useRouter()
const pluginStore = usePluginStoreWithOut()


const pluginId = computed(() => route.params.id as string)
const plugin = computed(() => pluginStore.getPluginById(pluginId.value))
const showUninstallModal = ref(false)

onMounted(() => {
  pluginStore.fetchPlugins()
})

const goBack = () => {
  router.push('/manager/plugin')
}

const uninstallPlugin = () => {
  showUninstallModal.value = true
}

const handleUninstallConfirm = () => {
  if (plugin.value) {
    pluginStore.uninstallPlugin(plugin.value.id)
    showUninstallModal.value = false
    // 卸载后返回列表页
    setTimeout(() => {
      goBack()
    }, 500)
  }
}

const handleUninstallCancel = () => {
  showUninstallModal.value = false
}

const updatePlugin = () => {
  if (plugin.value) {
    pluginStore.updatePlugin(plugin.value.id)
  }
}
</script>

<template>
  <div class="plugin-detail">
    <div class="detail-header">
      <a-button type="text" class="back-btn" @click="goBack">
        <template #icon><arrow-left-outlined /></template>
        返回
      </a-button>
    </div>

    <div v-if="plugin" class="detail-content">
      <div class="plugin-info-card">
        <div class="plugin-main-info">
          <div class="plugin-logo-wrapper">
            <img v-if="plugin.logo" :src="plugin.logo" class="plugin-logo" />
            <span v-else class="plugin-icon">🧩</span>
          </div>
          
          <div class="plugin-details">
            <div class="plugin-name-wrapper">
              <h1 class="plugin-name">{{ plugin.name }}</h1>
              <span class="plugin-type-tag" :class="plugin.source === 'system' ? 'system' : 'user'">
                {{ plugin.source === 'system' ? '系统插件' : '用户插件' }}
              </span>
            </div>
            
            <div class="plugin-meta">
              <span class="meta-item">
                <span class="meta-label">作者:</span>
                <span class="meta-value">{{ plugin.author }}</span>
              </span>
              <span class="meta-item">
                <span class="meta-label">版本:</span>
                <span class="meta-value">v{{ plugin.version }}</span>
              </span>
            </div>
            
            <div class="plugin-description">
              <p class="description-text">{{ plugin.description }}</p>
            </div>
          </div>
        </div>

        <div class="plugin-actions">
          <a-button
            type="primary"
            size="large"
            class="action-btn update-btn"
            @click="updatePlugin"
          >
            <template #icon><cloud-upload-outlined /></template>
            {{$t("update_plugin")}}
          </a-button>
          
          <a-button
            danger
            size="large"
            class="action-btn uninstall-btn"
            @click="uninstallPlugin"
          >
            <template #icon><delete-outlined /></template>
            {{ $t("uninstall_plugin") }}
          </a-button>
        </div>
      </div>
    </div>

    <div v-else class="not-found">
      <div class="not-found-content">
        <h2>插件未找到</h2>
        <p>无法找到 ID 为 "{{ pluginId }}" 的插件</p>
        <a-button type="primary" @click="goBack">返回插件列表</a-button>
      </div>
    </div>

    <!-- 卸载确认对话框 -->
    <a-modal
      v-model:open="showUninstallModal"
      :title="$t('uninstall_confirm')"
      :width="240"
      :closable="false"
      centered
      @ok="handleUninstallConfirm"
      @cancel="handleUninstallCancel"
    >
      <template #footer>
        <a-button @click="handleUninstallCancel">{{ $t('cancel') }}</a-button>
        <a-button type="primary" danger @click="handleUninstallConfirm">{{$t("uninstall_confirm")}}</a-button>
      </template>
      
      <div class="modal-warning-row">
        <exclamation-circle-outlined class="warning-icon-small" />
        <p class="modal-warning">{{ $t("uninstall_warring") }}</p>
      </div>
    </a-modal>
  </div>
</template>

<style lang="scss" scoped>
.plugin-detail {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  
  .detail-header {
    margin-bottom: 24px;
    
    .back-btn {
      color: var(--color-text-content);
      font-size: 14px;
      padding: 4px 12px;
      height: 32px;
      
      &:hover {
        color: var(--color-primary);
      }
      
      :deep(.anticon) {
        font-size: 14px;
      }
    }
  }
  
  .detail-content {
    .plugin-info-card {
      background: var(--color-item-color);
      border: 1px solid var(--color-border);
      border-radius: 12px;
      padding: 32px;
      display: flex;
      gap: 32px;
      
      @media (max-width: 800px) {
        flex-direction: column;
      }
      
      .plugin-main-info {
        display: flex;
        gap: 32px;
        flex: 1;
        min-width: 0;
        
        @media (max-width: 768px) {
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        
        .plugin-logo-wrapper {
          flex-shrink: 0;
          
          .plugin-logo {
            width: 120px;
            height: 120px;
            object-fit: contain;
            border-radius: 16px;
            border: 1px solid var(--color-border);
          }
          
          .plugin-icon {
            display: block;
            width: 120px;
            height: 120px;
            line-height: 120px;
            font-size: 64px;
            text-align: center;
            background: var(--color-background);
            border-radius: 16px;
            border: 1px solid var(--color-border);
          }
        }
        
        .plugin-details {
          flex: 1;
          min-width: 0;
          
          .plugin-name-wrapper {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 8px;
            flex-wrap: wrap;
          }
          
          .plugin-name {
            margin: 0;
            color: var(--color-text-primary);
            font-size: 28px;
            font-weight: 600;
            line-height: 1.2;
          }
          
          .plugin-type-tag {
            display: inline-block;
            padding: 2px 8px;
            font-size: 11px;
            border-radius: 10px;
            font-weight: 500;
            line-height: 1.4;
            
            &.system {
              color: #1890ff;
              border: 1px solid rgba(24, 144, 255, 0.4);
            }
            
            &.user {
              color: #52c41a;
              border: 1px solid rgba(82, 196, 26, 0.4);
            }
          }
          
          .plugin-meta {
            display: flex;
            flex-wrap: wrap;
            gap: 16px;
            margin-bottom: 16px;
            
            .meta-item {
              display: flex;
              align-items: center;
              gap: 4px;
              
              .meta-label {
                color: var(--color-text-desc);
                font-size: 14px;
              }
              
              .meta-value {
                color: var(--color-text-content);
                font-size: 14px;
                font-weight: 500;
              }
            }
          }
          
          .plugin-description {
            .description-text {
              margin: 0;
              color: var(--color-text-content);
              font-size: 14px;
              line-height: 1.6;
            }
          }
        }
      }
      
      .plugin-actions {
        display: flex;
        flex-direction: column;
        gap: 12px;
        justify-content: flex-start;
        flex-shrink: 0;
        
        @media (max-width: 800px) {
          flex-direction: row;
          padding-top: 24px;
          border-top: 1px solid var(--color-border);
        }
        
        .action-btn {
          height: 40px;
          font-size: 15px;
          padding: 0 24px;
          border-radius: 8px;
          font-weight: 500;
          white-space: nowrap;
          
          @media (max-width: 800px) {
            flex: 1;
          }
          
          :deep(.anticon) {
            font-size: 16px;
          }
        }
        
        .uninstall-btn {
          &:hover {
            background-color: rgba(255, 77, 79, 0.1);
            border-color: var(--color-error);
          }
        }
      }
    }
  }
  
  .not-found {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 400px;
    
    .not-found-content {
      text-align: center;
      
      h2 {
        margin: 0 0 12px;
        color: var(--color-text-primary);
        font-size: 24px;
        font-weight: 500;
      }
      
      p {
        margin: 0 0 24px;
        color: var(--color-text-desc);
        font-size: 14px;
      }
    }
  }
}

.uninstall-modal-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
  padding: 12px 0 8px;
  text-align: center;
  
  .warning-icon {
    font-size: 48px;
    color: #faad14;
  }
  
  .modal-message {
    margin: 0;
    color: var(--color-text-primary);
    font-size: 14px;
    line-height: 1.6;
    
    strong {
      color: var(--color-text-primary);
      font-weight: 600;
    }
  }
}

.modal-warning-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 0 0 12px;
  
  .warning-icon-small {
    font-size: 16px;
    color: #faad14;
    flex-shrink: 0;
  }
  
  .modal-warning {
    margin: 0;
    color: var(--color-text-desc);
    font-size: 13px;
  }
}
</style>
