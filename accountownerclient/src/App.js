import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from './components/ErrorPages/NotFound/NotFound';
import asyncComponent from './hoc/AsyncComponent/AsyncComponent';
import InternalServer from './components/ErrorPages/InternalServer/InternalServer';
import OwnerDetails from './containers/Owner/OwnerDetails/OwnerDetails';
import CreateOwner from './containers/Owner/CreateOwner/CreateOwner';
import UpdateOwner from './containers/Owner/UpdateOwner/UpdateOwner';

const AsyncOwnerList = asyncComponent(() => {
  return import('./containers/Owner/OwnerList/OwnerList');
});

function App() {
  return (
    <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/owner-list" component={AsyncOwnerList} />
            <Route path="/ownerDetails/:id" component={OwnerDetails} />
            <Route path="/createOwner" component={CreateOwner} />
            <Route path="/updateOwner/:id" component={UpdateOwner} />
            <Route path="/500" component={InternalServer} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
  );
}

export default App;
