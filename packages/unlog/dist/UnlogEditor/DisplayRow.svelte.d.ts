/** @typedef {typeof __propDef.props}  DisplayRowProps */
/** @typedef {typeof __propDef.events}  DisplayRowEvents */
/** @typedef {typeof __propDef.slots}  DisplayRowSlots */
export default class DisplayRow extends SvelteComponentTyped<{
    [x: string]: any;
    value?: null | undefined;
    key?: string | undefined;
    allowHighlight?: boolean | undefined;
    nodeLevel?: number | undefined;
    allowDelete?: boolean | undefined;
    handleDelete?: (() => void) | undefined;
}, {
    change: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    custom: {};
}> {
    get allowDelete(): NonNullable<boolean | undefined>;
}
export type DisplayRowProps = typeof __propDef.props;
export type DisplayRowEvents = typeof __propDef.events;
export type DisplayRowSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        value?: null | undefined;
        key?: string | undefined;
        allowHighlight?: boolean | undefined;
        nodeLevel?: number | undefined;
        allowDelete?: boolean | undefined;
        handleDelete?: (() => void) | undefined;
    };
    events: {
        change: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        custom: {};
    };
};
export {};
