/** @typedef {typeof __propDef.props}  ArrayNodeProps */
/** @typedef {typeof __propDef.events}  ArrayNodeEvents */
/** @typedef {typeof __propDef.slots}  ArrayNodeSlots */
export default class ArrayNode extends SvelteComponentTyped<{
    key?: null | undefined;
    allowDelete?: boolean | undefined;
    handleDelete?: ((index: any) => void) | undefined;
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
export type ArrayNodeProps = typeof __propDef.props;
export type ArrayNodeEvents = typeof __propDef.events;
export type ArrayNodeSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        key?: null | undefined;
        allowDelete?: boolean | undefined;
        handleDelete?: ((index: any) => void) | undefined;
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
