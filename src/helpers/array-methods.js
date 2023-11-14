import {inventory} from "../constants/inventory.js";

const tvTypes = inventory.map((tv) => {
    return tv.type
})

const soldOut = inventory.filter((tv)=>{
    if(tv.originalStock === tv.sold) {
        return tv
    }
})

const specificTv = inventory.find((tv)=>{
    return tv.type === "NH3216SMART"
})

const sportsTv = inventory.filter((tv)=>{
    if(tv.refreshRate >= 100){
        return tv
    }
})

const bigTvs = inventory.filter((tv)=>{
    if(tv.availableSizes.includes(65)){
        return tv
    }
})

const ambilight= inventory.filter((tv) =>{
    if(tv.options[ambilight]===true){
        return tv
    }
})

// function listOfBrands(array){
//     const brands = inventory.map((tv)=>{
//         return tv.brand
//     })
//     let list = ""
//     for (const brand in brands) {
//         list +=
//     }
// }

function log() {
//     console.log("TvTypes")
//     console.log(tvTypes)
//     console.log("")
//
//     console.log("Sold out type info")
//     console.log(soldOut)
//     console.log("")
//
//     console.log("NH3216SMART")
//     console.log(specificTv)
//     console.log("")
//
//     console.log("Sports tvs")
//     console.log(sportsTv)
//     console.log("")
//
//     console.log("Tv's bigger then 65 inch")
//     console.log(bigTvs)
//     console.log("")
//
    console.log("Tv's with ambilight")
    console.log(ambilight)
    console.log("")
//
//     // console.log(inventory[0].options)
}
//
export default log;

