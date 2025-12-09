interface Window {
  main: {
    __event__: Record<string, unknown>;
    hooks: Record<string, unknown>;
    pluginCreate: (name: string) => void;
    pluginActive: (id: string) => void;
    pluginDeactivate: (id: string) => void;
    mainMaximize: () => void;
    mainMinimize: () => void;
    mainClose: () => void;
    getAppInfo: () => any;
    getPluginInfo: (id: string) => any;
    getPlugins: () => any[];
  }
  plugin: {
    __event__: Record<string, unknown>;
    hooks: Record<string, unknown>;
    maximize: (id: string) => void;
    minimize: (id: string) => void;
    close: (id: string) => void;
    getPluginInfo: (id: string) => any;
  }
} 