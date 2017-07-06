'use strict';
angular.module('myApp', [
  'ui.router'
]).
config(['$stateProvider', function($stateProvider) {
var state = {
  name:'resumeHome',
  url:'/resume',
  templateUrl:'resume/resume.html'
};
  $stateProvider.state(state);
}]);
