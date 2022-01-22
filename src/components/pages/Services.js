import React from "react";
import '../../App.css';
import { Link } from "react-router-dom";

// export default function Services(){
//     return <h1 className="services">SERVICES</h1>;

// }

export default function Services(){
    return (
        <>
        <div className="services-screen">
            <div className="services-container">
                <h1 className="services">SERVICES</h1>
                <Link to={{pathname:'https://www.airindia.in/'}} className="dummy-link" target="_blank">Flights</Link>
                <Link to={{pathname:'https://www.booking.com/index.en-gb.html'}} className="dummy-link" target="_blank">Stay</Link>
                <Link to={{pathname:'https://www.avis.co.uk/'}} className="dummy-link" target="_blank">Rent Vehicle</Link>
            </div>
        </div>
       </>
    
    );
    
}