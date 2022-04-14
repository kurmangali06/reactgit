
export const Button = (props) => {
  return <button onClick={props.click} className='submit'>{props.name}</button>
}