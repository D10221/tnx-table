class MainController {
    constructor($scope){
        this.message = 'Hello';
    }
}
MainController.$injiect = ['$scope'];

angular.module('app',[])
.controller('MainController', MainController);
