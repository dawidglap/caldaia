
const Button = ({ label, iconURL }) => {
    return (
        <button className='btn  btn-secondary'>
            {label}
            {/* <img
                src={iconURL}
                alt='arrow right icon'
                className=''
            /> */}
        </button>
    )
}

export default Button