"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var PORT = 3000;
var app = (0, express_1.default)();
app.get("/", function (req, res) {
    res.json({ status: "OK" });
});
app.listen(PORT, function () {
    console.log("Server is running on http://localhost:".concat(PORT));
});
