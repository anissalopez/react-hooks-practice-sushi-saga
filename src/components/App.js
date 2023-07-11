import React, {useEffect, useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";
import Wallet from "./Wallet";

const API = "http://localhost:3001/sushis"


function App() {

  const[sushi, setSushi] = useState([]);
  const[slice1, setSlice1] = useState(0);
  const[slice2, setSlice2] = useState(4);
  const[money, setMoney] = useState(100);
  const[plates, setPlates] = useState([])
  

  useEffect(() => {
    fetch(`${API}?limit=4`)
    .then(response => response.json())
    .then((data) => {
      setSushi(data.slice(slice1,slice2))
    })
  }, [slice1, slice2]);

console.log(slice1)
  function addSushi(){
    setSlice1((slice1) => slice1 +=4);
    setSlice2((slice2) => slice2 += 4);
  };

  function addSushi(){
    setSlice1((slice1) => slice1 += 4);


    setSlice2((slice2) => slice2 += 4);
  };

function updateMoney(sushiPrice){
  setMoney((money) => {
    if(sushiPrice <= money){
      return money - sushiPrice;
    };
   return money
  });
};

function updatePlates(sushiName){
  setPlates((plates)=>{
    if(money > 0){
      return [...plates, sushiName]
    }
    return plates 
  })
}

function addMoreMoney(e){
  e.preventDefault();
   
  
  setMoney((money) => money + parseInt(e.target.amount.value))
}

  return (
    <div className="app">
      
      <SushiContainer updatePlates={updatePlates} money={money} sushiArray={sushi} addSushi={addSushi} updateMoney={updateMoney}/>
      <Table plates={plates} money={money} />
      <Wallet addMoreMoney={addMoreMoney} />
    </div>
  );
}

export default App;
