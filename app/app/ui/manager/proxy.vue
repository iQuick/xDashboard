<script setup lang="ts">
import {useProxyStoreWithOut} from "../../configs/pinia";
import {storeToRefs} from "pinia";

const proxy = storeToRefs(useProxyStoreWithOut())

</script>

<template>
  <div class="proxy">
    <!-- 启用开关 -->
    <div class="card">
      <div class="switch">
        <div class="label">{{ $t('proxy.enable')}}</div>
        <a-switch v-model:checked="proxy.enable.value"/>
      </div>
    </div>

    <!-- 代理设置 -->
    <div class="card">
      <div class="title">{{ $t('proxy.title.proxy') }}</div>
      <div class="form">
        <div class="item">
          <div class="label">{{ $t('proxy.name.host') }}</div>
          <a-input v-model:value="proxy.host.value" :placeholder="$t('proxy.placeholder.host')"/>
        </div>
        <div class="item">
          <div class="label">{{ $t('proxy.name.port') }}</div>
          <a-input v-model:value="proxy.port.value" :placeholder="$t('proxy.placeholder.port')"/>
        </div>
      </div>
    </div>

    <!-- 认证设置 -->
    <div class="card">
      <div class="title">{{ $t('proxy.title.authentication') }}</div>
      <div class="form">
        <div class="item">
          <div class="label">{{ $t('proxy.name.username') }}</div>
          <a-input v-model:value="proxy.username.value" :placeholder="$t('proxy.placeholder.username')"/>
        </div>
        <div class="item">
          <div class="label">{{ $t('proxy.name.password') }}</div>
          <a-input v-model:value="proxy.password.value" :placeholder="$t('proxy.placeholder.password')"/>
        </div>
      </div>
    </div>

    <!-- 测试按钮 -->
    <div class="footer">
      <a-button type="primary">{{ $t('proxy.test') }}</a-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.proxy {
  max-width: 800px;
  margin: 0 auto;
  padding: 24px;
}

.card {
  background: var(--color-item-color);
  border-radius: 8px;
  padding: 20px 24px;
  margin-bottom: 16px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.03);
  transition: all 0.3s;

  &:hover {
    box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12);
  }
}

.switch {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  color: var(--color-text-primary);
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 20px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.item {
  display: grid;
  grid-template-columns: 120px 1fr;
  align-items: center;
  gap: 16px;
}

.label {
  color: var(--color-text-content);
  font-size: 14px;
}

.footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
  padding: 0 24px;
}

// 响应式布局
@media screen and (max-width: 576px) {
  .container {
    padding: 16px;
  }

  .item {
    grid-template-columns: 1fr;
    gap: 8px;
  }

  .card {
    padding: 16px;
  }
}
</style>
