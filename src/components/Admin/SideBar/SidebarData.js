import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as FcIcons from "react-icons/fc";
import * as GoIcons from "react-icons/go";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Educations",
    path: "/education",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Experiences",
    path: "/experience",
    icon: <FcIcons.FcBusiness />,
    cName: "nav-text",
  },
  {
    title: "Skills",
    path: "/skill",
    icon: <IoIcons.IoMdCodeWorking />,
    cName: "nav-text",
  },
  {
    title: "Projects",
    path: "/project",
    icon: <GoIcons.GoProject />,
    cName: "nav-text",
  },
  {
    title: "Messages",
    path: "/messages",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
  {
    title: "Logout",
    path: "/support",
    icon: <IoIcons.IoMdLogOut />,
    cName: "nav-text",
  },
];
