/** @typedef {typeof __propDef.props}  ArrowLeftProps */
/** @typedef {typeof __propDef.events}  ArrowLeftEvents */
/** @typedef {typeof __propDef.slots}  ArrowLeftSlots */
export default class ArrowLeft extends SvelteComponentTyped<{
    height?: string | undefined;
    width?: string | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ArrowLeftProps = typeof __propDef.props;
export type ArrowLeftEvents = typeof __propDef.events;
export type ArrowLeftSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        height?: string | undefined;
        width?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
