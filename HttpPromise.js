getRequest = function (url) {
    var promise = new Promise(function (resolve, reject) {
        var request = require('request');
        request(url, function (error, respones, body) {
            if (error) {
                reject(error);
                return;
            }
            if (respones.statusCode == 200) {
                resolve(body)

            } else {
                reject(respones.status);

            }
        });
    });
    return promise;

};

getRequest("https://github.com/").then(function (result) {
    console.log(result);
}, function (error) {
    console.error('error', error);
});
