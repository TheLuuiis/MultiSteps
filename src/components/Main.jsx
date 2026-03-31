import PersonalInfo from "../pages/PersonalInfo";
import SeleccionarComplemento from '../pages/SeleccionarComplemento';
import SeleccionarPlan from '../pages/SeleccionarPlan';
import Sumatoria from '../pages/Sumatoria';
import { Routes, Route } from "react-router-dom";
import '../css/components/Main.css';
import Sucess from "./Sucess";

const Main = ({ subscription, setSubscription }) => {
    return (  
        <main className="container__main">
          <Routes>
            <Route path="/" element={<PersonalInfo />} />
            <Route
              path="/step2"
              element={(
                <SeleccionarPlan
                  subscription={subscription}
                  setSubscription={setSubscription}
                />
              )}
            />
            <Route
              path="/step3"
              element={(
                <SeleccionarComplemento
                  subscription={subscription}
                  setSubscription={setSubscription}
                />
              )}
            />
            <Route
              path="/step4"
              element={<Sumatoria subscription={subscription} />}
            />
            <Route path="/success" element={<Sucess />} />
          </Routes>
        </main>
    );
}
 
export default Main;