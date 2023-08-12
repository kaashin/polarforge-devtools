/** @typedef {typeof __propDef.props}  StoreToolsProps */
/** @typedef {typeof __propDef.events}  StoreToolsEvents */
/** @typedef {typeof __propDef.slots}  StoreToolsSlots */
export default class StoreTools extends SvelteComponentTyped<{
    [x: string]: any;
    allowInProduction?: boolean | undefined;
    height?: number | undefined;
    envMode?: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type StoreToolsProps = typeof __propDef.props;
export type StoreToolsEvents = typeof __propDef.events;
export type StoreToolsSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        allowInProduction?: boolean | undefined;
        height?: number | undefined;
        envMode?: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
