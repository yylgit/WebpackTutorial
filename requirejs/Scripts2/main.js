(function () {

    requirejs.config(
        {
            baseUrl: 'scripts2',
        }
    );

    document.getElementById('asyncExcute').addEventListener('click', function () {
        require(['alerter'],
            function (alerter) {
                alerter.showMessage();
            }
        );
    })
})();