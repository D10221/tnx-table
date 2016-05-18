import {iRow, TableElement, TableElementRole, Visibility} from "./definitions";
import {memoize, invalidate, ObservableThingProperty, firstEquals, IObservableThing, EventArgs} from "tnx-core";

export class Row implements iRow , IObservableThing {

    /***
     * IObservableThing implementation
     */
    xEvents = new  Rx.Subject<EventArgs>();
    
    source: any ;
    index : number ; 
    key: string ; 
    id:  any;
    parent: TableElement ; 
    elements: TableElement[]= [];
    isSelected: boolean = false;
    
    @ObservableThingProperty
    visibility: Visibility = Visibility.visible;
    
    role: TableElementRole = TableElementRole.row;
    isEditing: boolean = false;
    isDirty: boolean = false;
    
    constructor(parent: TableElement,source: any, index: number){
        this.index = index ; 
        this.id = _.uniqueId(`table_${parent.key}_row_`);
        this.key = this.id;
        this.parent = parent;
        this.source = source;
        
    }
}
