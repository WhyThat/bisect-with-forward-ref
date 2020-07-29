'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Runtime$Bisect = require("bisect_ppx/src/runtime/bucklescript/runtime.js");

var match = Runtime$Bisect.register_file(undefined, undefined, "/media/disk/home/mathieu/Sources/repro-bisect/src/ExampleStyles.re", 0, "\x84\x95\xa6\xbe\0\0\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\x80");

var cb = match[1];

function ___bisect_post_visit___(point_index, result) {
  Curry._1(cb, point_index);
  return result;
}

var Bisect_visit______media___disk___home___mathieu___Sources___repro___bisect___src___ExampleStyles___re = {
  ___bisect_visit___: cb,
  ___bisect_post_visit___: ___bisect_post_visit___
};

var reasonReactBlue = "#48a9dc";

var style = "\n  body {\n    background-color: rgb(224, 226, 229);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  button {\n    background-color: white;\n    color: " + (String(reasonReactBlue) + (";\n    box-shadow: 0 0 0 1px " + (String(reasonReactBlue) + (";\n    border: none;\n    padding: 8px;\n    font-size: 16px;\n  }\n  button:active {\n    background-color: " + (String(reasonReactBlue) + ";\n    color: white;\n  }\n  .container {\n    margin: 12px 0px;\n    box-shadow: 0px 4px 16px rgb(200, 200, 200);\n    width: 720px;\n    border-radius: 12px;\n    font-family: sans-serif;\n  }\n  .containerTitle {\n    background-color: rgb(242, 243, 245);\n    border-radius: 12px 12px 0px 0px;\n    padding: 12px;\n    font-weight: bold;\n  }\n  .containerContent {\n    background-color: white;\n    padding: 16px;\n    border-radius: 0px 0px 12px 12px;\n  }\n")))));

exports.Bisect_visit______media___disk___home___mathieu___Sources___repro___bisect___src___ExampleStyles___re = Bisect_visit______media___disk___home___mathieu___Sources___repro___bisect___src___ExampleStyles___re;
exports.reasonReactBlue = reasonReactBlue;
exports.style = style;
/* match Not a pure module */
