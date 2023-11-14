import './App.css';
import tvSold from "./helpers/total-tvs-sold.js";
import productsBought from "./helpers/total-bought.js";
import totalTvsSold from "./helpers/total-tvs-sold.js";
import {bestSellingTv} from "./constants/inventory.js";
import {bestsellerImage, tvName} from "./helpers/bestseller.js";
import {priceFormat} from "./helpers/bestseller.js";
import {screenSizeFormat} from "./helpers/bestseller.js";
import check from "./assets/check.png";
import minus from "./assets/minus.png";
import {meestVerkocht, goedkoopEerst, geschiktSport} from "./helpers/button-script.js";
import  log from "./helpers/array-methods.js";


function App() {

    return (
        <>
            <h1>Tech it easy dashboard</h1>
            <h2>Verkoopoverzicht</h2>
            <div className={"container-container"}>
                <div className={"upper-box-container"}>
                    <section className={"sold box"}>
                        <p>Aantal verkochte producten</p>
                        <p>{tvSold()}</p>
                    </section>
                    <section className={"bought box"}>
                        <p>Aantal ingekochte producten</p>
                        <p>{productsBought()}</p>
                    </section>
                    <section className={"to-sell box"}>
                        <p>Aantal te verkopen producten</p>
                        <p>{productsBought() - totalTvsSold()}</p>
                    </section>
                </div>
                <p>Best verkochte tv</p>
                <div className={"lower-box-container"}>
                    <img src={bestsellerImage()} alt="bestselling tv"/>
                    <section className={"best-selling box"}>
                        <h3>{tvName()}</h3>
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
                <section className={"button-container"}>
                    <button type={"button"} onClick={meestVerkocht}>Meest verkocht eerst</button>
                    <button type={"button"} onClick={goedkoopEerst}>Goedkoopste eerst</button>
                    <button type={"button"} onClick={geschiktSport}>Meest geschikt voor sport eerst</button>
                    <button type={"button"} onClick={log}>Log de uitkomsten van 2.1-2.6</button>
                </section>
            </div>
            <section>
                <ul>
                    test
                </ul>
            </section>
        </>

    )
}

export default App
