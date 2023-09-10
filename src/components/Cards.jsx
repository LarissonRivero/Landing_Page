import React from 'react';
import { Card } from 'react-bootstrap';
import Button from './Button';


function Cards(props) {
  return (
    <div className="row row-cols-3 row-cols-md-3 g-4">
      <div className="col">
        <div className="card h-100">
        <Card.Img src={props.img} /> 
          <div class="card-body">
            <h5 className="card-title">{ props.title }</h5>
            <p className="card-text">{ props.text}</p>
          </div>
        </div>
      </div>
    </div>    
  );
}

export default Cards;


