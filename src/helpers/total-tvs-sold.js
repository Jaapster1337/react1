import {inventory} from "../constants/inventory.js";
function tvSold () {
    let sold_total = 0
    for (const i in inventory) {
        sold_total += inventory[i].sold
    }
    return sold_total
}

export default tvSold;