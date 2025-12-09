# Plugin System Optimization Ideas

## 1. UI/UX Improvements

### 1.1 DashBoard Layout (Grid System)
- **Current**: List view of plugins and nested instances in settings.
- **Idea**: Implement a drag-and-drop grid layout for the desktop (like Windows Widgets or MacOS Dashboard).
- **Implementation**:
  - Use a grid library (e.g., `vue-grid-layout`) to allow users to arrange widget instances visually.
  - "Edit Mode" to resize/move widgets.

### 1.2 Plugin Store (Marketplace)
- **Current**: Hardcoded plugin list in `plugin.vue`.
- **Idea**: Create a real "Store" tab fetching a remote JSON manifest.
- **Features**:
  - Categories (System, Clock, Weather, Tools).
  - Search and Sort (Popularity, Newest).
  - One-click install (Download zip -> Unzip to `userData/plugins`).

### 1.3 Instance Configuration UI
- **Current**: Just an On/Off switch.
- **Idea**: Dynamic configuration forms generated from `plugin.json` schema.
- **Implementation**:
  - Plugins define `configSchema` (like VS Code settings).
  - UI renders inputs (toggle, slider, color picker) allowing users to customize instance appearance without coding.

### 1.4 Visual Preview
- **Current**: Emoji icons.
- **Idea**: Screenshots or live previews of widgets in the manager list.

## 2. Logic & Architecture Improvements

### 2.1 Instance Isolation & Communication (Sandboxing)
- **Current**: `nodeIntegration: true` (High Security Risk).
- **Optimization**:
  - **Disable Node Integration**: Use `contextBridge` to expose safe APIs.
  - **Sandbox**: Enable `sandbox: true` for renderer processes.
  - **IPC Bridge**: Create a standard `xds` API object in window global scope.
  
### 2.2 Shared State Management (Data Sync)
- **Current**: Independent instances.
- **Optimization**:
  - **Shared Store**: Allow plugins to share data (e.g., a "Weather Provider" plugin finding data, "Weather Display" widget showing it).
  - **Global Event Bus**: `xds.on('event', cb)` to allow plugin-to-plugin communication.

### 2.3 Hot Reloading & Dev Experience
- **Current**: Restart app to load plugins?
- **Optimization**:
  - File watcher on `plugins` directory to auto-reload changed plugins without restarting the main app.
  - "Developer Mode" for plugins with inspection tools.

### 2.4 Resource Management
- **Current**: Separate process per window (Electron default).
- **Optimization**:
  - **Hidden Background Process**: One shared invisible window for logic-heavy plugins, lightweight views for UI.
  - **Lazy Loading**: Only load plugin resources when the widget is visible.

## 3. Specific Code Refactors

- **`plugin.vue`**: 
  - Move hardcoded data to a Pinia store (`usePluginStore`).
  - Implement real IPC calls to `main` process for `createInstance`, `deleteInstance`.
- **`plugin.ts`**:
  - Add specific validation for `plugin.json` structure.
  - Implement `uninstall` logic (delete folder).
