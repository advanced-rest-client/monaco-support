/**
 * Creates a base definition of the Monaco theme for ARC.
 * This is to be used on the monaco instance:
 * 
 * ```
 * monaco.editor.defineTheme('ArcTheme', generateMonacoArcTheme());
 * ```
 */
export function generateMonacoArcTheme() {
  let bgColor = getComputedStyle(document.body).getPropertyValue('--code-editor-color').trim();
  if (!bgColor) {
    bgColor = '#F5F5F5';
  }
  const theme = {
    base: 'vs', 
    inherit: true,
    rules: [{ background: bgColor }],
    colors: {
      "editor.background": bgColor,
    },
  };
  return theme;
}

/**
 * @param {any} monaco The monaco global object
 * @param {any} config The configuration being passed to the monaco editor instance.
 * @returns {any} The copy of the configuration with `theme` property.
 */
export function assignTheme(monaco, config) {
  const cnf = { ...config };
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    cnf.theme = "vs-dark";
  } else {
    monaco.editor.defineTheme('ArcTheme', generateMonacoArcTheme());
    cnf.theme = 'ArcTheme';
  }
  return cnf;
}
