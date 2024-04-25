import "../Style/payment.css"
import SelectedFood from "./SelectedFood";

function Payments({ cartItems, setCartItems , address}){

    const calculateTotalCost = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    function placeOrder() {
        if(cartItems.length === 0){
            alert("Nothing inside cart. Please add items to your cart before placing an order.");
        } else {
            const formattedItems = cartItems.map(item => ({
                name: item.name,
                quantity: item.quantity
            })); 
            const orderData = {
                items: formattedItems,
                total_price: calculateTotalCost(),
                address: address,
                order_date: new Date().toISOString().split('T')[0]
            };

            fetch('http://localhost:3000/api/undoneOrders', {
                method: 'POST',
                headers: {'Content-Type': 'application/json',},
                body: JSON.stringify(orderData),
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Order placed successfully:', data);
                setCartItems([]);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
                alert('Failed to place order');
            });
        }
    }
    

    return(
        <div className="order-box">
            <div className="order-head">
                <h2>Your Order</h2>
            </div>
            <div className="selected-items-box">
                {cartItems.map((selectedItem, index) => (
                    <SelectedFood 
                        key={index} 
                        name={selectedItem.name} 
                        quantity={selectedItem.quantity}
                        price={selectedItem.price} 
                        selectedItems={cartItems} 
                        setSelectedItems={setCartItems}
                        />
                ))}
            </div>
            <div className="place-order">
            <button className="order-button" onClick={placeOrder}>Place Order</button>
                <h3 className="total-price">Total Price: {calculateTotalCost()}€</h3>
            </div>
        </div>
    );
}

export default Payments;
