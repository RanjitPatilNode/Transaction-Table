
import '../src/App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './component/Home';
import BarChart from './component/BarChart';
import Column from './component/Column';
import PieChart from './component/PieChart';
import Statistics from './component/Statistics';



function App() {
  return (
   <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/piechart' element={<PieChart/>}/>
          <Route path='/column' element={<Column/>}/>
          <Route path='/statistics' element={<Statistics/>}/>         
        </Routes>
      </Router>
      {/* http://localhost:3001/api/bar-chart-data?month=${month} */}
   
   </>
  );
}

export default App;
