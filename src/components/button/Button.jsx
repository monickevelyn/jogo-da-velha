import { func, any } from 'prop-types'

const Button = ({ value, onClick }) => {
  return (
    <>
    <button className="p-1 w-14 h-14 inline-block rounded-lg text-lg bg-gray-900"  onClick={onClick}>
        {value}
    </button>
    </>
  )
}

Button.propTypes = { value: any, onClick: func }

export default Button;