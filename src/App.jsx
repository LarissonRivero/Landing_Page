/**
 * Se importan los componetes que se necesitan renderizar en la aplicación, en este caso Navbar, Cards, Jumbotron y Footer, los cuales se encuentran en la carpeta components.
 * El <></> (llamado fragmento o fragment) es el equivalente a <div> </div> se utiliza para agrupar múltiples elementos JSX sin crear un elemento adicional en el DOM final.
 */
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
      <Cards />
      <Footer />
    </>
  )
}

export default App
