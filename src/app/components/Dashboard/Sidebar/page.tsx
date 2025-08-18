import React from "react";
import {
  MdOutlineSettings,
  MdDashboard,
  MdOutlineNaturePeople,
  MdProductionQuantityLimits,
  MdAttachMoney,
  MdMoney,
  MdOutlineMenuBook,
  MdGroups2,
  MdHelp,
  MdLogout,
} from "react-icons/md";
import MenuLink from "./MenuLink/page";
import "./sidebar.css";
const menuItems = [
  {
    title: "Pages",
    list: [
      { title: "Dashboard", path: "/dashboard", icon: <MdDashboard /> },
      {
        title: "Users",
        path: "/dashboard/user",
        icon: <MdOutlineNaturePeople />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdProductionQuantityLimits />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transaction",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdMoney />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdOutlineMenuBook />,
      },
      {
        title: "Teams",
        path: "/dashboard/reports",
        icon: <MdGroups2 />,
      },
    ],
  },
  {
    title: "Users",
    list: [
      {
        title: "Setting",
        path: "/dashboard/setting",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelp />,
      },
    ],
  },
];
const Sidebar = () => {
  return (
    <div>
      <div className="flex   items-center gap-2 mb-5 ml-[0.75rem]">
        <img
          className="rounded-full"
          width="50"
          height="50"
          src="/user_avatar.jpg"
          alt="user"
        />
        <div className="flex flex-col">
          <span className="font-semibold">User Name</span>
          <span className="text-sm text-gray-500">User Title</span>
        </div>
      </div>
      <ul>
        {menuItems.map((category) => (
          <li key={category.title}>
            <span className="category font-bold text-sm px-3 block">
              {category.title}
            </span>
            {category.list.map((item) => (
              <div key={item.title}>
                <MenuLink item={item} />
              </div>
            ))}
          </li>
        ))}
        <button className="logout flex items-center gap-2 ml-[40px] size-full rounded-md text-sm">
          <MdLogout />
          Logout
        </button>
      </ul>
    </div>
  );
};

export default Sidebar;
