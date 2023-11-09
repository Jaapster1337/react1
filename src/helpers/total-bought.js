import {inventory} from "../constants/inventory.js";

function productsBought() {
    let bought_total = 0
    for (const i in inventory) {
        bought_total += inventory[i].originalStock
    }
    return bought_total;
}

export default productsBought;