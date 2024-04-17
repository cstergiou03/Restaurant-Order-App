import "../Style/foodCard.css";
import Cards from "./Cards";
import Payment from "./Payment";

function FoodCard(){
    return(
        <div className="foodCard-container">
            <div className="top-container">
                <img src="../src/assets/user.jpg" className="user-img"></img>
                <input placeholder="Search..." className="food-search"/>
            </div>
            <div className="bottom-container">
                <div className="cards-container">
                    <Cards name='Spaghetti' price={20}/>
                    <Cards name='Spaghetti' price={20}/>
                    <Cards name='Spaghetti' price={20}/>
                    <Cards name='Spaghetti' price={20}/>
                    <Cards name='Spaghetti' price={20}/>
                    <Cards name='Spaghetti' price={20}/>
                    <Cards name='Spaghetti' price={20}/>
                </div>
                <div className="payment-container">
                    <Payment/>
                </div>
            </div>
        </div>
    );
}

export default FoodCard;