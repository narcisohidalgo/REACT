import React, { useState, useEffect } from "react";
import HeaderComponent from "./components/headerComponent";
import { TablaActividadesComponent } from "./components/tablaActividadesComponent";
import FooterComponent from "./components/footerComponent";
import axios from "axios";


export function ActividadesView() {
  const [misActividades, setMisActividades] = useState([]);
  useEffect(() => {
      axios.get('http://localhost/api/allactivities').then((response) => {
        setMisActividades(response.data);
      })
      .catch((error) => {
          console.log(error);
      });
  }, [setMisActividades]);

  console.log(misActividades)


  return(
    <div>
      <HeaderComponent></HeaderComponent>
      <br></br>
      <br></br>
      <br></br>
      <div class="misre mt-5">
        <h1>Actividades Disponibles</h1>
        <hr></hr>
        <TablaActividadesComponent actividadesdata={misActividades}></TablaActividadesComponent>
      </div>
      <FooterComponent></FooterComponent>
      

    </div>
  );
}

export default ActividadesView
