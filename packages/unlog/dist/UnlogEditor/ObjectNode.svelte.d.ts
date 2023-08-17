/** @typedef {typeof __propDef.props}  ObjectNodeProps */
/** @typedef {typeof __propDef.events}  ObjectNodeEvents */
/** @typedef {typeof __propDef.slots}  ObjectNodeSlots */
export default class ObjectNode extends SvelteComponentTyped<{
    key?: string | undefined;
    allowDelete?: boolean | undefined;
    handleDelete?: ((property: any) => void) | undefined;
    open?: boolean | undefined;
    tabIndex?: number | undefined;
    parentDelete?: (() => void) | undefined;
    arr?: any[] | undefined;
    handleChange?: (() => void) | undefined;
}, {
    change: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ObjectNodeProps = typeof __propDef.props;
export type ObjectNodeEvents = typeof __propDef.events;
export type ObjectNodeSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        key?: string | undefined;
        allowDelete?: boolean | undefined;
        handleDelete?: ((property: any) => void) | undefined;
        open?: boolean | undefined;
        tabIndex?: number | undefined;
        parentDelete?: (() => void) | undefined;
        arr?: any[] | undefined;
        handleChange?: (() => void) | undefined;
    };
    events: {
        change: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
