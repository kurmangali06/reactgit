import { ThemeContext } from "../utils/ThemeContext"
import React, { FC, useContext, useState } from "react";
import { useSelector } from "react-redux";
import { changeName, toggleProfile } from "../store/profile/actions";
import { useDispatch } from 'react-redux'
import Input from '@mui/material/Input';
import ButtonU from '@mui/material/Button';
import { selectName, selectVisible } from "../store/profile/selectors";

export const Profile: FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const visible = useSelector(selectVisible);
  const name = useSelector(selectName)
  const dispatch = useDispatch()
  const [value, setValue] = useState('')

  return <>
    < h2>Profile</h2>
    <div> <p>{theme === 'light' ? '🌞' : '🌙'}</p>
      <button onClick={toggleTheme}>change theme</button>
    </div>
    <br />
    <div>
      {name}
      <input type="checkbox" checked={visible} />
      <ButtonU onClick={() => dispatch(toggleProfile())} > change visible</ButtonU>
      <br />
      <Input type="text" onChange={(e) => setValue(e.target.value)} value={value} />
      <ButtonU onClick={() => dispatch(changeName(value))}> change name</ButtonU>
    </div>
  </>
};