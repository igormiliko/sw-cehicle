import {  BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import ScrollTotop from './ScrollTotop';


function App() {
  return (
    <div className="overflow-x-hidden" >
      <Router>
        <ScrollTotop>
          <Routes />
        </ScrollTotop>
      </Router>
    </div>
  );
}

export default App;
