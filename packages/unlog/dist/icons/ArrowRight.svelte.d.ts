/** @typedef {typeof __propDef.props}  ArrowRightProps */
/** @typedef {typeof __propDef.events}  ArrowRightEvents */
/** @typedef {typeof __propDef.slots}  ArrowRightSlots */
export default class ArrowRight extends SvelteComponent<{
    width?: string | undefined;
    height?: string | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ArrowRightProps = typeof __propDef.props;
export type ArrowRightEvents = typeof __propDef.events;
export type ArrowRightSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        width?: string | undefined;
        height?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
