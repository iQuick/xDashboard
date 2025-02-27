<script setup lang="ts">
const appInfo = window.xds.getAppInfo()
const version = appInfo.version
</script>

<template>
  <div class="about">
    <div class="logo">
      <img src="/assets/images/icon.png" draggable="false">
    </div>
    <div class="info">
      <div class="title">超级面板</div>
      <div class="version">V{{ version }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 48px;
}

.logo {
  img {
    width: 96px;
    height: 96px;
  }
}

.info {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 24px;
}

.title {
  font-size: 24px;
  color: var(--color-text-primary);
}

.version {
  margin-top: 8px;
  font-size: 16px;
  color: var(--color-text-desc);
}
</style>
