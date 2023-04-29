"use strict";
exports.__esModule = true;
exports.Layout = void 0;
var react_1 = require("react");
var Followbar_1 = require("./Layout/Followbar");
var Sidebar_1 = require("./Layout/Sidebar");
exports.Layout = function (_a) {
    var children = _a.children;
    return (react_1["default"].createElement("div", { className: "h-screen bg-slate-900" },
        react_1["default"].createElement("div", { className: "container mx-auto h-full max-w-6xl xl:px-32" },
            react_1["default"].createElement("div", { className: "grid h-full grid-cols-4" },
                react_1["default"].createElement(Sidebar_1.Sidebar, null),
                react_1["default"].createElement("div", { className: "col-span-3 border-x-[1px] border-gray-800 lg:col-span-2" }, children),
                react_1["default"].createElement(Followbar_1.Followbar, null)))));
};
