import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Home } from './component/Home.js'
import { Shop } from './component/Shop.js'
import { About } from './component/About.js'
import { Contact } from './component/Contact.js'


const App = () => {
  return (
    <Router>
      <Route exact path='/' component={ Home }/>
      <Route exact path='/shop' component={ Shop }/>
      <Route exact path='/about' component={ About }/>
      <Route exact path='/contact' component={ Contact }/>
    </Router>
  );
}

export default App;