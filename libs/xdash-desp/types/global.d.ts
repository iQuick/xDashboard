interface Window {
  plugin: {
    __event__: Record<string, unknown>;
    hooks: Record<string, unknown>;
    maximize: (id: string) => void;
    minimize: (id: string) => void;
    close: (id: string) => void;
    getPluginInfo: (id: string) => any;
  }
} 