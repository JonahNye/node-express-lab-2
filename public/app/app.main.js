"use strict";
const mainComp = {
  templateUrl: "app/app.html",
  controller: ["MainService", function(MainService) {
    const vm = this;
    function updateList(result) {
      vm.listOfPhrases = result.data
    }
    MainService.getPhrases().then((result) => {
      vm.listOfPhrases = result.data;  //initial page render. note lack of newPhrase argument
    });
    vm.addPhrase = (newPhrase) => {
      MainService.postPhrases(newPhrase).then(updateList)
    };
    vm.deletePhrases = (id) => {
      MainService.deletePhrases(id).then(updateList)
    };
    vm.updatePhrase = (editedPhrase) => {
      MainService.updatePhrases(editedPhrase).then(updateList)
    };
  }]
};          //build a component that can call a service wih a get request in it. SEE REDDIT API

angular
  .module("App")
  .component("mainComp", mainComp);