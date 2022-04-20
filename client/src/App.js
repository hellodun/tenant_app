import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddBuilding from './views/AddBuilding';
import AddTenants from './views/AddTenants';
import Tenants from "./views/Tenants";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Tenants />} />
        <Route path='/addtenant' element={<AddTenants />} />
        <Route path='/addbuilding' element={<AddBuilding />} />
      </Routes>
    </Router>
  );
}

export default App;
