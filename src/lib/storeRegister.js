import { writable } from "svelte/store"

export function registerStore(name, store, source) {
  // check if the store is actually a store
  if (store.subscribe && typeof store.subscribe === 'function') {
    RegisteredStores.update((s) => {
      let entryName = name;

      s = {
        ...s,
        [entryName]: {
          name: entryName,
          store: store,
          source: source
        }
      }

      return s
    })
  }
}

export const RegisteredStores = (() => {
  const store = writable({});

  return { ...store }
})()