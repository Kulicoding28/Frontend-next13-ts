"use strict";
exports.__esModule = true;
exports.SidebarItem = void 0;
exports.SidebarItem = function (_a) {
    var label = _a.label, href = _a.href, Icon = _a.icon, onClick = _a.onClick;
    return (React.createElement("div", { className: "flex flex-row items-center" },
        React.createElement("div", { className: "relative flex h-14 w-14 cursor-pointer items-center justify-center rounded-full p-4 hover:bg-slate-200 hover:bg-opacity-10 lg:hidden" },
            React.createElement(Icon, { size: 28, color: "gray" })),
        React.createElement("div", { className: "relative hidden cursor-pointer items-center gap-4 rounded-full p-4 hover:bg-slate-200 hover:bg-opacity-10 lg:flex " },
            React.createElement(Icon, { size: 24, color: "gray" }),
            React.createElement("p", { className: "hidden text-neutral-300 lg:block" }, label))));
};
