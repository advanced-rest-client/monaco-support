/**
 * Creates `window.MonacoEnvironment` that returns a web worker that is a ES module
 * 
 * @param monacoBase Monaco base folder location, e.g. `../node_modules/monaco-editor/`
 */
export declare function createEnvironment(monacoBase: string): void;

/**
* @param url The script URL
* @param isModule Whether the script is ES module. Default to false.
*/
export declare function loadScript(url: string, isModule?: boolean): Promise<void>;

/**
 * Loads monaco to the global scope.
 * 
 * @param {string} monacoBase Monaco base folder location, e.g. `../node_modules/monaco-editor/`
 * @returns {Promise<void>} Resolved when all scripts are reported to be loaded
 */
export declare function loadMonaco(monacoBase: string): Promise<void>;

/**
 * Awaits until monaco is fully loaded into the document.
 */
export declare function monacoReady(): Promise<void>;
