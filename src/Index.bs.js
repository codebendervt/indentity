'use strict';

var React = require("react");
var ReactDOMRe = require("reason-react/src/ReactDOMRe.js");
var Login$ReasonReactExamples = require("./Login/Login.bs.js");

ReactDOMRe.renderToElementWithId(React.createElement(Login$ReasonReactExamples.make, {
          name: "Login"
        }), "login");

/*  Not a pure module */
