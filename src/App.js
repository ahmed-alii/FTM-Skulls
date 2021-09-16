import './App.css';
import img_1 from './asstes/full image 1.png'
import img_2 from './asstes/full image 2.png'
import img_3 from './asstes/full web.png'
import img_4 from './asstes/HoodBlue.png'
import {useEffect, useState} from "react";

function App() {
    const imgList = [img_1, img_2, img_3, img_4]
    const [currentimg, setCurrentImg] = useState(img_1);


    useEffect(function (){

        let count = 0
        setInterval(() => {
            if (count < imgList.length-1){
                count = count + 1
                setCurrentImg(imgList[count])
            }else{
                count = 0
                setCurrentImg(imgList[0])
            }

        }, 2000);


    }, [])
    return (
        <div className="App">
            <header className="App-header">
                <div className="title">
                    <h1>FTM Skulls</h1>
                    <p>Join the graveyard</p>
                </div>

                <button> Connect Wallet</button>
            </header>

            <div className="minted">
                <div className={'bluebox'}><span>180FTM Each</span></div>
                <div className={'bluebox'}><span>554/1000 Minted</span></div>
            </div>

            <div className="image-wrapper">
                <div className="image-div">
                    <img src={currentimg} alt=""/>
                </div>
            </div>

            <div className="mint-select">
                <button>1x</button>
                <button>5x</button>
                <button>10x</button>
            </div>
            <div className={'purchase-skull'}>
                <button>Purchase your skull!</button>
            </div>

            <div className="para">
                <p>Each NFT is comprised of set traits randomized within the code. Our Skulls contain features such as
                    hats, jewellery, different colour T-Shirts and more. <br/>
                    Features increase in rarity depending on their style. This adds to the uniqueness of the collection
                    There are only 1000 NFTs within the series so get in quick</p>
            </div>

            <div className="copyrights">
                <div className="socials">
                    <div>
                        <i className={'fab fa-twitter'}/>
                    </div>
                    <div>
                        <i className="fab fa-discord"/>
                    </div>
                </div>

                <div className="copy">
                    <span>&copy; Copyright 2021 by FTM Skulls.</span>
                </div>
            </div>
        </div>
    );
}

export default App;
