/** @typedef {typeof __propDef.props}  ArrayRenderProps */
/** @typedef {typeof __propDef.events}  ArrayRenderEvents */
/** @typedef {typeof __propDef.slots}  ArrayRenderSlots */
export default class ArrayRender extends SvelteComponentTyped<{
    key?: null | undefined;
    allowDelete?: boolean | undefined;
    handleDelete?: ((index: any) => void) | undefined;
    arr?: any[] | undefined;
    open?: boolean | undefined;
    tabIndex?: number | undefined;
    parentDelete?: (() => void) | undefined;
}, {
    change: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ArrayRenderProps = typeof __propDef.props;
export type ArrayRenderEvents = typeof __propDef.events;
export type ArrayRenderSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        key?: null | undefined;
        allowDelete?: boolean | undefined;
        handleDelete?: ((index: any) => void) | undefined;
        arr?: any[] | undefined;
        open?: boolean | undefined;
        tabIndex?: number | undefined;
        parentDelete?: (() => void) | undefined;
    };
    events: {
        change: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
