

const Button = ({ Name, length, height }) => {
    return (
        <button
            className="TheButton"
            style={{
                height: height,
                width: length
            }}
            type="submit"
        >{Name}</button>
    )
}

export default Button