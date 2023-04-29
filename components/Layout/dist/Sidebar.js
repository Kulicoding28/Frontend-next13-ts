"use strict";
exports.__esModule = true;
exports.Sidebar = void 0;
var bs_1 = require("react-icons/bs");
var bi_1 = require("react-icons/bi");
var fa_1 = require("react-icons/fa");
var SidebarItem_1 = require("./SidebarItem");
var SidebarLogo_1 = require("./SidebarLogo");
var SidebarTweetButton_1 = require("./SidebarTweetButton");
exports.Sidebar = function () {
    var items = [
        {
            label: "Home",
            href: "/",
            icon: bs_1.BsHouseFill
        },
        {
            label: "Notifications",
            href: "/notifications",
            icon: bs_1.BsBellFill
        },
        {
            label: "Profile",
            href: "/users/123",
            icon: fa_1.FaUser
        },
    ];
    return (React.createElement("div", { className: "col-span-1 h-full pr-4 md:pr-6" },
        React.createElement("div", { className: "flex flex-col  items-end" },
            React.createElement("div", { className: "space-y-2 lg:w-[230px]" },
                React.createElement(SidebarLogo_1.SidebarLogo, null),
                items.map(function (item) { return (React.createElement(SidebarItem_1.SidebarItem, { key: item.href, href: item.href, label: item.label, icon: item.icon })); }),
                React.createElement(SidebarItem_1.SidebarItem, { onClick: function () { }, icon: bi_1.BiLogOut, label: "Logout" }),
                React.createElement(SidebarTweetButton_1.SidebarTweetButton, null)))));
};
