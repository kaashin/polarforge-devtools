import { writable } from 'svelte/store';

export const EditorHighlightedRow = writable('');

/**
 * @description Evaluates the data type of the object
 * @param {object | number | string | []} object 
 */
export function evalDataType(object) {
  if (typeof object === 'object') {
    if (Array.isArray(object)) {
      return 'array'
    } else {
      return 'object'
    }
  } else {
    return typeof object
  }
}

export function checkIsObject(object) {
  return typeof object === 'object' && !Array.isArray(object)
}