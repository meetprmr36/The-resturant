

const SpecialItem = ({ imgSrc, altText, heading }) => {
    return (
        <div className="Wholebox">
            <div className="Thebox">
                <div className="Box-content">
                    <img className="Box-img" alt={altText} src={imgSrc} />
                    <div className="HiddenBox">
                        <h1>Order Now!</h1>
                        <h2>Call </h2>
                        <p>1800 121 9420</p>
                    </div>
                </div>
            </div>
            <h4 className="Box-heading">{heading}</h4>
        </div>
    )
}

export default SpecialItem;