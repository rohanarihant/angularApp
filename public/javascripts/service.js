/** List Service for interacting with server */

function ListService ( $http ) {
     return {
          list : function(cb) {
               $http.get('https://restcountries.eu/rest/v2/all').then(function(result){
                    cb(result.data);
               })
          }
     }
}

angular
.module('testApp')
.service('ListService', ListService)
