/**
 * Componente Button; Este componente es un botón que se utiliza en la tarjeta para simular al compra de un servicio, el cual al ser presionado muestra un mensaje de alerta para indicar la funcionalidad del botón. adicional se utiliza como componente en el componente Cards.jsx
 */

export default function Button(){
  function handleClick(e) {
    e.preventDefault();
    alert('Gracias por Interactuar con el Sitio Web');
  }

  return (
    <div>
      <button className="button" onClick={handleClick}>Visitar</button>
    </div>
  )
}