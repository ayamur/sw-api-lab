import './App.css';
import { Route, Routes } from 'react-router-dom';


import StarshipDetails from './pages/StarshipDetails/StarshipDetails';
import StarshipList from './pages/StarshipList/StarshipList';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<StarshipList />} />
      <Route path="/:id" element={<StarshipDetails />} />
    </Routes>
  )
}

export default App;
