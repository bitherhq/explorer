import React from 'react';
import { Route } from 'react-router-dom';
import Home from './home';
import Blocks from './blocks';
import Transaction from './transaction';
import Address from './address';
import Header from '../components/header';

const App = () => (
  <div>
    <Header />
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/blocks/:blocknumber" component={Blocks} />
      <Route exact path="/transaction/:hash" component={Transaction} />
      <Route exact path="/address/:address" component={Address} />
    </main>
  </div>
);

export default App
