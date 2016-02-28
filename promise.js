var promise = new Promise(function (resolve, reject) {
    console.log('begin do something');
    if (Math.random() * 10.0 > 5) {
        console.log(" run success");
        resolve();
    } else {
        console.log(" run failed");
        reject();

    }
});
promise.then(function () {
    console.log(' resolve from promise');
}, function () {
    console.log(' reject from promise');
});