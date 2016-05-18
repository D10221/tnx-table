import { iCell, iRow, TableElementRole, iColumn, Visibility } from "./definitions";
export declare class Cell implements iCell {
    row: iRow;
    column: iColumn;
    constructor(row: iRow, column: iColumn);
    index: number;
    id: string;
    key: string;
    private _value;
    value: any;
    getter(cell: iCell): any;
    setter(cell: iCell, value: any): void;
    commit(): void;
    undo(): void;
    _isDirty: boolean;
    isDirty: boolean;
    parent: iRow;
    elements: any[];
    isSelected: boolean;
    visibility: Visibility;
    role: TableElementRole;
    isEditing: boolean;
}
