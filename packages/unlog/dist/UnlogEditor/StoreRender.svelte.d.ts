/** @typedef {typeof __propDef.props}  StoreRenderProps */
/** @typedef {typeof __propDef.events}  StoreRenderEvents */
/** @typedef {typeof __propDef.slots}  StoreRenderSlots */
export default class StoreRender extends SvelteComponentTyped<{
    store: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type StoreRenderProps = typeof __propDef.props;
export type StoreRenderEvents = typeof __propDef.events;
export type StoreRenderSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        store: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
