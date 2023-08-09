/** @typedef {typeof __propDef.props}  UnlogProps */
/** @typedef {typeof __propDef.events}  UnlogEvents */
/** @typedef {typeof __propDef.slots}  UnlogSlots */
export default class Unlog extends SvelteComponentTyped<{
    enable?: boolean | undefined;
    stores?: {
        name: string;
        store: object;
        source?: string | undefined;
    }[] | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type UnlogProps = typeof __propDef.props;
export type UnlogEvents = typeof __propDef.events;
export type UnlogSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        enable?: boolean | undefined;
        stores?: {
            name: string;
            store: object;
            source?: string | undefined;
        }[] | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
