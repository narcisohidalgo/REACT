import React, { useState, useEffect } from "react";
import HeaderComponent from "./components/headerComponent";
import style from "../src/index.css?inline";
import FooterComponent from "./components/footerComponent";

export function IndexView() {

  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div class="banner">
        <div class="sombra">
          <h1>Meet & Fit</h1>
          <p>Forma tu equipo</p>

          <hr />
          <div class="cont_banner_link">
            <a class="banner_link" href="/">Crear actividad deportiva</a>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row nar_cont_sec_1">
          <div class="col-md-9">
            <h2><b>Actividades Deportivas</b></h2>
            <p><i>Busca personas para formar tu equipo</i></p>
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae veritatis in, alias
              inventore repellendus dolore, accusamus ratione id, nesciunt quia nihil eveniet at unde qui
              vero? Rerum odit facilis accusantium.</p>
          </div>
          <div class="nar_cont_sec_1_link col-md-3 text-center">
            <button id="boton-menu" class="btn btn-secondary btn-md">Mejores instalaciones</button>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h2>Conoce gente</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat error rem alias maiores? Ullam
              deserunt tempora id provident consequatur. Nulla consequatur magnam quasi rem ad eos ducimus
              facilis minima asperiores?</p>
          </div>
        </div>
      </div>
      <div class="nar_cont_banner_sec_3">
        <div class="container-sombra">
          <div class="row">
            <div class="col-md-4">
              <h2>Centros Deportivos</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis quos, deserunt excepturi
                pariatur, voluptatem, necessitatibus culpa laboriosam impedit quisquam velit tempore a
                voluptates repellendus autem nobis iusto consequatur illo? Ipsa?</p>
              <a class="btn btn-secondary btn-md" href="#">Deportes</a>
            </div>
            <div class="nar_cont_img col-md-8 text-center">
              <img src="/img/futbol.png" class="img-fluid" alt="primer plato"></img>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default IndexView
