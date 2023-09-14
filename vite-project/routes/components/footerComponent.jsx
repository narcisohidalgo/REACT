import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import "../../src/index.css";
import 'bootstrap/dist/css/bootstrap.css';


export const FooterComponent = () => {

    return (
        <div>
            <footer>
                <div class="nar_cont_footer">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-3">
                                <h2>Teléfono</h2>
                                <p>957238495</p>
                            </div>
                            <div class="col-md-3">
                                <h2>Email</h2>
                                <p>MeetFit@gmail.com</p>
                            </div>
                            <div class="col-md-3">
                                <h2>Calle Deportistas nº23</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default FooterComponent