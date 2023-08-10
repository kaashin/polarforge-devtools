export function registerStore(name: any, store: any, source: any): void;
export const ActiveStoreKey: {
    set(this: void, value: string): void;
    update(this: void, updater: import("svelte/store").Updater<string>): void;
    subscribe(this: void, run: import("svelte/store").Subscriber<string>, invalidate?: ((value?: string | undefined) => void) | undefined): import("svelte/store").Unsubscriber;
};
export const UnlogStores: {
    set(this: void, value: {}): void;
    update(this: void, updater: import("svelte/store").Updater<{}>): void;
    subscribe(this: void, run: import("svelte/store").Subscriber<{}>, invalidate?: ((value?: {} | undefined) => void) | undefined): import("svelte/store").Unsubscriber;
};
export const UnlogState: {
    set(this: void, value: {
        rewindMode: boolean;
    }): void;
    update(this: void, updater: import("svelte/store").Updater<{
        rewindMode: boolean;
    }>): void;
    subscribe(this: void, run: import("svelte/store").Subscriber<{
        rewindMode: boolean;
    }>, invalidate?: ((value?: {
        rewindMode: boolean;
    } | undefined) => void) | undefined): import("svelte/store").Unsubscriber;
};
