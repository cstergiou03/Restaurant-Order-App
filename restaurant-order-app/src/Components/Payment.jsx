import "../Style/payment.css"
import SelectedFood from "./SelectedFood";
import Popup from 'reactjs-popup';

function Payments({ selectedItems, setSelectedItems }){

    const calculateTotalCost = () => {
        return selectedItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    function placeOrder(){
        setSelectedItems([]);
    }

    return(
        <div className="order-box">
            <div className="order-head">
                <h2>Your Order</h2>
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
            <div className="place-order">
                <Popup className="popup" trigger=
                    {<button className="order-button" onClick={placeOrder}>Place Order</button>} 
                    modal nested>
                    {
                        close => (
                            <div className='overlay'>
                                <div className='modal'>
                                    <img src="../src/assets/delivery.gif" className="delivery-gif"/>
                                    <h2 className="info-head">Your order is coming...🥳</h2>
                                    <button className='info-button' onClick={() => close()}>Close</button>
                                </div>
                            </div>
                        )
                    }
                </Popup>  
                <h3 className="total-price">Total Price: {calculateTotalCost()}€</h3>
            </div>
        </div>
    );
}

export default Payments;