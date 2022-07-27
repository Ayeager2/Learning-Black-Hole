import React, { useState } from 'react'
import './hotel.css'
import NavBar from '../../components/NavBar/NavBar'
import Header from '../../components/Header/Header'
import MailList from '../../components/MailList/MailList'
import Footer from '../../components/Footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'

const Hotel = () => {

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false)

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max500/319321797.jpg?k=912faca66b8865a4d83f6e343097533c000a0b653c3a7bdbbc20a644f8fe79cc&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max500/321487672.jpg?k=d28ce0589b3218971893af70562305cb7e13357190d75f5b65282b3997001e59&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max500/319321832.jpg?k=565ad31d571f46d17956974407707c8a6b05c644fa39c5dc3eb4b1749b46cef7&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max500/133089506.jpg?k=5791e5f1a2ea05334c999ef6940cfd2b13a885c4af436616107e4f2ed5e262da&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max500/49869104.jpg?k=8c022059b1e957854bc6e824ad954d24b23461377620b7b778a9ad75e1c01404&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max500/50500788.jpg?k=b33d70bd66d7c9602f49516a87cf97d478747d46559733a8de41d0dba665291f&o=&hp=1"
    },

  ]

  const handleOpen = (i) => {
    setSlideNumber(i)
    setOpen(true)
  }

  const handleMove = (direction) => {
    let newSlideNumber ;
    if(direction ==="l"){
      newSlideNumber = slideNumber ===0 ? 5 : slideNumber - 1;
    }
    else{
      newSlideNumber = slideNumber ===5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  }

  return (
    <div>
      <NavBar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)} />
          <div className="sliderWrapper">
          <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=> handleMove("l")}/>
            <img src={photos[slideNumber].src} alt="" className="sliderImg" />
          <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=> handleMove("r")}/>
          </div>
        </div>
        
        }
      <div className="hotelWrapper">
        <button className="bookNow">Reserve or Book Now!</button>
        <h1 className="hotelTitle">
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>123 Limitless Ohio</span>
          </div>
          <span className="hotelDistance">Excellent location – show map – Subway Access</span>
          <span className="hotelPriceHighlight">	Located in the real heart of Madrid, this property has an excellent location score of 9.6!</span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImageWrapper">
                <img onClick={() => handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailTexts">
              <h1 className="hotelTitle">Stay in the Heart of Ohio!</h1>
              <p className="hotelDesc">

                You're eligible for a Genius discount at Hotel Chamartin The One! To save at this property, all you have to do is sign in.

                Set in Chamartin Train and Metro Station, in Madrid’s financial district, Hotel Chamartin The One features air-conditioned rooms with a buffet breakfast service and free WiFi. The hotel has a bar and 24-hour reception.

                Each bright spacious room includes a flat-screen TV, safe and telephone. The private bathroom comes with free toiletries and a hairdryer.

                Lunch and dinner, as well as drinks and snacks, are served at the hotel's Restaurant Salon Intercity. You can also enjoy a drink or a coffee at the English bar. Car hire, tickets and day trips can be organized for you at reception. Hotel Chamartin The One also offers meeting rooms and business services.

                There are direct train and metro links to Madrid’s Adolpho Suarez Airport, Atocha AVE Train Station and Puerta del Sol Square. Real Madrid’s Santiago Bernabéu Stadium is a 25-minute walk from the hotel.

                Couples in particular like the location – they rated it 8.5 for a two-person trip.
              </p>
            </div>
            <div className="hotelDetailPrice">
              <h1>Property Highlights</h1>
              <span>Perfect for a 30-night stay!</span>
              <h2>
                <b>$3,374</b>(30 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </h1>
      </div>
      <MailList />
      <Footer />
    </div>
    </div >
  )
}

export default Hotel