"use strict";


(function(){

  angular
  .module("wdinstagram", [
    "ngResource",
    "ui.router"
  ])
  .config(["$stateProvider", Router])
  .controller("indexController", [indexController])
  .controller("showController", [showController])



function Router($stateProvider) {
  $stateProvider
  .state("index", {
    url: '/',
    templateUrl: 'js/ng-views/index.html',
    controller: 'indexController',
    controllerAs: 'vm'
  })
  .state("show", {
    url: '/dummies/:id',
    templateUrl: 'js/ng-views/show.html',
    controller: 'showController',
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

function showController(){
  console.log("show working");
  this.dummies = [
      {body: "hey"},
      {body: "there"}
    ];
}


})();
