import React, {FC} from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import s from "./NotFound.module.scss";

const NotFound:FC = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.content}>
          <h1>Опаньки! 404 Error</h1>
          <p>Таких бургеров у нас нет</p>
          <br />
          <br />
          <p>Поищите на <Link to='/' className={clsx(s.link)}>основном сайте</Link></p>
        </div>
      </div>
    </div>
  );
};
export default NotFound;
