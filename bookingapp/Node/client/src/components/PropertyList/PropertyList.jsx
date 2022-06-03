import React from 'react'
import useFetch from '../../Hooks/useFetch';
import './propertylist.css'
const PropertyList = () => {

    const { data, loading, error } = useFetch("/hotels/countByType");

    const images = [
        "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
        "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg ",
        "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg ",
        "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_cottages/5e1fd9cd716f4825c6c7eac5abe692c52cc64516.jpg ",
        "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_glamping/6e181b9e942c160f4605239be7ddc1728cbcc4c8.jpg ",
    ]

    return (
        <div className='pList' >
            {loading ? (
                "loading"
            ) : (
                <>
                    {data && images.map((img,i) =>
                        <div className="pListItem" key={i}>
                            <img
                                src={img }
                                alt=""
                                className="pListImg"
                            />
                            <div className="pListTitles">
                                <h1>{data[i]?.type}</h1>
                                <h2>{data[i]?.count} {data[i]?.type}</h2>
                            </div>
                        </div>)}
                </>
            )
            }
        </div>
    )
}

export default PropertyList