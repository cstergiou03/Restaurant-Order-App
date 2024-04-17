import "../Style/selectedFood.css"

function SelectedFood(){


    return(
        <>
            <div className="selected-item">
                <h3>Spaghetti</h3>
                <h3>Qty: 1</h3>
                <h3>20$</h3>
                <button className="discard-button"><img src="../src/assets/discard.png"/></button>
            </div>
        </>
    );
}

export default SelectedFood;