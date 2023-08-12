/** @typedef {typeof __propDef.props}  UnlogHistoryProps */
/** @typedef {typeof __propDef.events}  UnlogHistoryEvents */
/** @typedef {typeof __propDef.slots}  UnlogHistorySlots */
export default class UnlogHistory extends SvelteComponentTyped<{
    history?: import("svelte/store").Writable<never[]> | undefined;
    activeHistoryIndex?: number | undefined;
}, {
    select: CustomEvent<any>;
    update: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type UnlogHistoryProps = typeof __propDef.props;
export type UnlogHistoryEvents = typeof __propDef.events;
export type UnlogHistorySlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        history?: import("svelte/store").Writable<never[]> | undefined;
        activeHistoryIndex?: number | undefined;
    };
    events: {
        select: CustomEvent<any>;
        update: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
