import React, { useState } from 'react';
import "../Style/foodCard.css";
import Cards from "./Cards";
import Payment from "./Payment";

function FoodCard(){

    const foods = [
        { name: 'Spaghetti', price: 6, path: '../src/assets/spaggeti.jpg' },
        { name: 'Pizza', price: 8.5, path: '../src/assets/pizza.jpg' },
        { name: 'Gyros', price: 4, path: '../src/assets/gyros.jpg' },
        { name: 'Burger', price: 6.5, path: '../src/assets/burger.jpg' },
        { name: 'Souvlaki', price: 1.8, path: '../src/assets/souvlakia.jpg' },
    ];

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedItems, setSelectedItems] = useState([]);

    // Λειτουργία φιλτραρίσματος βάσει του searchTerm
    const filteredFoods = foods.filter(food => {
        return food.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return(
        <div className="foodCard-container">
            <div className="top-container">
                <img src="../src/assets/user.jpg" className="user-img" alt="User"></img>
                <input 
                    type="text"
                    placeholder="Search..."
                    className="food-search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="bottom-container">
                <div className="cards-container">
                    {filteredFoods.map((food, index) => (
                        <Cards 
                            key={index} 
                            name={food.name} 
                            price={food.price} 
                            path={food.path}
                            selectedItems={selectedItems} 
                            setSelectedItems={setSelectedItems}
                        />
                    ))}
                </div>
                <div className="payment-container">
                    <Payment 
                        selectedItems={selectedItems}
                        setSelectedItems={setSelectedItems}
                    />
                </div>
            </div>
        </div>
    );
}

export default FoodCard;
