import { useState } from 'react';
import Steps from './components/Steps';
import Main from './components/Main';
import '../src/css/globals.css'

  function App() {
    const [subscription, setSubscription] = useState({
      selectedPlanId: 'arcade',
      isYearly: false,
      selectedAddOnIds: [],
    });

    return (
        <div className="app">
          <div className="container">
            <Steps />
            <Main
              subscription={subscription}
              setSubscription={setSubscription}
            />
          </div>
        </div>
    )
  }

export default App