import React, {useState} from "react";


function Sushi({sushiName, sushiPrice, sushiImage, updateMoney, money, updatePlates}) {
  const [isEaten, setEaten] = useState(false)


  function clickHandler(){
    updatePlates(sushiName)
    setEaten(true)
    updateMoney(sushiPrice)
  }

  return (
    <div className="sushi">
      <div className="plate" onClick= {money >= sushiPrice ? clickHandler : null}>
        {isEaten ? null : (
          <img
            src={sushiImage}
            alt={sushiName}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushiName} - ${sushiPrice}
      </h4>
    </div>
  );
}

export default Sushi;
