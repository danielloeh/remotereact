var React = require('react');

var ReactApp = React.createClass({

  getInitialState: function() {
    return { externalSrc: "" };
  },

  componentDidMount: function () {
    this.loadRemoteComponent('/static/component.html')
      .then(this.addSrcToState)
      .catch((err) => {
        console.log("Something went wrong: " + err);
      });

  },

  addSrcToState: function (htmlSrc) {
    this.setState({externalSrc: htmlSrc})
  },

  createMarkup: function(){
    return  {__html: this.state.externalSrc }
  },

  loadRemoteComponent: function (url) {
    return new Promise(function (resolve, reject) {
      var request = new XMLHttpRequest();
      console.log("url" + url);
      request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
          var htmlSrc = request.responseText;
          return resolve(htmlSrc);
        } else {
          return reject();
        }
      };

      request.open('GET', url);
      request.send();
    });
  },

  render: function () {
    return (
      <div>
        <div dangerouslySetInnerHTML={this.createMarkup()} />
      </div>
    )
  }
});

module.exports = ReactApp;