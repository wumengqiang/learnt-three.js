require('es6-shim');
var morgan =    require('morgan'),
    express =  require("express"),
    minimist = require('minimist'),
    path =     require('path'),
    url =      require('url')
    ;

var app = express();
app.use(morgan('dev'));


process.title = 'learn-threejs';

app.use('/learn/threejs', express.static(path.join(__dirname, 'views')));
app.use('/learn/threejs/js', express.static(path.join(__dirname, 'js')));
app.use('/learn/threejs/less', express.static(path.join(__dirname, 'less')));
app.use('/learn/threejs/img', express.static(path.join(__dirname, 'img')));
app.use('/learn/threejs/json', express.static(path.join(__dirname, 'json')));

app.use('/learn/threejs/vendor', express.static(path.join(__dirname, 'node_modules')));

var argv = minimist(process.argv.slice(2));
var port = argv.port || 5011;
app.listen(port, function(){
    console.log('listening on port', port);
});
