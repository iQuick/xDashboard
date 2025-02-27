interface Window {
  xds: {
    __event__: Record<string, unknown>;
    hooks: Record<string, unknown>;
    pluginCreate: (name: string) => void;
    pluginActive: (id: string) => void;
    pluginDeactivate: (id: string) => void;
    mainMaximize: () => void;
    mainMinimize: () => void;
    mainClose: () => void;
    getAppInfo: () => any;
    getWindowInfo: (id: string) => any;
  }
  plugin: {
    __event__: Record<string, unknown>;
    hooks: Record<string, unknown>;
  }
} 