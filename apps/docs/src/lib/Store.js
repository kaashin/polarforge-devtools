import { writable } from 'svelte/store';

/** #registerStore */
export const CustomStore = (() => {
  const store = writable({});
  const customFunction = () => {

  }
  return {
    ...store,
    customFunction
  }
})();