"use strict";
exports.__esModule = true;
exports.Header = void 0;
var router_1 = require("next/router");
var react_1 = require("react");
var bi_1 = require("react-icons/bi");
exports.Header = function (_a) {
    var label = _a.label, showBackArrow = _a.showBackArrow;
    var router = router_1.useRouter();
    var handleBack = react_1.useCallback(function () {
        router.back();
    }, [router]);
    return (React.createElement("div", { className: "border-b-[0.5px] border-slate-600 p-5" },
        React.createElement("div", { className: " flex flex-row items-center gap-2" },
            showBackArrow && (React.createElement(bi_1.BiArrowBack, { onClick: handleBack, color: "gray", size: 20, className: "cursor-pointer transition hover:opacity-70" })),
            React.createElement("h1", { className: "font-semibold text-neutral-300" }, label))));
};
