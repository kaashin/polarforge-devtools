import { writable, get } from 'svelte/store';

export function registerStore(name, store, source) {
  // check if the store is actually a store
  if (store.subscribe && typeof store.subscribe === 'function') {
    UnlogStores.update((s) => {
      let entryName = name;

      s = {
        ...s,
        [entryName]: {
          name: entryName,
          store: store,
          source: source,
          history: writable([])
        }
      };

      return s;
    });
  }
}

export const ActiveStoreKey = (() => {
  const store = writable('');
  return { ...store };
})();

export const UnlogStores = (() => {
  const store = writable({});

  return { ...store };
})();

export const UnlogState = (() => {
  const store = writable({
    rewindMode: false
  });
  return { ...store };
})();