import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { changeAuth, changeName } from "../store/profile/slice";

export const SignIn: FC = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false)
    if (login === "gb" && password === "gb") {
      dispatch(changeAuth(true));
    } else {
      setError(true)
    }
  }

  return (
    <>
      <h2>SignIn</h2>
      <hr />
      <form onSubmit={handleSubmit} >
        <p>ЛОГИН</p>
        <input type="text" onChange={(e) => setLogin(e.target.value)} value={login} />
        <br />
        <p>ПАРОЛЬ</p>
        <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
        <button>sign in</button>

        {error && <p>ЛОГИН ИЛИ ПАРОЛЬ НЕ ВЕРНЫ</p>}
      </form>
    </>
  )
}