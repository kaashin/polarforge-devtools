/** @typedef {typeof __propDef.props}  UnlogEditorProps */
/** @typedef {typeof __propDef.events}  UnlogEditorEvents */
/** @typedef {typeof __propDef.slots}  UnlogEditorSlots */
export default class UnlogEditor extends SvelteComponentTyped<{
    store?: import("svelte/store").Writable<{}> | undefined;
    history?: import("svelte/store").Writable<never[]> | undefined;
    activeStoreKey?: string | undefined;
    contentOverride?: null | undefined;
    content?: {
        text: string;
        json: string;
    } | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type UnlogEditorProps = typeof __propDef.props;
export type UnlogEditorEvents = typeof __propDef.events;
export type UnlogEditorSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        store?: import("svelte/store").Writable<{}> | undefined;
        history?: import("svelte/store").Writable<never[]> | undefined;
        activeStoreKey?: string | undefined;
        contentOverride?: null | undefined;
        content?: {
            text: string;
            json: string;
        } | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
