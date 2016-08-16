var React = require('react');
var ReactDom = require('react-dom');
var ReactApp = require('./components/ReactApp');

var mountNode = document.getElementById('react-main-mount');

ReactDom.render(<ReactApp/>, mountNode);
