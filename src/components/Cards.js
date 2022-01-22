import React from "react";
import CardItem from "./CardItem";
import './Cards.css';
import { Link } from "react-router-dom";



function Cards() {
    return(
        <>
        <div className="cards">
            <h1>Check out these EPIC Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        
                        <CardItem
                        src='images/img-11.jpg'
                        text="Vibe in Coorg-India's own Scotland "
                        label="Nature"
                         path="/services"
                        // to="https://www.holidify.com/places/coorg/"
                           
                        
                        
                        />
                        <CardItem
                        src='images/img-12.jpg'
                        text="Visit Hampi-An Arcitectural Marvel "
                        label="Piligrimage"
                        path="/services"
                        />
                    </ul>
                    {/* make another ul bcz top 2 and bottom 3 cards need to be adjusted */}
                    <ul className="cards__items">
                        <CardItem
                        src='images/img-10.jpg'
                        text="Explore Banglore-The city of diverse existense "
                        label="Explore"
                        path="/services"
                        />
                        <CardItem
                        src='images/img-13.gif'
                        text="Explore Mysore-A city of old charm"
                        label="Explore"
                        path="/services"
                        />
                        <CardItem
                        src='images/img-14.jpg'
                        text="Explore Jog falls-The famous waterfalls of India "
                        label="Adventure"
                        path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
        </>
    );
}

export default Cards;

