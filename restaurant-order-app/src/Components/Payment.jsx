import "../Style/payment.css"
import SelectedFood from "./SelectedFood";

function Payments({ selectedItems, setSelectedItems }){

    const calculateTotalCost = () => {
        return selectedItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return(
        <div className="order-box">
            <div className="place-order">
                <button className="order-button">Place Order</button>
                <h3 className="total-price">Total Price: {calculateTotalCost()}€</h3>
            </div>
            <div className="selected-items-box">
                {selectedItems.map((selectedItem, index) => (
                    <SelectedFood 
                        key={index} 
                        name={selectedItem.name} 
                        quantity={selectedItem.quantity}
                        price={selectedItem.price} 
                        selectedItems={selectedItems} 
                        setSelectedItems={setSelectedItems}
                        />
                ))}
            </div>
            <div className="order-head">
                <h2>Your Order</h2>
            </div>
        </div>
    );
}

export default Payments;