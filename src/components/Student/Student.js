
import React, { useContext } from 'react';


const Product = (props) => {

    return (
        <article className="Content" onClick={props.clicked}>
            <h1>{props.name}</h1>
            <div className="Info">
                <div className="Author">{props.id}</div>
             

            </div>
            <br/>
            
            {/* add this to blog context */}
        </article>
    );
}

export default Product;




