import React, { useState } from 'react';
import { Button } from "./Button";
import { Input } from "./Input";



export const Form = () => {
  const [name, setName] = useState('click')
  const [value, setValue] = useState('')
  const [messages, setMessages] = useState([])
  const [visible, setVisible] = useState(true)

  const handleClick = () => {
    setMessages([...messages, value])
    setValue('')
  }

  const handleChange = (ev) => {
    setValue(ev.target.value)
  }


  return <>
    <div className='container form'>
      {visible && <ul className='list1a'>
        {messages.map((message, idx) =>
          <li key={idx}>{message}</li>
        )}
      </ul>}

      <Input change={handleChange} value={value} />
      <Button name={name} click={handleClick} />

      <br />
      <button onClick={() => setVisible(!visible)} className='submit' >
        {visible ? 'показать' : 'очистить'}
      </button>
    </div>
  </>
}
export default Form;