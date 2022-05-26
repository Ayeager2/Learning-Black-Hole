import React from 'react'
import './searchItem.css'
const SearchItem = () => {
    return (
        <div className='searchItem'>
            <img src="https://cf.bstatic.com/xdata/images/hotel/square200/321487672.webp?k=410b152eeff9767cbba5063fca1296a43f0f6399ebb05c94b929fa7b3481d19b&o=&s=1" alt="" className="siImg" />
            <div className="siDesc">
                <h1 className="siTitle">Bob W ChuecaOpens in new window
                </h1>
                <span className="siDistance">Madrid City Center, Madrid</span>
                <span className="siTaxiOp">Subway Access</span>
                <span className="siSubtitle">Travel Sustainable property</span>
                <span className="siFeatures">Deluxe Chueca Design Studio <small>1 full bed</small></span>
                <span className="siCancelOp">Free cancellation</span>
                <span className="siCancelOpSubtitle">You can cancel later, so lock in this great price today!</span>
                <span className="siAddDetails">Only 4 rooms left at this price on our site</span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">$123</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <button className="siCheckBtn">See availability</button>
                </div>
            </div>
        </div>
    )
}

export default SearchItem