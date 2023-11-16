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

function getTvId(id){
    return inventory.find((tv)=>{
        return tv.id
    })
}



function showTvs(){
    return(
        <>
            <ul>
                {inventory.map((tv)=>{
                    console.log()
                    return(
                        <li key={tv.id}>
                            <div  className={"lower-box-container"} >
                                {console.log()}
                                <img src={getTvId(tv.id).sourceImg} className={"tvImg"} alt="bestselling tv"/>
                                <section className={"tvList"}>
                                    <h3>{getTvId(tv.id).name}</h3>
                                    <h2>{priceFormat(bestSellingTv)}</h2>
                                    <h3>{screenSizeFormat()}</h3>
                                    <div>
                                        <img src={check} alt="" className={"ball"}/>
                                        <span> Wifi </span>
                                        <img src={minus} alt="" className={"ball"}/>
                                        <span> Speech </span>
                                        <img src={check} alt="" className={"ball"}/>
                                        <span> Hdr </span>
                                        <img src={check} alt="" className={"ball"}/>
                                        <span> Bluetooth </span>
                                        <img src={minus} alt="" className={"ball"}/>
                                        <span> Ambilight </span>
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