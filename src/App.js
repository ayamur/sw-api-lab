import './App.css';
import { Route, Routes } from 'react-router-dom';
import StarshipDetails from './pages/StarshipList/StarshipDetails/StarshipDetails';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<StarshipList />} />
      <Route path="/starship" element={<StarshipDetails />} />
    </Routes>
  )
}

export default App;
