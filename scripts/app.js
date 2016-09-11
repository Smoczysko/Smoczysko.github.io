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
            when('/about', {
                templateUrl: 'views/about.html'
            }).
            when('/courses', {
                controller: 'CoursesController',
                templateUrl: 'views/courses.html'
            }).
            when('/courses/:course', {
                controller: 'CourseController',
                templateUrl: 'views/course.html'
            }).
            when('/presentations', {
                templateUrl: 'views/presentations.html'
            }).
            otherwise({
                redirectTo: '/about'
            });
        }
    ]);
})(window.angular);