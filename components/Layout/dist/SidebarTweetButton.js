"use strict";
exports.__esModule = true;
exports.SidebarTweetButton = void 0;
var router_1 = require("next/router");
var fa_1 = require("react-icons/fa");
exports.SidebarTweetButton = function () {
    var router = router_1.useRouter();
    return (React.createElement("div", { onClick: function () { return router.push("/"); } },
        React.createElement("div", { className: "mt-6 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-blue-400 p-4 transition hover:bg-opacity-80 lg:hidden" },
            React.createElement(fa_1.FaPenSquare, { size: 24, color: "white" })),
        React.createElement("div", { className: "mt-6 hidden cursor-pointer rounded-full bg-blue-400 px-4 py-4 transition hover:bg-opacity-80 lg:block" },
            React.createElement("p", { className: "hidden text-center text-[20px] font-semibold text-white lg:block" }, "Ngoceh"))));
};
