import { TableElement, SortDirection } from "./definitions";
export declare function isTableElement(x: Object): boolean;
export declare function isVisible(e: TableElement): boolean;
export declare function nextVisible(elements: TableElement[], source: TableElement, direction: SortDirection): TableElement;
export declare function findNextDesc(elements: TableElement[], n: number): TableElement;
export declare function findNextAsc(elements: TableElement[], n: number): TableElement;
export declare function moveElement(elements: TableElement[], source: TableElement, direction: SortDirection, onSuccess: (source: TableElement, destination: TableElement) => void): void;
