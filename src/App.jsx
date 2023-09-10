import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Jumbotron from './components/Jumbotron';
import Footer from './components/Footer';




function App() {
  
  return (
    <>
      <Navbar />
      <Jumbotron />
      <Cards title="Arbol de los Sueños" text="Some quick example text to build on the card title and make up the bulk of the card's content." img="https://img.freepik.com/foto-gratis/hermoso-arbol-medio-campo-cubierto-hierba-linea-arboles-fondo_181624-29267.jpg"/>
      <Cards title="Arbol de los Sueños" text="Some quick example text to build on the card title and make up the bulk of the card's content." img="https://img.freepik.com/foto-gratis/hermoso-arbol-medio-campo-cubierto-hierba-linea-arboles-fondo_181624-29267.jpg"/>
      <Cards title="Arbol de los Sueños" text="Some quick example text to build on the card title and make up the bulk of the card's content." img="https://img.freepik.com/foto-gratis/hermoso-arbol-medio-campo-cubierto-hierba-linea-arboles-fondo_181624-29267.jpg"/>
      <Cards title="Arbol de los Sueños" text="Some quick example text to build on the card title and make up the bulk of the card's content." img="https://img.freepik.com/foto-gratis/hermoso-arbol-medio-campo-cubierto-hierba-linea-arboles-fondo_181624-29267.jpg"/>
      <Footer/>
    </>
     
  )
}

export default App
