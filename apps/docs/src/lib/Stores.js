import { writable } from 'svelte/store';

export const ExampleModal = (() => {
  const store = writable({
    title: "Example modal",
    description: "",
    steps: [
      {
        instruction: "Start by opening the dev tool panel from the icon at the bottom left.",
        "image": ""
      },
      {
        instruction: "Select the store",
        "image": ""
      },
      {
        instruction: "Inspect and modify values to the store.",
        "image": ""
      }
    ],
  });

  return {
    ...store
  }
})();