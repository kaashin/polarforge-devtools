/** @typedef {typeof __propDef.props}  ObjectRenderProps */
/** @typedef {typeof __propDef.events}  ObjectRenderEvents */
/** @typedef {typeof __propDef.slots}  ObjectRenderSlots */
export default class ObjectRender extends SvelteComponentTyped<{
    object: any;
    key: any;
    allowDelete?: boolean | undefined;
    handleDelete?: ((property: any) => void) | undefined;
    open?: boolean | undefined;
    tabIndex?: number | undefined;
    parentDelete?: (() => void) | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ObjectRenderProps = typeof __propDef.props;
export type ObjectRenderEvents = typeof __propDef.events;
export type ObjectRenderSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        object: any;
        key: any;
        allowDelete?: boolean | undefined;
        handleDelete?: ((property: any) => void) | undefined;
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
