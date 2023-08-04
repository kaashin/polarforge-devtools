/** @typedef {typeof __propDef.props}  UnlogEditorProps */
/** @typedef {typeof __propDef.events}  UnlogEditorEvents */
/** @typedef {typeof __propDef.slots}  UnlogEditorSlots */
export default class UnlogEditor extends SvelteComponent<{
    store?: import("svelte/store").Writable<{}> | undefined;
    activeStoreKey?: string | undefined;
    contentOverride?: null | undefined;
    history?: import("svelte/store").Writable<never[]> | undefined;
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
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        store?: import("svelte/store").Writable<{}> | undefined;
        activeStoreKey?: string | undefined;
        contentOverride?: null | undefined;
        history?: import("svelte/store").Writable<never[]> | undefined;
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
