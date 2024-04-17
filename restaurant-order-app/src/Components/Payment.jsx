import "../Style/payment.css"
import SelectedFood from "./SelectedFood";

function Payment(){
    return(
        <div className="order-box">
            <div className="place-order">
                <button className="order-button">Place Order</button>
                <h3 className="total-price">Total Price: 60$</h3>
            </div>
            <div className="selected-items-box">
                <SelectedFood/>
                <SelectedFood/>
                <SelectedFood/>
            </div>
        </div>
    );
}

export default Payment;