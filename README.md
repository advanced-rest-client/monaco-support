# Monaco support

A set of helper functions with common logic when working with Monaco editor in ARC components.

This module offers the following exports:

- `MonacoStyles` - a `lit-element` based styles for Monaco editor
- `MonacoLoader` - functions that allows to manage loading Monaco into the global scope and tun the logic after it is loaded
- `MonacoTheme` - very basic theme configuration for ARC
- `MonacoHelper` - additional helper library with common functions.


## Usage

### Installation

```sh
npm install --save @advanced-rest-client/monaco-support
```

### Loading monaco

Monaco uses CSS files import in their ES modules which makes it unusable in pure web environment. The alternative is to load Monaco globally (bad idea but it's a path to move forward) and use the global `monaco` object in the components.

These functions helps to load monaco and recognize when the library is finally loaded:

```javascript
import { MonacoLoader } from '@advanced-rest-client/monaco-support';

const monacoBase = '../node_modules/monaco-editor/';
MonacoLoader.createEnvironment(monacoBase);
await MonacoLoader.loadMonaco(monacoBase);
await MonacoLoader.monacoReady();

// it is safe to load a component
```

### ARC common theme

The `MonacoTheme.assignTheme()` function is to be called when monaco is loaded and preparing configuration for the editor instance.
This check for the current user preference for the dark theme and sets the corresponding theme on the configuration option.

```javascript
let config = /** IStandaloneEditorConstructionOptions */ ({
  minimap: {
    enabled: false,
  },
  tabSize: 2,
  detectIndentation: true,
});
config = MonacoTheme.assignTheme(monaco, config);
```

The `monaco` refers to the global variable loaded to the global scope. The function returns a copy of the configuration object so the original one has to be updated.
