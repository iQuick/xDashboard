<script setup lang="ts">
import { ref } from 'vue'

const plugins = ref([
  {
    id: 1,
    name: 'Plugin 1',
    description: 'This is plugin 1 description',
    version: '1.0.0',
    author: 'Author 1',
    enabled: true,
  },
])

const togglePlugin = (plugin: any) => {
  plugin.enabled = !plugin.enabled
}
</script>

<template>
  <div class="plugin">
    <!-- 页面标题 -->
    <div class="header">
      <h2 class="title">{{ $t('plugin.title') }}</h2>
      <a-button type="primary">
        {{ $t('plugin.install') }}
      </a-button>
    </div>

    <!-- 插件列表 -->
    <div class="list">
      <div v-for="plugin in plugins" :key="plugin.id" class="card">
        <div class="card-header">
          <div class="info">
            <h3 class="name">{{ plugin.name }}</h3>
            <span class="version">v{{ plugin.version }}</span>
          </div>
          <a-switch 
            v-model:checked="plugin.enabled"
            @change="() => togglePlugin(plugin)"
          />
        </div>
        
        <p class="description">{{ plugin.description }}</p>
        
        <div class="footer">
          <span class="author">{{ $t('plugin.author') }}: {{ plugin.author }}</span>
          <div class="actions">
            <a-button type="link">{{ $t('plugin.settings') }}</a-button>
            <a-button type="link" danger>{{ $t('plugin.uninstall') }}</a-button>
          </div>
        </div>
      </div>
    </div>

    <!-- 空状态 -->
    <a-empty
      v-if="plugins.length === 0"
      :description="$t('plugin.empty')"
    />
  </div>
</template>

<style lang="scss" scoped>
.plugin {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.title {
  color: var(--color-text-primary);
  font-size: 24px;
  font-weight: 500;
  margin: 0;
}

.list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.card {
  background: var(--color-bg-container);
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.03);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12);
  }

  &-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 12px;
  }
}

.info {
  flex: 1;
  margin-right: 16px;
}

.name {
  color: var(--color-text-primary);
  font-size: 16px;
  font-weight: 500;
  margin: 0 0 4px 0;
}

.version {
  color: var(--color-text-desc);
  font-size: 12px;
}

.description {
  color: var(--color-text-content);
  font-size: 14px;
  line-height: 1.5;
  margin: 0 0 16px 0;
  min-height: 42px;
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
  border-top: 1px solid var(--color-border);
}

.author {
  color: var(--color-text-desc);
  font-size: 13px;
}

.actions {
  display: flex;
  gap: 8px;
}

// 响应式布局
@media screen and (max-width: 768px) {
  .container {
    padding: 16px;
  }

  .list {
    grid-template-columns: 1fr;
  }

  .header {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .card-header {
    flex-direction: column;
    gap: 12px;
  }

  .footer {
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
  }
}
</style>
