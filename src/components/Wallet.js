import React, {useState} from 'react'

function Wallet({addMoreMoney}){ 
    

return(
    <div className="wallet">
    <form onSubmit={addMoreMoney}>
        <input name="amount" type="number" placeholder="Add More Money" />
        <input type="submit" />
    </form>

    </div>
)
}

export default Wallet;