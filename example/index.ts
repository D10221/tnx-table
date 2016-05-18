///<reference path="./reference"/>

import {ObservableThing} from 'tnx-core';

import {DataSource} from "../dist/definitions";

class MainController extends ObservableThing {

    message = 'Hello';

    data : DataSource;

    static $injiect = ['$scope'];

    constructor($scope){
        super();
        this.xEvents.asObservable()
            .where(e=> e.sender != this)
            .where(e=> e.args.key == "loaded")
            .take(1) // No Need to Dispose 
            .subscribe( x => {
                this.raiseEvent('data', this.data);
            });
        
        this.disposables.add(
            this.xEvents.asObservable()
                .where(e=>e.sender!=this)
                .where(e=> e.args.key == 'reload')
                .subscribe(()=>{
                    //this.data.key += '.';
                    this.raiseEvent('data', this.data );
                })
        );

        fetch('data/data.json',  {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin'}
        )
            .then(r=>r.json())
            .then(data=> {

                this.data = {
                    key: "Data",
                    items: data,
                    // columns: [
                    //     {
                    //         key: 'Description_1',
                    //         header: 'Description'
                    //     }
                    // ]
                };

                this.raiseEvent('data',this.data );
            });

        // $timeout(()=>{
        //     this.eBus.onNext({ sender: this,  args: { key : 'data', value: this.data }});
        // }, 500);

        $scope.$on('$destroy', () => {
            console.log('View1Ctrl disposing');
            // watcherDispose();
            this.dispose();
        });
    }
}


angular.module('app',[
    'tnxTable'
])
.controller('MainController', MainController);
