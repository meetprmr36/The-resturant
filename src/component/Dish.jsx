

const Dish = ({Name, Price,image}) => {
    return (
        <div className="Dish">
            <div className="Dish-img">
                <img src={image} alt="Dish1" />
            </div>
            <div className="Dish-content">
                <div className="Dish-name">{Name}</div>
                <div className="Dish-discription">Vegitables,cheese,Mushroom,Grill Items</div>
            </div>
            <div className="Dish-price">
                <div className="Price1">---------</div>
                <div className="Price2">{Price}</div>
            </div>
        </div>
    )
}

export default Dish