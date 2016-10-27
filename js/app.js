"use strict";


(function(){

  angular
  .module("wdinstagram", [
    "ngResource",
    "ui.router"
  ])
  .config(["$stateProvider", Router])
  .controller("indexController", [
    "InstaFactory",
    indexController])
  .controller("showController", [
    "InstaFactory",
    "$stateParams",
    showController])
  .factory("InstaFactory", [
    "$resource",
    InstaFactoryFunction])



function Router($stateProvider) {
  $stateProvider
  .state("index", {
    url: '/',
    templateUrl: 'js/ng-views/index.html',
    controller: 'indexController',
    controllerAs: 'vm'
  })
  .state("show", {
    url: '/entries/:id',
    templateUrl: 'js/ng-views/show.html',
    controller: 'showController',
    controllerAs: 'vm'
  })

}

function InstaFactoryFunction($resource){
  return $resource("http://localhost:3000/entries/:id")
}

function indexController(InstaFactory) {
  this.entries = InstaFactory.query()
}

function showController(InstaFactory, $stateParams){
  this.entry = InstaFactory.get({id: $stateParams.id})
}


})();
