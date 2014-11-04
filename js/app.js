/*
    app.js: main application script
    this is an Angular application
 */

"use strict";

angular.module('AngularDemo', [])
    .controller('HelloController', function($scope){
        $scope.person = {
            firstName: null,
            lastName: null
        };


    })

    .controller('MoviesController', function($scope) {
        $scope.movies = movies;
        $scope.sortCol = 'rank';
        $scope.sortBy = function(sortCol) {
            if ($scope.sortCol == sortCol) {
                $scope.sortReverse = !$scope.sortReverse;
            } else {
                $scope.sortCol = sortCol;
                $scope.sortReverse = false;
            }


        };

        $scope.isSortedBy = function(colName) {
            return colName == $scope.sortCol;
        }
    });

     // chains methods so you don't have to create global variable
    // controller declares and creates new controller
    // scope object will be available to any views created in html file