/** @typedef {typeof __propDef.props}  UnlogHistoryProps */
/** @typedef {typeof __propDef.events}  UnlogHistoryEvents */
/** @typedef {typeof __propDef.slots}  UnlogHistorySlots */
export default class UnlogHistory extends SvelteComponent<{
    history?: any;
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
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        history?: any;
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
