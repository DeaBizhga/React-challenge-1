import React, { useEffect, useState } from "react";
import banner from '../static/banner.jpeg'
import '../static/header.css'
import '../static/stories.css'
import Headertext from "./headertext";
import Storiescnt from "./storiescnt";
import Footer from "./footer";
import Popular from "./popular";
import Places from "./places";

interface Place {
    place:string;
    img:string;
    desc:string;
}


const Header: React.FC = () => {
    const [data, setData] = useState<Place[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5001/places', {
                    referrerPolicy: 'strict-origin-when-cross-origin', 
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData: Place[] = await response.json();
                setData(jsonData);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An unknown error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []); 


    return <div className="Header">
        <div className="imagecnt">
            <img src={banner} width='100%' height='100%' alt="" />
            <Headertext summer="SUMMER VACATION" nomad="Nomad Nation" />
        

        </div>

        <div>
            <Storiescnt />
        </div>

        <div>
            
        </div>
        <div className="imglist">
        {data.map(item=>(
            <Places img={item.img} desc={item.desc} place={item.place} />
        ))}
        </div>
        <div> 
            <Popular />
        </div>

        <div>
        <Footer />
        </div>

    </div>;
  };
  
  export default Header;