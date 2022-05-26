import React from 'react'
import Featured from '../../components/Featured/Featured'
import FeaturedProperties from '../../components/FeaturedProperties/FeaturedProperties'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import MailList from '../../components/MailList/MailList'
import NavBar from '../../components/NavBar/NavBar'
import PropertyList from '../../components/PropertyList/PropertyList'
import "./home.css"

const Home = () => {
    return (
        <div>
            <NavBar />
            <Header/>
            <div className="homeContainer">
                <Featured/>
                <h1 className="homeTitle">
                Browse by property type
                </h1>
                <PropertyList/>
                <h1 className="homeTitle">
                More than just hotels... Bookers discover pure comfort with homes, apartments, and more
                </h1>
                <FeaturedProperties/>
                <MailList/>
                <Footer/>
            </div>
        </div>
    )
}

export default Home