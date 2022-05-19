import { faCalendarDays } from '@fortawesome/free-regular-svg-icons'
import { faBed, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import './header.css'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import { DateRange } from 'react-date-range';
import { format } from "date-fns"
const Header = () => {
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
const [openOptions, setOpenOptions] = useState(false);
const [options, setoptions] = useState({
    adult:1,
    children:0,
    room:1,
});    

    return (
        <div className='header'>
            <div className="headerContainer">
                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car Rentals</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport Taxis</span>
                    </div>
                </div>
                <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
                <p className="headerDesc">Get rewarded for your travels - unlock instant savings of 10% or more with a free Limitless Account.</p>
                <button className="headerBtn">Sign In/ Register</button>
                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faBed} className='headerIcon' />
                        <input type="text" placeholder='Where are you going?' className='headerSearchInput' />
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />
                        <span onClick={() => setOpenDate(!openDate)} className='headerSearchText'>{`${format(date[0].startDate, "MM/dd/yyy")} to ${format(date[0].endDate, "MM/dd/yyy")}`}</span>
                        {openDate && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className="date"
                        />}
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faPerson} className='headerIcon' />
                        <span className='headerSearchText'>{`${options.adult} Adult - ${options.children} Children - ${options.room} Room`}</span>
                        <div className="options">
                            <div className="optionItem">
                                <span className="optionsText">
                                    Adults
                                    <button className="optionCounterBtn">
                                        -
                                    </button>
                                    <span className="optionCounterNumber">1</span>
                                    <button className="optionCounterBtn">
                                        +
                                    </button>
                                </span>
                            </div>
                            <div className="optionItem">
                                <span className="optionsText">
                                    Children
                                    <button className="optionCounterBtn">
                                        -
                                    </button>
                                    <span className="optionCounterNumber">0</span>
                                    <button className="optionCounterBtn">
                                        +
                                    </button>
                                </span>
                            </div>
                            <div className="optionItem">
                                <span className="optionsText">
                                    Room
                                    <button className="optionCounterBtn">
                                        -
                                    </button>
                                    <span className="optionCounterNumber">1</span>
                                    <button className="optionCounterBtn">
                                        +
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="headerSearchItem">
                        <button className="headerBtn">Search</button>                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header