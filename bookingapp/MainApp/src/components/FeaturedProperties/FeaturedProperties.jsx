import React from 'react'
import './featuredproperties.css'
const FeaturedProperties = () => {
    return (
        <div className='fp'>
            <div className="fpItem">
                <img
                    src="https://cf.bstatic.com/xdata/images/hotel/max500/103951224.jpg?k=03736dd4e1e89c1132e4957149e394d01ac6e8f64f4b09e30ade97a6176f0640&o="
                    alt=""
                    className="fpImg"
                />
                <span className='fpName'>Aparthotel Stare Miasto </span>
                <span className='fpCity'>Krakow</span>
                <span className='fpPrice'>Starting from $81</span>
                <div className="fpRating">
                    <button >8.8 </button>
                    <span>Excellent</span>
                </div>
            </div>            
            <div className="fpItem">
                <img
                    src="https://cf.bstatic.com/xdata/images/hotel/max500/123802411.jpg?k=0c02ecedcf0ece5f23d2c8136c9b7a1a4b45155199063fcfac3af6ffd5825e84&o="
                    alt=""
                    className="fpImg"
                />
                <span className='fpName'>Six Continents </span>
                <span className='fpCity'>Prague</span>
                <span className='fpPrice'>Starting from $87</span>
                <div className="fpRating">
                    <button >8.8 </button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img
                    src="https://cf.bstatic.com/xdata/images/hotel/max500/74529578.jpg?k=a7fcefd47d7271daf44f6ce78a215b9505f9f8e5cac3af093b78b9c489fd8461&o="
                    alt=""
                    className="fpImg"
                />
                <span className='fpName'>Sugar Loft Apartments </span>
                <span className='fpCity'>Rio de Janeiro</span>
                <span className='fpPrice'>Starting from $50</span>
                <div className="fpRating">
                    <button >9.1 </button>
                    <span>Awesome</span>
                </div>
            </div>
            <div className="fpItem">
                <img
                    src="https://cf.bstatic.com/xdata/images/hotel/max500/60345914.jpg?k=847c9404a7398f20d1c41febf7c96ab0f8ad5ad74062faae44a3efa73e709d62&o="
                    alt=""
                    className="fpImg"
                />
                <span className='fpName'>Villa Wellness </span>
                <span className='fpCity'>Budapest</span>
                <span className='fpPrice'>Starting from $633</span>
                <div className="fpRating">
                    <button >9.3 </button>
                    <span>Awesome</span>
                </div>
            </div>

            
        </div>
    )
}

export default FeaturedProperties