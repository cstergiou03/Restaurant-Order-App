import React, { useState, useEffect } from 'react';
import "../Style/foodCard.css";
import Cards from "./Cards";
import Payment from "./Payment";
import Popup from 'reactjs-popup';

function FoodCard(){

    const [foods, setFoods] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedItems, setSelectedItems] = useState([]);
    const [username, setUsername] = useState("Chris");
    const [surname, setSurname] = useState("Stergiou");
    const [address, setAddress] = useState("Trapezountos 1");
    const [phoneNumber, setPhoneNumber] = useState("6987748580");

    useEffect(() => {
        fetch('http://localhost:3000/api/foods')
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            setFoods(data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
    }, [])

    const filteredFoods = foods.filter(food => {
        return food.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    function handleUsername(event){
        setUsername(event.target.value);
    }

    function handleSurname(event){
        setSurname(event.target.value);
    }

    function handleAddress(event){
        setAddress(event.target.value);
    }

    function handlePhoneNumber(event){
        setPhoneNumber(event.target.value);
    }

    return(
        <div className="foodCard-container">
            <div className="top-container">
                <Popup className="popup" trigger=
                    {<button className='img-button'><img src="../src/assets/user.jpg" className="user-img" alt="User"></img></button>} 
                    modal nested>
                    {
                        close => (
                            <div className='overlay'>
                                <div className='modal'>
                                    <h2 className='info-head'>Customer Info</h2>
                                    <input type="text" placeholder='Name' className='info' value={username} onChange={handleUsername}/>
                                    <input type="text" placeholder='Surname' className='info' value={surname} onChange={handleSurname}/>
                                    <input type="text" placeholder='Address' className='info' value={address} onChange={handleAddress}/>
                                    <input type="text" placeholder='Phone Number' className='info' maxLength={10} value={phoneNumber} onChange={handlePhoneNumber}/>
                                    <button className='info-button' onClick={() => close()}>Close</button>
                                </div>
                            </div>
                        )
                    }
                </Popup>   
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
                            photo={food.photo}
                            selectedItems={selectedItems} 
                            setSelectedItems={setSelectedItems}
                        />
                    ))}
                </div>
                <div className="payment-container">
                    <Payment 
                        cartItems={selectedItems}
                        setCartItems={setSelectedItems}
                        address={address}
                    />
                </div>
            </div>
        </div>
    );
}

export default FoodCard;
