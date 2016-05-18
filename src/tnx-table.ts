import {TnxTableCtrl} from "./TableCtrl";
import {isVisible} from "./TableElementTools";

angular.module('tnxTable', [])
    .filter('isVisible',()=> isVisible )
    .controller('TnxTableCtrl', TnxTableCtrl)
    .directive('tnxTable', (/*injector Dependencies*/)=> {
        return {
            restrict: 'E',
            scope: {
                source: '='
            },
            templateUrl: 'templates/tnx/table.html',
           // transclude: true
        }
    })
    .directive('tnxPager', ()=>{
        return {
            scope: {
                pager: '='
            },
            templateUrl: 'templates/data-table/pager.html',
            //post
        }
    });
