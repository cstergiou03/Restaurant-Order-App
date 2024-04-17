import "../Style/cards.css"

function Cards(props){
    return(
        <div className="card-container">
            <img src="../src/assets/spaggeti.jpg" className="food-img"/>
            <h3>{props.name}</h3>
            <h4>{props.price}</h4>
            <button className="addToCard-button">Add to cart</button>
        </div>
    );
}

export default Cards;