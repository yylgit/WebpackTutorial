require('./a');
require('./b');

document.getElementById('asyncExcute').addEventListener('click',function () {
    require.ensure([],function () {
        var c = require('./c');
        alert(c.name);
    })
})
