'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var ReactJSCard = require("./ReactJSCard");
var Runtime$Bisect = require("bisect_ppx/src/runtime/bucklescript/runtime.js");

var match = Runtime$Bisect.register_file(undefined, undefined, "/media/disk/home/mathieu/Sources/repro-bisect/src/ReasonUsingJSUsingReason/ReasonUsingJSUsingReason.re", 0, "\x84\x95\xa6\xbe\0\0\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\x80");

var cb = match[1];

function ___bisect_post_visit___(point_index, result) {
  Curry._1(cb, point_index);
  return result;
}

var Bisect_visit______media___disk___home___mathieu___Sources___repro___bisect___src___ReasonUsingJSUsingReason___ReasonUsingJSUsingReason___re = {
  ___bisect_visit___: cb,
  ___bisect_post_visit___: ___bisect_post_visit___
};

var make = ReactJSCard;

exports.Bisect_visit______media___disk___home___mathieu___Sources___repro___bisect___src___ReasonUsingJSUsingReason___ReasonUsingJSUsingReason___re = Bisect_visit______media___disk___home___mathieu___Sources___repro___bisect___src___ReasonUsingJSUsingReason___ReasonUsingJSUsingReason___re;
exports.make = make;
/* match Not a pure module */
