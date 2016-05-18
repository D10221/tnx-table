

import {TableElement, Visibility, TableElementRole} from "../src/definitions";
import {Layouts} from "../src/Layout";
import {FakeStorage} from "../src/FakeStorage";

/*interface Storage {
    length: number;
    clear(): void;
    getItem(key: string): any;
    key(index: number): string;
    removeItem(key: string): void;
    setItem(key: string, data: string): void;
    [key: string]: any;
    [index: number]: string;
}*/


describe('layouts', function () {
    
    it('works', function(){

        var layouts = new Layouts(/*prefix:*/ 'tnxTest');
        
        layouts.store = new FakeStorage();
        
        var e : TableElement = {
            id: _.uniqueId('table_'),
            key: 'testKey',
            parent: null, 
            elements: [],
            isSelected: false,
            visibility: Visibility.visible,
            index: 0 ,
            role: TableElementRole.table,
            isEditing: false,
            isDirty: false
        };

        var elementKey = 'tnxTest_table_testKey';
        
        expect(layouts.elementKey(e)).toEqual(elementKey);
        
        expect(Layouts.toLayout(e).visibility ).toEqual(Visibility.visible);
        
        layouts.save(e);
        
        var layout = layouts.getLayout(e);
        
        expect(layout.key).toEqual(e.key);
        expect(layout.visibility).toEqual(e.visibility);
        
        e.visibility = Visibility.hidden;
        
        layouts.restore(e);
        
        expect(e.visibility).toEqual(Visibility.visible);
        
        
    })
    
});
