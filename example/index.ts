///<reference path="./reference"/>

import {ObservableThing} from 'tnx-core';

import {DataSource} from "../dist/definitions";

class MainController extends ObservableThing {

    message = 'Hello';

    data:DataSource;

    static $injiect = ['$scope'];

    constructor($scope) {
        super();
        this.xEvents.asObservable()
            .where(e=> e.sender != this)
            .where(e=> e.args.key == "loaded")
            .take(1) // No Need to Dispose 
            .subscribe(x => {
                this.raiseEvent('data', this.data);
            });

        this.disposables.add(
            this.xEvents.asObservable()
                .where(e=>e.sender != this)
                .where(e=> e.args.key == 'reload')
                .subscribe(()=> {
                    //this.data.key += '.';
                    this.raiseEvent('data', this.data);
                })
        );

        fetch('data/data.json', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                credentials: 'same-origin'
            }
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

                this.raiseEvent('data', this.data);
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

declare var componentHandler:{ upgradeAllRegistered:()=> void };

angular.module('app', [
    'tnxTable'
])
    .controller('MainController', MainController)
    // Material Design Lite (mdl)
    // https://github.com/jadjoubran/angular-material-design-lite/blob/master/src/angular-material-design-lite.js
    .directive('mdlUpgrade', function ($timeout) {

        return {
            restrict: 'A',
            compile: function () {
                return {
                    post: function postLink(scope, element) {
                        $timeout(function () {
                            try {
                                componentHandler.upgradeAllRegistered();
                            } catch (e) {
                                console.log(e);
                            }
                        }, 0);
                    }
                };
            },
        };

    })
    .directive('onEnter', function () {
        return function (scope, element, attrs) {
            element.bind("keydown keypress", function (event) {
                if (event.which === 13) {
                    scope.$apply(function () {
                        scope.$eval(attrs.onEnter);
                    });

                    event.preventDefault();
                }
            });
        };
    })
    // Material Design Lite (mdl)
    .run(($rootScope, $timeout)=> {
        $rootScope.$on('$viewContentLoaded', ()=> {
            $timeout(()=> {
                componentHandler.upgradeAllRegistered();
            })
        })
    });
