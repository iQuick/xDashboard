# Plugin Manager Refactor Plan

## Goal
Transition the Plugin Manager from a hardcoded UI to a dynamic system that reads installed plugins from the file system (`userData/plugins`) and manages state using Pinia.

## User Review Required
> [!IMPORTANT]
> This change involves modifying the Main Process to read files and exposing this data via IPC.
> The `plugin.vue` UI will be completely refactored to use the new data source.

## Proposed Changes

### 1. Main Process (`app/app/core`)

#### [MODIFY] [plugin.ts](file:///e:/Works/MProject/xdashboard/app/app/core/plugin.ts)
- Add `getPlugins()` function:
  - Scans `constants.pluginPath` (User plugins) AND `public/plugins` (Built-in plugins).
  - Reads `setting.json` for each folder (contains info and default config).
  - Returns a merged list of available plugins.

#### [MODIFY] [core.ts](file:///e:/Works/MProject/xdashboard/app/app/core/core.ts)
- Add IPC handler for `main:get:plugins` to call `getPlugins()`.


### 2. Renderer Process (`app/app/ui`)

#### [NEW] [store/plugin.ts](file:///e:/Works/MProject/xdashboard/app/app/ui/store/plugin.ts)
- Create a Pinia store `usePluginStore`.
- Actions: `fetchPlugins()`, `installPlugin()`, `uninstallPlugin()`.
- State: `plugins` list.

#### [MODIFY] [manager/plugin.vue](file:///e:/Works/MProject/xdashboard/app/app/ui/manager/plugin.vue)
- Remove hardcoded `plugins` ref.
- Use `usePluginStore` to display data.
- Update buttons to call store actions.

## Verification Plan

### Manual Verification
1.  **Mock Data**: creating a dummy plugin folder in `userData/plugins` (if none exists) to test scanning.
2.  **UI Check**: Verify the `plugin.vue` displays the plugin found on disk.
3.  **Action Check**: Verify "Uninstall" (if implemented) removes the folder (or mocked log).
