'use strict';

var Webapi__Dom__Types = require("./Webapi__Dom__Types.js");
var Webapi__Dom__EventTarget = require("./Webapi__Dom__EventTarget.js");

function Impl(T) {
  var nodeType = function (self) {
    return Webapi__Dom__Types.decodeNodeType(self.nodeType);
  };
  return /* module */[/* nodeType */nodeType];
}

Webapi__Dom__EventTarget.Impl(/* module */[]);

function nodeType(self) {
  return Webapi__Dom__Types.decodeNodeType(self.nodeType);
}

function convertNodeToRealType(node) {
  var match = Webapi__Dom__Types.decodeNodeType(node.nodeType);
  switch (match) {
    case 0 : 
        return /* `Element */[
                -744106340,
                node
              ];
    case 1 : 
        return /* `Attribute */[
                482562044,
                node
              ];
    case 2 : 
        return /* `Text */[
                936573133,
                node
              ];
    case 3 : 
        return /* `CDATASection */[
                725956984,
                node
              ];
    case 4 : 
        return /* EntityReference */630972424;
    case 5 : 
        return /* Entity */967870275;
    case 6 : 
        return /* `ProcessingInstruction */[
                -367780133,
                node
              ];
    case 7 : 
        return /* `Comment */[
                -826170817,
                node
              ];
    case 8 : 
        return /* `Document */[
                -188437701,
                node
              ];
    case 9 : 
        return /* `DocumentType */[
                -595819627,
                node
              ];
    case 10 : 
        return /* `DocumentFragment */[
                1059191339,
                node
              ];
    case 11 : 
        return /* Notation */-43110174;
    case 12 : 
        return /* Unknown */785140586;
    
  }
}

exports.Impl = Impl;
exports.nodeType = nodeType;
exports.convertNodeToRealType = convertNodeToRealType;
/*  Not a pure module */
