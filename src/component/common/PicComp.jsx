

const PicComp = ({  length }) => {
    return (
        <div className="pic-comp">
            <div className="overlay"></div>
            <div className="pic-comp-content">
                <h1>Surprise For Your Plate</h1>
                <div className="Pic-line" style={{ width: length }}></div>
                <img src="https://demoxml.com/html/restaurant/assets/images/surprise-icon.png" alt="Counter" />
            </div>
        </div>
    );
};

export default PicComp;