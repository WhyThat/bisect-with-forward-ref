'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var ReactDom = require("react-dom");
var Runtime$Bisect = require("bisect_ppx/src/runtime/bucklescript/runtime.js");
var ExampleStyles$ReasonReactExamples = require("./ExampleStyles.bs.js");
var BlinkingGreeting$ReasonReactExamples = require("./BlinkingGreeting/BlinkingGreeting.bs.js");
var FetchedDogPictures$ReasonReactExamples = require("./FetchedDogPictures/FetchedDogPictures.bs.js");
var ReducerFromReactJSDocs$ReasonReactExamples = require("./ReducerFromReactJSDocs/ReducerFromReactJSDocs.bs.js");
var ReasonUsingJSUsingReason$ReasonReactExamples = require("./ReasonUsingJSUsingReason/ReasonUsingJSUsingReason.bs.js");

var match = Runtime$Bisect.register_file(undefined, undefined, "/media/disk/home/mathieu/Sources/repro-bisect/src/Index.re", 27, "\x84\x95\xa6\xbe\0\0\0\x8c\0\0\0\x1c\0\0\0m\0\0\0m\b\0\0l\0\xa0\x01\x01\x1d@\xa0\x01\x01CA\xa0\x01\x01_B\xa0\x01\x01\x93M\xa0\x01\x01\xc9L\xa0\x01\x01\xf1K\xa0\x01\x02\x1fJ\xa0\x01\x02GI\xa0\x01\x02dH\xa0\x01\x02\x94G\xa0\x01\x02\xc1F\xa0\x01\x02\xebE\xa0\x01\x03\x17D\xa0\x01\x03KC\xa0\x01\x03{Q\xa0\x01\x03\x90O\xa0\x01\x03\xa3N\xa0\x01\x03\xd5P\xa0\x01\x04\x01T\xa0\x01\x04\x1cR\xa0\x01\x040S\xa0\x01\x04dW\xa0\x01\x04{U\xa0\x01\x04\x8fV\xa0\x01\x04\xbeZ\xa0\x01\x04\xdbX\xa0\x01\x04\xefY");

var cb = match[1];

function ___bisect_post_visit___(point_index, result) {
  Curry._1(cb, point_index);
  return result;
}

var Bisect_visit______media___disk___home___mathieu___Sources___repro___bisect___src___Index___re = {
  ___bisect_visit___: cb,
  ___bisect_post_visit___: ___bisect_post_visit___
};

var result = document.createElement("style");

Curry._1(cb, 0);

document.head.appendChild(result);

Curry._1(cb, 1);

result.innerHTML = ExampleStyles$ReasonReactExamples.style;

Curry._1(cb, 2);

function makeContainer(text) {
  Curry._1(cb, 13);
  var result = document.createElement("div");
  Curry._1(cb, 12);
  result.className = "container";
  Curry._1(cb, 11);
  var result$1 = document.createElement("div");
  Curry._1(cb, 10);
  result$1.className = "containerTitle";
  Curry._1(cb, 9);
  result$1.innerText = text;
  Curry._1(cb, 8);
  var result$2 = document.createElement("div");
  Curry._1(cb, 7);
  result$2.className = "containerContent";
  Curry._1(cb, 6);
  result.appendChild(result$1);
  Curry._1(cb, 5);
  result.appendChild(result$2);
  Curry._1(cb, 4);
  document.body.appendChild(result);
  Curry._1(cb, 3);
  return result$2;
}

var result$1 = React.createElement(BlinkingGreeting$ReasonReactExamples.make, {
      children: (Curry._1(cb, 14), "Hello!")
    });

var result$2 = makeContainer("Blinking Greeting");

ReactDom.render((Curry._1(cb, 15), result$1), (Curry._1(cb, 16), result$2));

Curry._1(cb, 17);

var result$3 = React.createElement(ReducerFromReactJSDocs$ReasonReactExamples.make, { });

var result$4 = makeContainer("Reducer From ReactJS Docs");

ReactDom.render((Curry._1(cb, 18), result$3), (Curry._1(cb, 19), result$4));

Curry._1(cb, 20);

var result$5 = React.createElement(FetchedDogPictures$ReasonReactExamples.make, { });

var result$6 = makeContainer("Fetched Dog Pictures");

ReactDom.render((Curry._1(cb, 21), result$5), (Curry._1(cb, 22), result$6));

Curry._1(cb, 23);

var result$7 = React.createElement(ReasonUsingJSUsingReason$ReasonReactExamples.make, { });

var result$8 = makeContainer("Reason Using JS Using Reason");

ReactDom.render((Curry._1(cb, 24), result$7), (Curry._1(cb, 25), result$8));

Curry._1(cb, 26);

var style = result;

exports.Bisect_visit______media___disk___home___mathieu___Sources___repro___bisect___src___Index___re = Bisect_visit______media___disk___home___mathieu___Sources___repro___bisect___src___Index___re;
exports.style = style;
exports.makeContainer = makeContainer;
/* match Not a pure module */
