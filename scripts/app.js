(function(angular) {
    var app = angular.module('SmoczyskoApp', [
        'ngRoute',

        'SmoczyskoDirectives',
        'SmoczyskoServices',
        'SmoczyskoControllers'
    ]);

    app.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
            when('/', {
                redirectTo: '/courses'
            }).
            when('/courses', {
                controller: 'CoursesController',
                templateUrl: 'views/courses.html'
            }).
            when('/courses/:course', {
                controller: 'CourseController',
                templateUrl: 'views/course.html'
            }).
            otherwise({
                redirectTo: '/'
            });
        }
    ]);
})(window.angular);