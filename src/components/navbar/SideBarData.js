import { AiOutlineHome, AiOutlineFileDone } from "react-icons/ai";
export const SidebarData = [
  {
    title: "НҮҮР",
    icon: <AiOutlineHome />,
    path: "/",
    cName: "nav-text",
    subNav: false,
  },
  {
    title: "СОРИЛУУД",
    icon: <AiOutlineFileDone />,
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
      {
        title: "Бага анги",
        path: "/lower-class",
      },
    ],
  },
  // {
  //   title: "НЭВТРЭХ",
  //   icon: <IoLogInOutline />,
  //   path: "/log-in",
  //   subNav: false,
  // },
];
