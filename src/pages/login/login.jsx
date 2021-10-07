import React, { useRef } from "react";
import { Link, Redirect, useHistory, useLocation } from "react-router-dom";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import s from "./Login.module.scss";
import { useDispatch } from "../../services/hooks";
import { loginUser } from "../../services/store/auth/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { state } = useLocation();
  const [form, setForm] = React.useState({
    email: "",
    password: "",
  });
  const refreshToken = localStorage.getItem("refreshToken");

  const inputRef = useRef(null);

  const onIconClick = () => {
    setTimeout(() => {
      if (inputRef && inputRef.current) {
        inputRef.current.focus();
      }
    }, 0);
  
  };

  const onChangeInput = (ev) => {
    setForm((prevState) => {
      return { ...prevState, [ev.target.name]: ev.target.value };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await dispatch(loginUser(form));
    history.replace({
      pathname: state?.from.pathname || "/",
    });
  };

  if (refreshToken) {
    return (
      <Redirect
        to={{
          pathname: state?.from.pathname || "/",
        }}
      />
    );
  }

  return (
    <div className={s.root}>
      <p className="text text_type_main-medium pt-6">Вход </p>
      <form className={s.form} onSubmit={handleSubmit}>
        <div className={"mb-6"} style={{ minWidth: 480 }}>
          <Input
            type={"email"}
            placeholder={"E-mail"}
            onChange={onChangeInput}
            value={form.email}
            name={"email"}
            error={false}
            ref={inputRef}
            onIconClick={onIconClick}
            errorText={"Ошибка"}
            size={"default"}
          />
          <Input
            type={"password"}
            placeholder={"Пароль"}
            onChange={onChangeInput}
            icon={"ShowIcon"}
            value={form.password}
            name={"password"}
            error={false}
            ref={inputRef}
            onIconClick={onIconClick}
            errorText={"Ошибка"}
            size={"default"}
          />
        </div>
        <Button type="primary" size="medium">
          Войти
        </Button>
      </form>

      <div className={"mt-10"}>
        <p className="text text_type_main-default text_color_inactive">
          Новый пользователь?{" "}
          <Link to={"/register"} className={"text_color_link"}>
            Зарегистрироваться
          </Link>
        </p>
        <p className="text text_type_main-default text_color_inactive">
          Забыли пароль?{" "}
          <Link to={"/forgot-password"} className={"text_color_link"}>
            Восстановить пароль
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Login;
