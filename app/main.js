const React = require('react');
const ReactDom = require('react-dom');
const ReactDynamicLoader = require('./components/ReactDynamicLoader');

ReactDom.render(<ReactDynamicLoader/>, document.getElementById('main-mount'));
