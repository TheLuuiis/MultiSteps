import PersonalInfo from "../pages/PersonalInfo";
import SeleccionarComplemento from '../pages/SeleccionarComplemento';
import SeleccionarPlan from '../pages/SeleccionarPlan';
import Sumatoria from '../pages/Sumatoria';
import { Routes, Route } from "react-router-dom";
import '../css/components/Main.css';
const Main = () => {
    return (  
        <main className="container__main">
          <Routes>
            <Route path="/" element={<PersonalInfo />} />
            <Route path="/step2" element={<SeleccionarComplemento />} />
            <Route path="/step3" element={<SeleccionarPlan />} />
            <Route path="/step4" element={<Sumatoria />} />
          </Routes>
        </main>
    );
}
 
export default Main;