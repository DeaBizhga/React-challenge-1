import React from "react";
import popular from '../static/popular.jpeg'
import '../static/popular.css'



const Popular: React.FC = () => {
    return <div className="Popular">
                <div className="populartext">
            <h5>ABOUT</h5>
            <h2>Popular Adventures</h2>
            <p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fuga aliquid eligendi quas nostrum illum commodi, perferendis mollitia, similique ab magnam voluptatem recusandae! 
Labore corporis ut est autem alias asperiores, voluptate repellat amet aut nesciunt id totam, tempora, cupiditate veniam.            </p>
        </div>

        <div className="popularcnt">
            <img src={popular}  alt="" />
        </div>

    </div>;
  };
  
  export default Popular;