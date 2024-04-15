import { func, any } from 'prop-types'

const Button = ({ value, onClick }) => {
  return (
    <>
    <button className="p-1 w-14 h-14 inline-block border-2 rounded-sm text-lg"  onClick={onClick}>
        {value}
    </button>
    </>
  )
}

Button.propTypes = { value: any, onClick: func }

export default Button;