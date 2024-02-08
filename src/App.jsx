import React from 'react';
import Header from './components/Header.jsx';
import Pikachu from './assets/images/pikachu-construction.gif';
import './App.css'

export default function App() {
  return (
    <>
      <Header />
      <div className="content">
        <div className="message">
          <h2>Sorry! This website is currently under construction</h2>
          <p>In the meantime, you can find me on <a href="https://www.linkedin.com/in/seanaramirez" target="_blank" rel="noreferrer">LinkedIn</a>.</p>
        </div>
        <img src={Pikachu} alt="" />
        <div className="credit">
          <p>Reconstruction of Pikachu Construction GIF from 1997</p>
          <p>
            Credit to <a href="https://www.reddit.com/user/prguitarman/" target="_blank" rel="noreferrer">u/prguitarman</a>, posted to <a href="https://www.reddit.com/r/PixelArt/comments/16sz37h/reconstructed_the_pikachu_construction_gif_from/?rdt=65479&onetap_auto=true" target="_blank" rel="noreferrer">r/PixelArt</a> on Reddit</p>
        </div>
      </div>
    </>
  )
}
