import {bestSellingTv, inventory} from "../constants/inventory.js";
import React from "react";
import {bestsellerImage, priceFormat, screenSizeFormat, tvName} from "./bestseller.js";
import check from "../assets/check.png";
import minus from "../assets/minus.png";

function showBrands() {
    return (
        <>
            <ul>
                {inventory.map((tv) => {
                    return <li key={tv.type}>
                        <p>
                            Merk : <span>{tv.brand}</span>
                        </p>
                    </li>
                })}
            </ul>
        </>
    )
}

function returnImage(id) {
    return inventory[id].sourceImg
}

function returnTvName(id) {
    return inventory[id].name
}

function returnTvPrice(id) {
    return "€" + inventory[id].price + ",-"
}

function returnAvailableSizes(id) {
    let sizeString = ""
    for (const size in inventory[id].availableSizes) {
        sizeString += inventory[id].availableSizes[size]
        sizeString += " inch"
        sizeString += " (" + (inventory[id].availableSizes[size] * 2.54) + " cm) "
        sizeString += " | "
    }
    return sizeString.split("| ")
}

function displayOptions(id) {
    if (inventory[id].options.applicable === false)
        return inventory[id].options.map((option, index) => (
            <>
                <img src={minus} alt={"check"}/>
                <span key={index}>{option.name} </span>
            </>
        ))
}


function showTvs() {
    return (
        <>
            <ul>
                {inventory.map((tv) => {
                    return (
                        <li key={tv.id}>
                            <div className={"lower-box-container"}>
                                <img src={returnImage(tv.id)} className={"tvImg"} alt="bestselling tv"/>
                                <section className={"tvList"}>
                                    <h3>{returnTvName(tv.id)}</h3>
                                    <h2>{returnTvPrice(tv.id)}</h2>
                                    <h3>{returnAvailableSizes(tv.id)}</h3>
                                    <div className={"tvOptions"}>
                                        {displayOptions(tv.id)}
                                    </div>
                                </section>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export {showBrands, showTvs};