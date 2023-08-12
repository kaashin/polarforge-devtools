/** @typedef {typeof __propDef.props}  AddObjectItemProps */
/** @typedef {typeof __propDef.events}  AddObjectItemEvents */
/** @typedef {typeof __propDef.slots}  AddObjectItemSlots */
export default class AddObjectItem extends SvelteComponentTyped<{
    props: any;
}, {
    close: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type AddObjectItemProps = typeof __propDef.props;
export type AddObjectItemEvents = typeof __propDef.events;
export type AddObjectItemSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        props: any;
    };
    events: {
        close: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
