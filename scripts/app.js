(function(angular) {
    var app = angular.module('app', [
        'ngRoute',

        'directives',
        'services',
        'controllers'
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