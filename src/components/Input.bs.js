'use strict';

var React = require("react");

function Input(Props) {
  var name = Props.name;
  return React.createElement("input", {
              id: name,
              placeholder: name,
              type: "text"
            });
}

var make = Input;

exports.make = make;
/* react Not a pure module */
