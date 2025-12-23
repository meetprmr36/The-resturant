

const Heading = ({heading1, heading2, length}) => {
    return (
        <div className="Service-content">
            <h1>{heading1}</h1>
            <h3>{heading2}</h3>
            <div className="Theline-between" style={{ width: length }}></div>
        </div>
    )
}

export default Heading