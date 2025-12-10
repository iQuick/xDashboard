<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { DeleteOutlined, CodeOutlined, CloudDownloadOutlined, ShopOutlined, ExclamationCircleOutlined } from '@ant-design/icons-vue'
import { usePluginStoreWithOut } from '@/plugins/store/plugin'
import { storeToRefs } from 'pinia'
import { message } from 'ant-design-vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const router = useRouter()
const pluginStore = usePluginStoreWithOut()
const { plugins } = storeToRefs(pluginStore)

const showUninstallModal = ref(false)
const currentUninstallId = ref<string>('')

onMounted(() => {
  console.log('Plugins: onMounted')
  pluginStore.fetchPlugins()
  console.log('Plugins:', plugins)
  
  // 配置消息提示位置
  message.config({
    top: '100px',
  })
})

const uninstallPlugin = (id: string) => {
  currentUninstallId.value = id
  showUninstallModal.value = true
}

const handleUninstallConfirm = () => {
  if (currentUninstallId.value) {
    pluginStore.uninstallPlugin(currentUninstallId.value)
    showUninstallModal.value = false
    currentUninstallId.value = ''
  }
}

const handleUninstallCancel = () => {
  showUninstallModal.value = false
  currentUninstallId.value = ''
}

const updatePlugin = (id: string) => {
  // TODO: 执行插件更新
  console.log('Update plugin:', id)
}

const handlePluginDev = () => {
  message.info(t('functionality_under_development'))
}

const handleLocalInstall = () => {
  message.info(t('functionality_under_development'))
}

const handleStore = () => {
  message.info(t('functionality_under_development'))
}

const navigateToDetail = (id: string) => {
  router.push(`/manager/plugin-detail/${id}`)
}
</script>

<template>
  <div class="plugin-manager">
    <div class="header-actions">
      <a-button size="small" class="action-btn" @click="handleStore">
        <template #icon><shop-outlined /></template>
        {{$t('plugin.store')}}
      </a-button>
      <a-button size="small" class="action-btn" @click="handleLocalInstall">
        <template #icon><cloud-download-outlined /></template>
        {{ $t('plugin.local_install') }}
      </a-button>
      <a-button size="small" class="action-btn" @click="handlePluginDev">
        <template #icon><code-outlined /></template>
        {{ $t('plugin.development') }}
      </a-button>
    </div>
    
    <div class="plugin-grid">
      <div v-for="plugin in plugins" 
           :key="plugin.id" 
           class="plugin-card"
      >
        <div class="card-content" @click="navigateToDetail(plugin.id)">
          <div class="plugin-icon">
            <img :src="plugin.logo" class="plugin-logo" />
          </div>

          <h3 class="plugin-title">{{ plugin.name }}</h3>
          
          <div class="plugin-meta">
            <span class="author">{{ plugin.author }}</span>
            <span class="version">v{{ plugin.version }}</span>
          </div>
          
          <p class="plugin-desc">{{ plugin.description }}</p>

          <div class="card-actions" @click.stop>
            <a-button
                type="text"
                danger
                size="small"
                class="uninstall-btn"
                @click="uninstallPlugin(plugin.id)"
            >
              <template #icon><delete-outlined /></template>
              {{ $t("uninstall")}}
            </a-button>
          </div>
        </div>
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
.plugin-manager {
  padding: 20px;
  
  .header-actions {
    display: flex;
    gap: 8px;
    margin-bottom: 12px;
    
    .action-btn {
      height: 28px;
      padding: 4px 12px;
      font-size: 13px;
      border-radius: 4px;
      background: var(--color-item-color);
      border: 1px solid var(--color-border);
      color: var(--color-text-content);
      transition: var(--transition-all);
      
      &:hover {
        border-color: var(--color-primary);
        color: var(--color-primary);
      }
      
      :deep(.anticon) {
        font-size: 13px;
      }
    }
  }
  
  .plugin-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
    
    // 计算公式: n列 = n*250px + (n-1)*20px(gap) + 40px(padding)
    // 2列: 2*250 + 1*20 + 40 = 560px
    @media (min-width: 560px) {
      grid-template-columns: repeat(2, 1fr);
    }
    
    // 3列: 3*250 + 2*20 + 40 = 830px
    @media (min-width: 830px) {
      grid-template-columns: repeat(3, 1fr);
    }
    
    // 4列: 4*250 + 3*20 + 40 = 1100px
    @media (min-width: 1100px) {
      grid-template-columns: repeat(4, 1fr);
    }
    
    // 5列: 5*250 + 4*20 + 40 = 1370px
    @media (min-width: 1370px) {
      grid-template-columns: repeat(5, 1fr);
    }
    
    .plugin-card {
      position: relative;
      background: var(--color-item-color);
      border: 1px solid var(--color-border);
      border-radius: 12px;
      transition: var(--transition-all);
      overflow: hidden;
      
      &:hover {
        border-color: var(--color-border-hover);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        transform: translateY(-2px);
        
        .card-actions {
          opacity: 1;
          
          .uninstall-btn {
            color: var(--color-error);
          }
        }
      }

      
      .update-badge {
        position: absolute;
        top: 0;
        left: 0;
        background: var(--color-warning);
        color: #fff;
        font-size: 11px;
        padding: 3px 10px;
        border-top-left-radius: 8px;
        border-bottom-right-radius: 8px;
        z-index: 2;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s ease;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
        
        &:hover {
          background: #e8b339;
        }
        
        &:active {
          transform: scale(0.98);
        }
      }
      
      .card-content {
        padding: 16px 8px 0 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        cursor: pointer;
        
        .plugin-icon {
          margin-bottom: 16px;
          
          .icon {
            font-size: 48px;
            line-height: 1;
          }
          
          .plugin-logo {
            width: 64px;
            height: 64px;
            object-fit: contain;
            border-radius: 12px;
          }
        }
        
        .plugin-title {
          margin: 0;
          color: var(--color-text-primary);
          font-size: 16px;
          font-weight: 500;
          line-height: 1.2;
        }
        
        .plugin-desc {
          margin: 0;
          color: var(--color-text-desc);
          font-size: 13px;
          line-height: 1.5;
          min-height: 40px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-align: left;
          width: 100%;
        }
        
        .plugin-meta {
          display: flex;
          gap: 12px;
          justify-content: center;
          margin-bottom: 12px;
          margin-top: 0;
          
          .version,
          .author {
            color: var(--color-text-desc);
            font-size: 12px;
          }
        }
        
        .card-actions {
          width: calc(100% + 16px);
          margin-left: -8px;
          margin-right: -8px;
          margin-top: 12px;
          opacity: 0.6;
          transition: opacity 0.2s;
          
          .uninstall-btn {
            width: 100%;
            height: 36px;
            font-size: 14px;
            transition: all 0.2s;
            border: none;
            border-top: 1px solid var(--color-border);
            border-radius: 0 0 11px 11px;
            color: var(--color-text-content);
            
            &:hover {
              background-color: rgba(255, 77, 79, 0.1);
              color: var(--color-error);
              border-top-color: var(--color-error);
            }
            
            :deep(.anticon) {
              font-size: 13px;
            }
          }
        }
      }
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
