/** @typedef {typeof __propDef.props}  NullNodeProps */
/** @typedef {typeof __propDef.events}  NullNodeEvents */
/** @typedef {typeof __propDef.slots}  NullNodeSlots */
export default class NullNode extends SvelteComponentTyped<{
    [x: string]: never;
}, {
    change: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type NullNodeProps = typeof __propDef.props;
export type NullNodeEvents = typeof __propDef.events;
export type NullNodeSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: never;
    };
    events: {
        change: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
