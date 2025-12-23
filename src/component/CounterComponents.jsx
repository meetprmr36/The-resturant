
const CounterComponents = ({ Count, Label, Image }) => {
    return (
        <div className="Counter-box">
            <div className="Count-content">
                <img src={Image} alt="Counter" />
                <h1>{Count}</h1>
                <p>{Label}</p>
            </div>
        </div>
    )
}

export default CounterComponents;