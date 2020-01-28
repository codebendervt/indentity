'use strict';

var React = require("react");
var Input$ReasonReactExamples = require("../components/Input.bs.js");

function Login(Props) {
  var name = Props.name;
  return React.createElement("div", undefined, React.createElement(Input$ReasonReactExamples.make, {
                  name: "username"
                }), React.createElement(Input$ReasonReactExamples.make, {
                  name: "password"
                }), React.createElement("button", {
                  type: "submit"
                }, name));
}

var make = Login;

exports.make = make;
/* react Not a pure module */
