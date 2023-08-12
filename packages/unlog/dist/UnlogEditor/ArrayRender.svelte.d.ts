/** @typedef {typeof __propDef.props}  ArrayRenderProps */
/** @typedef {typeof __propDef.events}  ArrayRenderEvents */
/** @typedef {typeof __propDef.slots}  ArrayRenderSlots */
export default class ArrayRender extends SvelteComponentTyped<{
    key: any;
    arr: any;
    allowDelete?: boolean | undefined;
    handleDelete?: ((index: any) => void) | undefined;
    open?: boolean | undefined;
    tabIndex?: number | undefined;
    parentDelete?: (() => void) | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ArrayRenderProps = typeof __propDef.props;
export type ArrayRenderEvents = typeof __propDef.events;
export type ArrayRenderSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        key: any;
        arr: any;
        allowDelete?: boolean | undefined;
        handleDelete?: ((index: any) => void) | undefined;
        open?: boolean | undefined;
        tabIndex?: number | undefined;
        parentDelete?: (() => void) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
