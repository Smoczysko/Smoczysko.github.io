(function(angular) {
    var app = angular.module('SmoczyskoDirectives', []);
    
    app.directive('copyrightYears', function () {
        return {
            restrict: 'E',
            template: '{{ years }}',
            link: function (scope) {
                var now = new Date(),
                    currentYear = now.getFullYear();
                
                scope.years = currentYear !== 2015 ? '2015 - ' + currentYear : '2015';
            }
        };
    });

    app.directive('customFooter', function () {
        return {
            restrict: 'E',
            templateUrl: 'views/footer.html'
        }
    });

    app.directive('quote', function () {
        return {
            restrict: 'E',
            templateUrl: 'views/quote.html',
            scope: {
                text: '@text',
                author: '@author'
            }
        };
    });

    app.directive('lecture', function () {
        return {
            restrict: 'E',
            templateUrl: 'views/lecture.html',
            link: function(scope, element, attrs) {
                attrs.$observe('lecture', function(lecture) {
                    var json = JSON.parse(lecture);
                    _.extend(scope, json);
                });
            }
        };
    });

    app.directive('additionalResource', function () {
        return {
            restrict: 'E',
            templateUrl: 'views/additional-resource.html',
            link: function(scope, element, attrs) {
                attrs.$observe('resource', function(resource) {
                    var json = JSON.parse(resource);
                    _.extend(scope, json);
                });
            }
        };
    });

    app.directive('courseLiterature', function () {
        return {
            restrict: 'E',
            templateUrl: 'views/course-literature.html',
            link: function(scope, element, attrs) {
                attrs.$observe('literature', function(literature) {
                    var json = JSON.parse(literature);
                    _.extend(scope, json);
                });
            }
        };
    });
})(window.angular);