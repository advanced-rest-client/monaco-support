/**
 * Detects editor language based on the content type header value 
 * @param {string} mime The current content type of the request
 * @returns {string|undefined} THe language, if detected.
 */
export function detectLanguage(mime) {
  if (!mime || typeof mime !== 'string') {
    return undefined;
  }
  let ct = mime;
  const semicolon = ct.indexOf(';');
  if (semicolon !== -1) {
    ct = ct.substr(0, semicolon);
  }
  switch (ct) {
    case 'application/json':
    case 'application/x-json': return 'json';
    case 'application/svg+xml':
    case 'application/xml': return 'xml';
    case 'text/html': return 'html';
    case 'text/css': return 'css';
    default: return undefined;
  }
}
