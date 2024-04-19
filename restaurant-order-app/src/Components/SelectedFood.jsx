import React from 'react';
import "../Style/selectedFood.css";

function SelectedFood({ name, quantity, price, selectedItems, setSelectedItems }) {

    const handleRemoveFromCart = () => {
        const existingItemIndex = selectedItems.findIndex(item => item.name === name);

        if (existingItemIndex !== -1) {
            if (selectedItems[existingItemIndex].quantity > 1) {
                const updatedItems = selectedItems.map((item, index) => {
                    if (index === existingItemIndex) {
                        return { ...item, quantity: item.quantity - 1 };
                    }
                    return item;
                });
                setSelectedItems(updatedItems);
            } else {
                const updatedItems = selectedItems.filter((item, index) => index !== existingItemIndex);
                setSelectedItems(updatedItems);
            }
        }
    };

    return (
        <div className="selected-item">
            <h3>{name}</h3>
            <h3>{quantity}</h3>
            <h3>{price}€</h3>
            <button className="discard-button" onClick={handleRemoveFromCart}>
                <img src="../src/assets/discard.png" alt="Remove"/>
            </button>
        </div>
    );
}

export default SelectedFood;