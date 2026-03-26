import Steps from './components/Steps';
import Main from './components/Main';
import '../src/css/globals.css'

  function App() {
    return (
        <div className="app">
          <div className="container">
            <Steps />
            <Main />
          </div>
        </div>
    )
  }

export default App