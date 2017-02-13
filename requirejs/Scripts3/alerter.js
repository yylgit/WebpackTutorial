define('alerter',
    ['jquery', 'dataservice'],
    function ($, dataservice) {

        var
            name = 'John',
            showMessage = function () {
                var msg = dataservice.getMessage();
                //alert(msg + ', ' + name);
                $('#message').text(msg + ', ' + name);
            };

        return {
            showMessage: showMessage
        };
    });