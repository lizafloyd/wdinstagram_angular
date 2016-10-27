"use strict";


(function(){

  angular
  .module("wdinstagram", [
    "ngResource",
    "ui.router"
  ])
  .config(["$stateProvider", Router])
  .controller("indexController", [indexController])



function Router($stateProvider) {
  $stateProvider
  .state("index", {
    url: '/',
    templateUrl: 'js/ng-views/index.html',
    controller: 'indexController',
    controllerAs: 'vm'
  })

}

function indexController() {
  console.log("index working");
  this.dummies = [
      {body: "hey"},
      {body: "there"}
    ];
}



})();
