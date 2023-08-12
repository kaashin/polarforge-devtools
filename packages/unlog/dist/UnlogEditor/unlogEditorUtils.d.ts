/**
 * @description Evaluates the data type of the object
 * @param {object | number | string | []} object
 */
export function evalDataType(object: object | number | string | []): "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function" | "array";
export function checkIsObject(object: any): boolean;
export const EditorHighlightedRow: import("svelte/store").Writable<string>;
