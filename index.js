var express = require('express');
var formidable = require('formidable');
var app = express();
var path = 'resources';
/* GET home page. */
app.use(express.static(path));
app.post('/uploadImg', function(req, res, next) {
    var form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.uploadDir = __dirname + '/'+ path +'/upload';
    form.parse(req, function (err, fields, files) {
        if (err) {
            throw err;
        }
        var image = files.imgFile;
        var path = image.path;
        var url = '/upload' + path.substr(path.lastIndexOf('\\'), path.length);
        var info = {
            "error": 0,
            "url": url
        };
        res.send(info);
    });
});
app.listen(3000);