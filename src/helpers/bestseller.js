import {bestSellingTv, inventory} from "../constants/inventory.js";

function screenSizeFormat(){
    let sizeString = ""
    for (const size in bestSellingTv.availableSizes) {
        sizeString += bestSellingTv.availableSizes[size]
        sizeString += " inch"
        sizeString += " (" + (bestSellingTv.availableSizes[size]*2.54) + " cm) "
        sizeString += " | "
    }
    return sizeString.split("| ")
}

function tvName(object){
    let brand = bestSellingTv.brand
    let type = bestSellingTv.type
    let name = bestSellingTv.name

    return brand+" "+type+" - "+name
}

function priceFormat(object){
    return "€"+object.price+",-"
}

function bestsellerImage(){
    return bestSellingTv.sourceImg
}


export {tvName};
export {priceFormat}
export {screenSizeFormat};
export {bestsellerImage};