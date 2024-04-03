"use strict";
exports.__esModule = true;
var readline_1 = require("readline");
var rl = readline_1["default"].createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.addListener("line", function (line) {
    var ucpc = line
        .split("")
        .filter(function (v) { return v.toUpperCase() == v; })
        .join("")
        .replace(/ /gi, "");
    if (ucpc == "UCPC")
        console.log("I love UCPC");
    else
        console.log("I hate UCPC");
});
