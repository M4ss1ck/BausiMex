import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Contacto from './components/Contacto';
import Diseno from './components/Diseno';
import Fabricacion from './components/Fabricacion';
import Inicio from './components/Inicio';
import Montaje from './components/Montaje';
import Footer from './components/more/Footer';
import Navegacion from './components/Navegacion';

function App() {
  
  

  return (

    <Router >
      <div >

        <Navegacion />

        <Switch>
          <Route path='/contacto'>
            <Contacto />
          </Route>
          <Route path='/fab'>
            <Fabricacion />
          </Route>
          <Route path='/mon'>
            <Montaje />
          </Route>
          <Route path='/dis'>
            <Diseno />
          </Route>
          <Route path='/' exact>
            <Inicio />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
    
  );
}

export default App;
