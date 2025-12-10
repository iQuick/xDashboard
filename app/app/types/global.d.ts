interface Window {
    main: {
        __event__: Record<string, unknown>;
        hooks: Record<string, unknown>;
        maximize: () => void;
        minimize: () => void;
        show: () => void;
        close: () => void;
        getInfo: () => any;
    }
    plugin: {
        __event__: Record<string, unknown>;
        hooks: Record<string, unknown>;
        install: (id: string) => void;
        uninstall: (id: string) => void;
        getInfo: (id: string) => any;
        getPlugin: (id: string) => any;
        getPlugins: () => any[];
    },
    dock: {
        __event__: Record<string, unknown>;
        hooks: Record<string, unknown>;
        maximize: (id: string) => void;
        minimize: (id: string) => void;
        show: (id: string) => void;
        close: (id: string) => void;
        getSettings: (id: string) => any;
    }
} 