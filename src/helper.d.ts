/**
 * Detects editor language based on the content type header value 
 * @param mime The current content type of the request
 * @returns THe language, if detected.
 */
export declare function detectLanguage(mime: string): string|undefined;
