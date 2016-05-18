export declare enum SortDirection {
    asc = 0,
    desc = 1,
}
export declare enum Visibility {
    visible = 0,
    hidden = 1,
}
export declare enum TableElementRole {
    table = 0,
    column = 1,
    row = 2,
    cell = 3,
}
export interface TableElement {
    id: any;
    key: string;
    parent: TableElement;
    elements: TableElement[];
    isSelected: boolean;
    visibility: Visibility;
    index: number;
    role: TableElementRole;
    isEditing: boolean;
    isDirty: boolean;
}
export interface Filter {
    visibility: Visibility;
    value: string;
}
export interface iTable extends TableElement {
    header: any;
    source: any[];
    columns: iColumn[];
    /***
     * Column.Key
     */
    orderBy?: string;
    reverseOrder?: boolean;
}
export interface iColumn extends TableElement {
    header: any;
    filter: Filter;
    definition?: ColumnDefinition;
}
export interface iRow extends TableElement {
    source: {};
}
export interface iCell extends TableElement {
    value: any;
}
export interface DataSource {
    key: string;
    items: any[];
    columns?: ColumnDefinition[];
}
export interface TableElementLayout {
    key: string;
    index: number;
    visibility: Visibility;
    selected: boolean;
    elements: TableElementLayout[];
}
export interface ColumnDefinition {
    key: string;
    index?: number;
    header?: any;
    getter?: (cell: iCell) => any;
    setter: (cell: iCell, value: any) => void;
    disabledFeatures?: string[];
    visibility?: Visibility;
}
/***
 * direction : [ 'asc' , 'desc ]
 */
export interface iPager {
    nextPage(): any;
    nextPage(n?: number, fast?: boolean): any;
    nextPage(direction?: string, n?: number, fast?: boolean): any;
}
