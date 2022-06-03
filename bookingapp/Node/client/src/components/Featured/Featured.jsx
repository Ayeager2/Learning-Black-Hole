import React from 'react'
import "./featured.css"
import useFetch from "../../Hooks/useFetch";

const Featured = () => {

const {data, loading, error } = useFetch("/hotels/countByCity?cities=columbus,madrid,london");


    return (
        <div className='featured'>
            {loading ? "Loading please wait" : <><div className="featuredItem">
                <img
                    src="https://cf.bstatic.com/xdata/images/city/square250/349720.webp?k=b7eca2cb90afd858f294732b0d5c194af47e70386b5be99373e3ff03be95c515&o="
                    alt=""
                    className='featuredImg'
                />
                <div className="featuredTitles">
                    <h1>Columbus</h1>
                    <h2>{data[0]}</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img
                    src="https://cf.bstatic.com/xdata/images/city/540x270/690197.webp?k=1cfa3e949d9acff7feb22ff581d39330048102f14c16332954b66c397e2efd36&o="
                    alt=""
                    className='featuredImg'
                />
                <div className="featuredTitles">
                    <h1>London</h1>
                    <h2>{data[1]}</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img
                    src="https://cf.bstatic.com/xdata/images/city/540x270/690082.webp?k=2f56deeb6a05591660fc9402a9e0c8fb878bf9c829ed0855b8e17375aa0183e0&o="
                    alt="" className='featuredImg'
                />
                <div className="featuredTitles">
                    <h1>Columbus</h1>
                    <h2>{data[2]}</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img
                    src="https://cf.bstatic.com/xdata/images/city/540x270/856674.webp?k=70a9589c2f7d2fc175c3ac02c55702c2e433f588866756a394cddfe215170f38&o="
                    alt="" className='featuredImg'
                />
                <div className="featuredTitles">
                    <h1>Madrid</h1>
                    <h2>{data[3]}</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img
                    src="https://cf.bstatic.com/xdata/images/city/540x270/620099.webp?k=93e8bfacbaec3c2a2b846d44fbd383dec7e37861abae778f316c499c91e1ae4c&o="
                    alt=""
                    className='featuredImg'
                />
                <div className="featuredTitles">
                    <h1>Columbus</h1>
                    <h2>3684 properties</h2>
                </div>
            </div></>}

        </div>
    )
}

export default Featured