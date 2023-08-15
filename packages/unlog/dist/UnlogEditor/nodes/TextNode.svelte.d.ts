/** @typedef {typeof __propDef.props}  TextNodeProps */
/** @typedef {typeof __propDef.events}  TextNodeEvents */
/** @typedef {typeof __propDef.slots}  TextNodeSlots */
export default class TextNode extends SvelteComponentTyped<{
    value?: any;
}, {
    change: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type TextNodeProps = typeof __propDef.props;
export type TextNodeEvents = typeof __propDef.events;
export type TextNodeSlots = typeof __propDef.slots;
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
