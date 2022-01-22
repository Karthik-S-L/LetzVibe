import React from "react";
import '../../App.css';
import { Link } from "react-router-dom";

// export default function Products(){
//     return <h1 className="products">PRODUCTS</h1>;
// }

export default function Services(){
    return (
        <>
        <div className="products-screen">
            <div className="products-container">
                <h1 className="products">PRODUCTS</h1>
                <Link to={{pathname:'https://www.gooutdoors.co.uk/travel/travel-clothing/'}} className="dummy-link" target="_blank">Clothes</Link>
                <Link to={{pathname:'https://go.travel/us/?___store=us_en&___from_store=base_en'}} className="dummy-link" target="_blank">Accessories</Link>
                <Link to={{pathname:'https://www.google.com/search?q=shop+travel+bags&sxsrf=AOaemvLHGNhVFpAjvyKb4bd17albRFodIg%3A1642787345533&ei=EfLqYd_-H-ee_Qa31ImICw&ved=0ahUKEwify6_hs8P1AhVnT98KHTdqArEQ4dUDCA4&uact=5&oq=shop+travel+bags&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgcIABBHELADSgQIQRgASgQIRhgAUJoEWPNUYPVXaAJwAngAgAHSCIgB0giSAQM3LTGYAQCgAQHIAQjAAQE&sclient=gws-wiz'}} className="dummy-link" target="_blank">Bags</Link>
            </div>
        </div>
        
        
        
        </>
    
    );
    
}