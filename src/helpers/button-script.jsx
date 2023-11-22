import {inventory} from "../constants/inventory.js";
function meestVerkocht(){
    inventory.sort((a,b)=>{
        return b.sold - a.sold;
    })
    console.log(inventory)
}

function goedkoopEerst(){
    inventory.sort((a, b)=>{
        return a.price - b.price;
    })
    console.log(inventory)
}

function geschiktSport(){
    inventory.sort((a,b)=>{
        return b.refreshRate - a.refreshRate;
    })
    console.log(inventory)
}


export {meestVerkocht};
export {goedkoopEerst};
export {geschiktSport};