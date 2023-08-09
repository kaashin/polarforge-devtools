/** @typedef {typeof __propDef.props}  UnlogCssProps */
/** @typedef {typeof __propDef.events}  UnlogCssEvents */
/** @typedef {typeof __propDef.slots}  UnlogCssSlots */
export default class UnlogCss extends SvelteComponentTyped<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type UnlogCssProps = typeof __propDef.props;
export type UnlogCssEvents = typeof __propDef.events;
export type UnlogCssSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: never;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
