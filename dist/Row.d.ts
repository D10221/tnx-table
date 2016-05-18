import { iRow, TableElement, TableElementRole, Visibility } from "./definitions";
import { IObservableThing, EventArgs } from "tnx-core";
export declare class Row implements iRow, IObservableThing {
    /***
     * IObservableThing implementation
     */
    xEvents: Rx.Subject<EventArgs>;
    source: any;
    index: number;
    key: string;
    id: any;
    parent: TableElement;
    elements: TableElement[];
    isSelected: boolean;
    visibility: Visibility;
    role: TableElementRole;
    isEditing: boolean;
    isDirty: boolean;
    constructor(parent: TableElement, source: any, index: number);
}
