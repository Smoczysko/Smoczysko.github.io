(function (angular) {
    var app = angular.module('SmoczyskoControllers', []);

    app.controller('CoursesController', ['$scope', 'Courses', function ($scope, Courses) {
        $scope.quote = {
            text: 'I am learning all the time.  The tombstone will be my diploma.',
            author: 'Eartha Kitt'
        };

        Courses.courses().then(function (courses) {
            $scope.courses = courses;
        });
    }]);

    app.controller('CourseController', ['$rootScope', '$scope', '$routeParams', 'Courses', function ($rootScope, $scope, $routeParams, Courses) {
        $scope.quote = {
            text: 'I am learning all the time.  The tombstone will be my diploma.',
            author: 'Eartha Kitt'
        };

        var courseCode = $routeParams.course;

        $scope.code = courseCode;

        Courses.course(courseCode).then(function (course) {
            $rootScope.title = course.name;
            $scope.course = course;
        });
    }]);
})(window.angular);