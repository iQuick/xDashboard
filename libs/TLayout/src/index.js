

// 导入样式
import 'uno.css';
import '@unocss/reset/tailwind.css';
import './assets/styles/layout.scss';
import './assets/styles/tlayout.scss';

export default function TLayoutPlugin(options = {}) {
  const virtualModuleId = 'virtual:tlayout';
  const resolvedVirtualModuleId = '\0' + virtualModuleId;
  return {
    name: 'vite-tlayout',
    // Vite 插件的 API
    apply: 'serve', // 或 'build'，根据需要选择
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId;
      }
      return null;
    },
    buildStart() {
      // 插件启动时的逻辑
      console.log('插件已启动');
    },
    configResolved(config) {
        // 这里可以访问 Vite 配置
        console.log('Vite 插件加载');
    },
    transformIndexHtml(html) {
      return html.replace(
        '</head>',
        `<link rel="stylesheet" href="/node_modules/tlayout/dist/style.css"></head>`
      );
    },
  }
}

// 导入组件
import TLayoutComponent from './components/TLayout.vue';

const tlayout = {
  install(app){
    app.component('TLayout', TLayoutComponent)
  }
}

export {
  tlayout,
  TLayoutComponent as TLayout
}


  