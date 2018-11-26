"use strict";
function MainService($http) {
  const self= this;

  self.getPhrases = () => {
    return $http({
      url: "/phrases",
      method: "GET"
    });
  };                    //write by hand

  self.postPhrases = (newPhrase)  => {
    return $http({
      url: "/phrases",
      method: "POST",
      data: newPhrase       //can be objects or object literals
    });                 //write by hand
  };

  self.deletePhrases = (id) => {
    return $http({
      url: `/phrases/${id}`,
      method: "DELETE"
    });
  };

  self.updatePhrases  = (editedPhrase) => {
    return $http({
      url: `/phrases/${editedPhrase.id}`,
      method: "PUT",
      data: editedPhrase
    })
  }
}

angular
  .module("App")
  .service("MainService", MainService);