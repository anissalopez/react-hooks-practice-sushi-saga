import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({sushiArray, addSushi, updateMoney, money, updatePlates}) {

  const sushiList = sushiArray.map((sushi) =>{
    return <Sushi updatePlates={updatePlates} money={money} updateMoney={updateMoney} sushiName={sushi.name}  sushiPrice={sushi.price} key={sushi.id} sushiImage={sushi['img_url']}/>
  })
  return (
    <div className="belt">
      {sushiList}
      <MoreButton addSushi={addSushi}/>
    </div>
  );
}

export default SushiContainer;
