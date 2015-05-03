'use strict';

/* Services */

var services = angular.module('Services', ['ngResource']);

services.factory('Phone', ['$resource',
  function($resource){
    return $resource('phones/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }]);


services.factory('Translations', ['$resource',
  function($resource){
    return $resource('json/en/translations.json', {}, {
      query: {method:'GET', params:{}, isArray:false}
    });
  }]);