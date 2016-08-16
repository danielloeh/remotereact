const React = require('react');
const ReactServer = require('react-dom/server');
const ReactApp = React.createFactory(require('../components/ReactApp'));

module.exports = function(app) {

	app.get('/', function(req, res){
		var reactHtml = ReactServer.renderToString(<ReactApp/>);
    res.render('index.ejs', {reactOutput: reactHtml});
	});

};
