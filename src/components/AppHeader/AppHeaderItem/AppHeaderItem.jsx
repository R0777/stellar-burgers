import React from "react";
import s from "./AppHeaderItem.module.scss";
import clsx from "clsx";
import { Link, useRouteMatch } from "react-router-dom";



const AppHeaderItem = ({ icon, text, to, className }) => {
  const match = useRouteMatch({
    path: to,
    exact: to === "", 
  });

  return (
    <Link
      to={to}
      className={clsx(s.root, className, match && s.selected, "p-2")}
    >
      {icon} <p className={clsx("ml-1", "text_type_main-default")}>{text}</p>
    </Link>
  );
};
export default AppHeaderItem;
