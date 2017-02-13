define('alerter',
    ['dataservice'],
    function (dataservice) {
        var
            name = 'John',
            showMessage = function () {
                var msg = dataservice.getMessage();
                alert(msg + ', ' + name);
            };

        return {
            showMessage: showMessage
        };
    });
    // 利用require
    // define('alerter',
    // ['require'],
    // function (require) {
    //     var dataservice = require('dataservice');
    //     var
    //         name = 'John',
    //         showMessage = function () {
    //             var msg = dataservice.getMessage();
    //             alert(msg + ', ' + name);
    //         };

    //     return {
    //         showMessage: showMessage
    //     };
    // });