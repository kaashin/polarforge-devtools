/** @typedef {typeof __propDef.props}  NumberNodeProps */
/** @typedef {typeof __propDef.events}  NumberNodeEvents */
/** @typedef {typeof __propDef.slots}  NumberNodeSlots */
export default class NumberNode extends SvelteComponentTyped<{
    value?: any;
}, {
    change: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type NumberNodeProps = typeof __propDef.props;
export type NumberNodeEvents = typeof __propDef.events;
export type NumberNodeSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        value?: any;
    };
    events: {
        change: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
