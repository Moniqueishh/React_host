
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';


function App() { 

  return (

    <div className="App">
    
      <Routes>

        <Route children path= '/' element={<Home />} />

      </Routes>

      </div>
      
  );
}

export default App;
