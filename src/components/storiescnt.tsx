import React from "react";
import stories from '../static/stories.jpeg'
import '../static/stories.css'



const Storiescnt: React.FC = () => {
    return <div className="Stories">
                <div className="storiestext">
            <h5 color="blue">ABOUT</h5>
            <h2>Stories of Adventure</h2>
            <p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fuga aliquid eligendi quas nostrum illum commodi, perferendis mollitia, similique ab magnam voluptatem recusandae! Labore corporis ut est autem alias asperiores, voluptate repellat amet aut nesciunt id totam, tempora, cupiditate veniam.            </p>
        </div>

        <div className="storiescnt">
            <img src={stories}  alt="" />

        </div>

    </div>;
  };
  
  export default Storiescnt;