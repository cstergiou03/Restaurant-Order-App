import "../Style/cards.css";

function Cards(props) {

    const handleAddToCart = () => {
        const { name, price, selectedItems, setSelectedItems } = props;

        const existingItemIndex = selectedItems.findIndex(item => item.name === name);

        if (existingItemIndex !== -1) {
            const updatedItems = selectedItems.map((item, index) => {
                if (index === existingItemIndex) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
            setSelectedItems(updatedItems);
        } else {
            setSelectedItems([...selectedItems, { name, price, quantity: 1 }]);
        }
    };

    return (
        <div className="card-container">
            <img src={props.path} className="food-img" alt={props.name} />
            <h3>{props.name}</h3>
            <h4>{props.price}€</h4>
            <button className="addToCard-button" onClick={handleAddToCart}>Add to cart</button>
        </div>
    );
}

export default Cards;
