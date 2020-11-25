/**
 * Creates a base definition of the Monaco theme for ARC.
 * This is to be used on the monaco instance:
 * 
 * ```
 * monaco.editor.defineTheme('ArcTheme', generateMonacoArcTheme());
 * ```
 */
export declare function generateMonacoArcTheme(): any;

/**
 * @param monaco The monaco global object
 * @param config The configuration being passed to the monaco editor instance.
 * @returns The copy of the configuration with `theme` property.
 */
export declare function assignTheme(monaco: any, config: any): any;
