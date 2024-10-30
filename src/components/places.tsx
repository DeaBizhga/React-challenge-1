import React from "react";
import '../static/stories.css'

interface Place {
    place:string;
    img:string;
    desc:string;
}


const Places: React.FC<Place> = ({place,img,desc}) => {
    return <div className="placesContainer">
    <div className="placescnt">
        <img src={img} alt={place} />
    </div>

    <div className="placeDesc">
        <h2>{place}</h2>
        <h5>{desc}</h5>
    </div>

</div>;
  };
  
  export default Places;