/** @typedef {typeof __propDef.props}  AddArrayItemProps */
/** @typedef {typeof __propDef.events}  AddArrayItemEvents */
/** @typedef {typeof __propDef.slots}  AddArrayItemSlots */
export default class AddArrayItem extends SvelteComponentTyped<{
    props: any;
}, {
    close: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type AddArrayItemProps = typeof __propDef.props;
export type AddArrayItemEvents = typeof __propDef.events;
export type AddArrayItemSlots = typeof __propDef.slots;
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
