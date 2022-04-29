import './App.css';
import { Calculator } from './componets/calculator';

function App() {
  return (
    <div className="App">
      <div className="star-container">
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
      </div>
      <div className="panel">
        <Calculator/>
      </div>
    </div>
  );
}

export default App;
