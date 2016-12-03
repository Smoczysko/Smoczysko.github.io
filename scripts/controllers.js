(function (angular) {
    var app = angular.module('controllers', []);

    app.controller('CoursesController', ['$scope', 'Courses', function ($scope, Courses) {
        Courses.courses().then(function (courses) {
            $scope.courses = courses;
        });
    }]);

    app.controller('CourseController', ['$rootScope', '$scope', '$routeParams', 'Courses', function ($rootScope, $scope, $routeParams, Courses) {
        var courseCode = $routeParams.course;

        $scope.code = courseCode;

        Courses.course(courseCode).then(function (course) {
            $scope.course = course;
        });
    }]);
})(window.angular);