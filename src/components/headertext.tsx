import React from "react";
import '../static/header.css'


interface Headertextt {
    summer: string;
    nomad:string;
}

const Headertext: React.FC <Headertextt> = ({summer,nomad}) => {

      
    return <div className="headertextcnt">
        <div className="headertext">

            <h5>{summer}</h5>
            <h3>{nomad}</h3>
            <button>READ MORE</button>

        </div>

    </div>;
  };
  
  export default Headertext;