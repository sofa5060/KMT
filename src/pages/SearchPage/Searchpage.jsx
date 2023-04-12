import React from 'react'
import Searchfilters from '../../components/SearchFilters/Searchfilters'
import "./Searchpage.css"
import pyramids from "../../images/wallpapersden.png"
import Searchbox from '../../components/SearchBox/Searchbox'
import Triplist from '../../components/TripList/Triplist'
import nile from "../../images/nile.png";


export default function Searchpage() {
  const trips = [
    {
      id: 1,
      name: "Felucca Ride on The Nile in Aswan",
      description:
        "Enjoy your Felucca ride in Aswan and Take a relaxing ride on an Egyptian sailboat in Aswan",
      location: "Aswan, Egypt",
      price: 99.99,
      image: nile,
    },
    {
      id: 2,
      name: "Felucca Ride on The Nile in Aswan",
      description:
        "Enjoy your Felucca ride in Aswan and Take a relaxing ride on an Egyptian sailboat in Aswan",
      location: "Aswan, Egypt",
      price: 99.99,
      image: nile,
    },
    {
      id: 3,
      name: "Felucca Ride on The Nile in Aswan",
      description:
        "Enjoy your Felucca ride in Aswan and Take a relaxing ride on an Egyptian sailboat in Aswan",
      location: "Aswan, Egypt",
      price: 50.00,
      image: nile,
    }
  ]
  return (
    <div className='search-page'>
      <div className="search-header">
        <img src={pyramids} alt="" />
        <Searchbox minimized/>
      </div>
      <div className="search-body">
        <Searchfilters />
        <Triplist trips={trips}/>
      </div>
    </div>
  )
}
