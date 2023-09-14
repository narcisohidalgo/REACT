import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexView from "../routes";
import ActividadesView from "../routes/actividades";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<IndexView />}></Route>
                <Route path="/actividades" element={<ActividadesView />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

