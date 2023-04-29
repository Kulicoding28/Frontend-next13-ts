"use strict";
exports.__esModule = true;
exports.Button = void 0;
exports.Button = function (_a) {
    var label = _a.label, secondary = _a.secondary, fullWidth = _a.fullWidth, large = _a.large, onClick = _a.onClick, disable = _a.disable, outline = _a.outline;
    return (React.createElement("button", { disabled: disable, onClick: onClick, className: "\n    rounded-full\n    border-2\n    font-semibold\n    transition\n    hover:opacity-70\n    disabled:cursor-not-allowed\n    disabled:opacity-70\n    " + (fullWidth ? "w-full" : "w-fit") + "\n    \n    " + (secondary ? "bg-neutral-300" : "bg-blue-400") + "\n    \n    " + (secondary ? "text-gray-700" : "text-neutral-300") + "\n    \n    " + (secondary ? "border-black" : "border-blue-400") + "\n    \n    " + (large ? "text-xl" : "text-md") + "\n    " + (large ? "px-5" : "px-4") + "\n    " + (large ? "py-3" : "py-2") + "\n    " + (outline ? "bg-transparent" : "") + "\n    " + (outline ? "border-neutral-300" : "") + "\n    " + (outline ? "text-neutral-300" : "") + "\n    " }, label));
};
