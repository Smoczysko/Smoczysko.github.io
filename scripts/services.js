(function(angular) {
    var app = angular.module('services', ['ngResource']);

    app.provider('Courses', function () {
        this.$get = ['$resource', '$q', function ($resource, $q) {
            function getJSON(resourceName, success, error) {
                $resource('data/' + resourceName, {}, {
                    query: {method: "GET", isArray: false}
                }).query(function (data) {
                    success(data);
                }, function () {
                    error();
                });
            }

            return {
                courses: function () {
                    var deferred = $q.defer();

                    getJSON('courses.json', function (data) {
                        deferred.resolve(data.courses);
                    }, function () {
                        deferred.reject();
                    });

                    return deferred.promise;
                },
                course: function (code) {
                    var deferred = $q.defer();

                    getJSON('courses/' + code + '.json', function (data) {
                        deferred.resolve(data);
                    }, function () {
                        deferred.reject();
                    });

                    return deferred.promise;
                }
            }
        }];
    });
})(window.angular);