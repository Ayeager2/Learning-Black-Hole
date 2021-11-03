
$(function () {

    function PersonController($scope) {
        $scope.person = {
            fullname: "Arcadiusz",
            age: 22
        };

    }

    $(function () {
        $('#person-form').submit(function (event) {

            var scope = angular.element($('#controller')).scope();
            alert('name: ' + scope.person.fullname + '   age: ' + scope.person.age);
            event.preventDefault();
        });
    });


});
