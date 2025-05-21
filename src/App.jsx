import './scss/app.scss'
import Form from './components/Form.jsx';
import RegisterDay from './components/RegisterDay.jsx';
import DailyTotal from './components/DailyTotal.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx';

function App() {
  return (
    <div className='contenedor'> 

      <Router>
        <Header />

        <Routes>
          <Route path='/' element={<Form />}/>
          <Route path='/registerDay' element={<RegisterDay />}/>
          <Route path='/dailyTotal' element={<DailyTotal />}/>
        </Routes>
      </Router> 

    </div>
  )
}

export default App;
