/** @typedef {typeof __propDef.props}  IconProps */
/** @typedef {typeof __propDef.events}  IconEvents */
/** @typedef {typeof __propDef.slots}  IconSlots */
export default class Icon extends SvelteComponentTyped<{
    [x: string]: any;
    size?: string | undefined;
    icon?: null | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type IconProps = typeof __propDef.props;
export type IconEvents = typeof __propDef.events;
export type IconSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        size?: string | undefined;
        icon?: null | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
