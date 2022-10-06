import React from 'react'
import BTC from '../assets/btc-img.png'
import {FiArrowUpRight, FiArrowDown} from 'react-icons/fi'
import './Featured.css'

const Featured = () => {
  
    return (
    <div className='featured'>
        <div className='container'>
            {/* Left */}
            <div className='left'>
                <h2>Explore Top Cryptos like Bitcoin, Ethereum, and Dogecoin</h2>
                <p>See all available assets: Cryptocurrencies and NFT's</p>
                <button className='btn'>See More Coins</button>

            </div>

            {/* Right */}
            <div className='right'>
                <div className='top'>
                    <img src={BTC} alt='/' />
                </div>
                <div>
                    <h5>Bitcoin</h5>
                    <p>$20,000</p>
                </div>
                <span><FiArrowUpRight />2.5%</span>
            </div>

        </div>
    </div>
    )

}

export default Featured