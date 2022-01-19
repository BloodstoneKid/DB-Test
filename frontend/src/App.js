import './App.css';
import Home from './components/Home';
import Tienda from './components/cliente/Tienda';
import Categoria from './components/cliente/Categoria';
import Producto from './components/cliente/Producto';
import Carrito from './components/cliente/Carrito';
import HomeAdmin from './components/admin/HomeAdmin';
import EditarListaCategorias from './components/admin/EditarListaCategorias';
import EditarCatalogo from './components/admin/EditarCatalogo';
import InfoTiendas from './components/admin/InfoTiendas';
import InfoTienda from './components/admin/InfoTienda';
import EditarMenu from './components/admin/EditarMenu';
import EditarListaOfertas from './components/admin/EditarListaOfertas';
import EditarListaEventos from './components/admin/EditarListaEventos';
import VerFacturas from './components/admin/VerFacturas';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <Router>
      <div className="App">
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/tienda" exact element={<Tienda/>} />
            <Route path="/categoria" exact element={<Categoria/>} />
            <Route path="/producto" exact element={<Producto/>} />
            <Route path="/carrito" exact element={<Carrito/>} />
            <Route path="/homeadmin" exact element={<HomeAdmin/>} />
            <Route path="/listacategorias" exact element={<EditarListaCategorias/>} />
            <Route path="/listacatalogos" exact element={<EditarCatalogo/>} />
            <Route path="/infotiendas" exact element={<InfoTiendas/>} />
            <Route path="/infotienda" exact element={<InfoTienda/>} />
            <Route path="/listaofertas" exact element={<EditarListaOfertas/>} />
            <Route path="/listaeventos" exact element={<EditarListaEventos/>} />
            <Route path="/menutienda" exact element={<EditarMenu/>} />
            <Route path="/facturastienda" exact element={<VerFacturas/>} />
          </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
