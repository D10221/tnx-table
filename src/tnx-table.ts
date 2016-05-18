import {TnxTableCtrl} from "./TableCtrl";
import {isVisible} from "./TableElementTools";

angular.module('tnxTable', [])
    .filter('isVisible',()=> isVisible )
    .controller('TnxTableCtrl', TnxTableCtrl)
    .directive('tnxTable', ()=> {
        return {
            restrict: 'E',
            scope: {
                //DataProvider , ParentController , names... ?
                source: '='
            },
            templateUrl: (element,attr)=>{
                return attr.templateUrl ? attr.templateUrl :
                    'templates/tnx/table.html'
            },
           // transclude: true
        }
    })
    .directive('tnxPager', ()=>{
        return {
            scope: {
                pager: '='
            },
            templateUrl: (element,attrs)=>{
                return attrs.templateUrl? attrs.templateUrl : 'templates/tnx/pager.html';
            },
            //post
        }
    });
