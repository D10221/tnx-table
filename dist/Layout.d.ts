import { TableElement, TableElementLayout } from "./definitions";
export declare class Layouts {
    private prefix;
    constructor(prefix?: string);
    store: Storage;
    static roleName(e: TableElement): string;
    elementKey(e: TableElement): string;
    getLayout(e: TableElement): TableElementLayout;
    restore(e: TableElement): void;
    save: (e: TableElement) => void;
    drop: (e: TableElement) => void;
    fromJson(json: string): TableElementLayout;
    static toLayout(e: TableElement): TableElementLayout;
    static applyLayout(e: TableElement, layout: TableElementLayout): void;
}
export declare var layouts: Layouts;
