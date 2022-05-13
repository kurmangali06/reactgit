import { ThemeContext } from "../utils/ThemeContext"
import React, { FC, useContext, useState } from "react";
import { useSelector } from "react-redux";
import { changeName, toggleProfile } from "../store/profile/slice";
import { useDispatch } from 'react-redux'

import { selectName, selectVisible } from "../store/profile/selectors";
import "./Profile.css"

export const Profile: FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const visible = useSelector(selectVisible);
  const name = useSelector(selectName)
  const dispatch = useDispatch()
  const [value, setValue] = useState('')

  return <div className="container">
    < h2>Profile</h2>
    <div> <p>{theme === 'light' ? '🌞' : '🌙'}</p>
      <button onClick={toggleTheme}>change theme</button>
    </div>
    <br />
    <div >
      <p>{name}</p>
      <input className="cheket" type="checkbox" checked={visible} />
      <button onClick={() => dispatch(toggleProfile())} > change visible</button>
      <br />
      <input type="text" onChange={(e) => setValue(e.target.value)} value={value} />
      <button onClick={() => dispatch(changeName(value))}> change name</button>
    </div>
  </div>
};