import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Нүүр",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
    subNav: false,
  },
  {
    title: "Сорил",
    path: "/test",
    subNav: [
      {
        title: "Уралдаан",
        path: "/exam",
      },
      {
        title: "ЭЕШ",
        path: "/eec",
      },
      {
        title: "Ахлах анги",
        path: "/high-class",
      },
      {
        title: "Дунд анги",
        path: "/mid-class",
      },
    ],
  },
  {
    title: "Нэвтрэх",
    path: "/log-in",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
    subNav: false,
  },
];
