"use strict";
exports.__esModule = true;
exports.SidebarLogo = void 0;
var router_1 = require("next/router");
var gi_1 = require("react-icons/gi");
exports.SidebarLogo = function () {
    var router = router_1.useRouter();
    return (React.createElement("div", { onClick: function () { return router.push("/"); }, className: "flex h-14 w-14 cursor-pointer items-center justify-center rounded-full p-4 transition hover:bg-slate-200 hover:bg-opacity-10" },
        React.createElement(gi_1.GiSharpLips, { size: 28, color: "gray\r\n      " })));
};
