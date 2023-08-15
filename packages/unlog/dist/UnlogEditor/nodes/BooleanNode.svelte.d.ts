/** @typedef {typeof __propDef.props}  BooleanNodeProps */
/** @typedef {typeof __propDef.events}  BooleanNodeEvents */
/** @typedef {typeof __propDef.slots}  BooleanNodeSlots */
export default class BooleanNode extends SvelteComponentTyped<{
    value?: any;
}, {
    change: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type BooleanNodeProps = typeof __propDef.props;
export type BooleanNodeEvents = typeof __propDef.events;
export type BooleanNodeSlots = typeof __propDef.slots;
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
