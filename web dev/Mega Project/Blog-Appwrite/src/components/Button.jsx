

const Button = ({
    child,
    type = 'button',
    bgColor = 'bg-btn',
    textColor = 'textH',
    className='',
    ...props 
}) => {
  return (
    <button className={`px-6 py-2 rounded-lg ${bgColor} ${textColor} ${className} font-semibold hover:scale-105   transition-all duration-500 `} {...props}>
    {child}
    </button>
  )
}

export default Button
