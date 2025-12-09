# xDashboard 项目分析

## 1. 应用功能与设计思路 (Application Features & Design)

xDashboard 是一个基于 **Electron + Vue 3** 的模块化桌面仪表盘应用。其核心设计思想是通过**插件化**扩展功能，使用多窗口模型展示不同的仪表盘组件。

### 1.1 核心架构 (Core Architecture)
- **多窗口插件系统**: 
  - 每个插件实例（Widgets）运行在独立的 `BrowserWindow` 中。
  - 这种设计保证了插件的独立性，避免单个插件崩溃影响整个应用。
  - 通过 `app/app/core/plugin.ts` 动态创建窗口，支持自定义大小、位置和透明度 (`vibrancy: "hud"`).
- **主进程管理 (Main Process)**:
  - 位于 `app/app/core`，负责全局窗口管理 (`windows` Map)。
  - 处理系统托盘 (`tray.ts`) 和应用生命周期。
  - 提供统一的 IPC 接口 (`xds-api`) 供插件调用系统功能（如窗口控制、应用信息获取）。

### 1.2 插件机制 (Plugin System)
- **数据驱动**: 插件配置通过 JSON 文件管理。
- **生命周期**: 支持插件的安装 (`local-install`)、创建 (`plugin-create`)、激活和销毁。
- **安全与隔离**: 插件运行在 Node 集成环境中 (`nodeIntegration: true`)，允许访问底层系统资源。

### 1.3 UI 设计 (UI Design)
- **组件库分离**: 核心 UI 组件被提取到 `libs/xdash-desp`，实现了业务逻辑与界面风格的解耦。
- **原子化样式**: 全面使用 **UnoCSS** 进行样式开发，提供轻量且高性能的界面渲染。

---

## 2. 技术栈分析 (Tech Stack Analysis)

本部分基于 `app/package.json` 分析生成。

### 核心框架 (Core Frameworks)
- **Electron**: `^28.2.1` - 用于构建跨平台桌面应用程序的框架。
- **Vue 3**: `^3.4.37` - 渐进式 JavaScript 框架，用于构建用户界面。
- **Vite**: `5.4.1` - 下一代前端构建工具，提供极速的开发服务器和构建。

### 编程语言 (Languages)
- **TypeScript**: `^5.3.3` - JavaScript 的超集，提供静态类型检查。

### UI 组件与样式 (UI & Styling)
- **Ant Design Vue**: `^4.2.3` - 基于 Vue 3 的企业级 UI 组件库。
- **UnoCSS**: `^0.58.0` - 即时原子化 CSS 引擎，高性能且灵活。
- **Sass**: `^1.69.5` - 成熟、稳定、强大的 CSS 扩展语言。
- **@ant-design/icons**: `^5.3.0` - Ant Design 图标库。

### 状态管理 (State Management)
- **Pinia**: `^2.1.7` - Vue 的官方状态管理库，替代 Vuex。
- **pinia-plugin-persistedstate**: `^3.2.3` - Pinia 插件，用于持久化存储状态。

### 路由与国际化 (Routing & i18n)
- **Vue Router**: `^4.2.5` - Vue.js 的官方路由。
- **Vue I18n**: `^9.8.0` - Vue.js 的国际化插件。

### 工具库与插件 (Utilities & Plugins)
- **VueUse**: `^10.7.0` - 基本的 Vue 组合式 API 工具集合。
- **Electron-Vite**: `^1.0.29` - 旨在为 Electron 提供更快、更简单的开发体验的构建工具。
- **Electron-Builder**: `^24.9.1` - 一个完整的解决方案，用于打包和构建 Electron 应用。
- **@electron-toolkit/utils**: `^2.0.1` - Electron 开发工具包实用程序。

### 代码规范 (Linting & Formatting)
- **ESLint**: `^8.56.0` - JavaScript/TypeScript 代码检查工具。
- **Prettier**: `^3.1.1` - 代码格式化工具。

### 项目结构 (Project Structure)
- `app/`: 主应用源代码及配置。
- `libs/`: 共享库或依赖（如 `xdash-desp`）。
- `plugins/`: 插件目录（如 `demo`）。
