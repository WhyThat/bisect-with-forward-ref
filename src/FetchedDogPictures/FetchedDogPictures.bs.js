'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var Runtime$Bisect = require("bisect_ppx/src/runtime/bucklescript/runtime.js");

var match = Runtime$Bisect.register_file(undefined, undefined, "/media/disk/home/mathieu/Sources/repro-bisect/src/FetchedDogPictures/FetchedDogPictures.re", 30, "\x84\x95\xa6\xbe\0\0\0\x9b\0\0\0\x1f\0\0\0y\0\0\0y\b\0\0x\0\xa0\x01\0\xb8]\xa0\x01\0\xe9[\xa0\x01\x01\x89\\\xa0\x01\x01\xa0Y\xa0\x01\x01\xf5T\xa0\x01\x02\x07S\xa0\x01\x02\"U\xa0\x01\x028R\xa0\x01\x02`P\xa0\x01\x02\x8fQ\xa0\x01\x02\xbaV\xa0\x01\x02\xc8O\xa0\x01\x02\xf0M\xa0\x01\x03\x0fN\xa0\x01\x03:W\xa0\x01\x03?X\xa0\x01\x05@Z\xa0\x01\x05d@\xa0\x01\x05\xfeJ\xa0\x01\x06 A\xa0\x01\x06=K\xa0\x01\x06YB\xa0\x01\x06nL\xa0\x01\x06\x98H\xa0\x01\x06\xbdG\xa0\x01\x07mE\xa0\x01\x07yC\xa0\x01\x07\x81D\xa0\x01\b\x9fF\xa0\x01\b\xd5I");

var cb = match[1];

function ___bisect_post_visit___(point_index, result) {
  Curry._1(cb, point_index);
  return result;
}

var Bisect_visit______media___disk___home___mathieu___Sources___repro___bisect___src___FetchedDogPictures___FetchedDogPictures___re = {
  ___bisect_visit___: cb,
  ___bisect_post_visit___: ___bisect_post_visit___
};

function FetchedDogPictures(Props) {
  Curry._1(cb, 29);
  var result = React.useState((function () {
          Curry._1(cb, 27);
          return /* LoadingDogs */0;
        }));
  Curry._1(cb, 28);
  var setState = result[1];
  var state = result[0];
  React.useEffect((function () {
          Curry._1(cb, 25);
          var result = fetch("https://dog.ceo/api/breeds/image/random/3");
          var result$1 = (Curry._1(cb, 20), result).then((function (response) {
                  Curry._1(cb, 19);
                  return response.json();
                }));
          var result$2 = (Curry._1(cb, 21), result$1).then((function (jsonResponse) {
                  Curry._1(cb, 18);
                  Curry._1(setState, (function (_previousState) {
                          Curry._1(cb, 16);
                          return /* LoadedDogs */[jsonResponse.message];
                        }));
                  Curry._1(cb, 17);
                  return Promise.resolve(undefined);
                }));
          (Curry._1(cb, 22), result$2).catch((function (_err) {
                  Curry._1(cb, 15);
                  Curry._1(setState, (function (_previousState) {
                          Curry._1(cb, 13);
                          return /* ErrorFetchingDogs */1;
                        }));
                  Curry._1(cb, 14);
                  return Promise.resolve(undefined);
                }));
          Curry._1(cb, 23);
          Curry._1(cb, 24);
          
        }), ([]));
  Curry._1(cb, 26);
  var result$1 = {
    display: "flex",
    height: "120px",
    alignItems: "center",
    justifyContent: "center"
  };
  var tmp;
  if (typeof state === "number") {
    if (state !== 0) {
      Curry._1(cb, 10);
      Curry._1(cb, 1);
      tmp = "An error occurred!";
    } else {
      Curry._1(cb, 11);
      Curry._1(cb, 2);
      tmp = "Loading...";
    }
  } else {
    var dogs = state[0];
    Curry._1(cb, 12);
    var result$2 = function (param) {
      return Belt_Array.mapWithIndex(dogs, param);
    };
    var result$3 = Curry._1((Curry._1(cb, 8), result$2), (function (i, dog) {
            Curry._1(cb, 7);
            var result = dogs.length;
            var result$1 = {
              backgroundImage: "url(" + (String(dog) + ")"),
              backgroundPosition: "center",
              height: "120px",
              marginRight: i === ((Curry._1(cb, 5), result) - 1 | 0) ? (Curry._1(cb, 3), "0px") : (Curry._1(cb, 4), "8px"),
              width: "100%",
              backgroundSize: "cover",
              borderRadius: "8px",
              boxShadow: "0px 4px 16px rgb(200, 200, 200)"
            };
            Curry._1(cb, 6);
            return React.createElement("div", {
                        key: dog,
                        style: result$1
                      });
          }));
    Curry._1(cb, 8);
    Curry._1(cb, 9);
    tmp = result$3;
  }
  return React.createElement("div", {
              style: (Curry._1(cb, 0), result$1)
            }, tmp);
}

var make = FetchedDogPictures;

exports.Bisect_visit______media___disk___home___mathieu___Sources___repro___bisect___src___FetchedDogPictures___FetchedDogPictures___re = Bisect_visit______media___disk___home___mathieu___Sources___repro___bisect___src___FetchedDogPictures___FetchedDogPictures___re;
exports.make = make;
/* match Not a pure module */
