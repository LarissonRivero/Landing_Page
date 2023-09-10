/**
 * Datos de la cards.json importados desde el archivo cards.json
 * @typedef {Object} CardsData
 * @property {number} id - El identificador único de la tarjeta.
 * @property {string} title - El título de la tarjeta relacionado con la naturaleza.
 * @property {string} text - Una descripción de la tarjeta relacionada con la naturaleza.
 * @property {string} img - La ruta de la imagen de la tarjeta.
 * 
 * La funcion maps; Itera sobre el Json arriba mencionado (cards.json) y ejecuta una función para cada elemento, del  arreglo generando los componentes de la tarjeta. Una vez que se ha iterado sobre todos los elementos del arreglo, map devuelve un nuevo arreglo con los elementos modificados. y se pasan a las tarjetas por medios de props.
 *
 */
import React from 'react';
import  {Card} from 'react-bootstrap';
import cardsData from '../assets/cards.json'; 
import Button from './Button';
import '../App.css'

function Cards() {
  return (
    <div className="row row-cols-1 row-cols-md-3 mt-2 g-3">
      {cardsData.map((card, index) => (
        <div key={index} className="col">
          <div className="card h-100">
            <Card.Img src={card.img} />
            <div className="card-body">
              <h2 className="card-title">{card.title}</h2>
              <h4 className="card-text">{card.text}</h4>
              <Button/>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;


