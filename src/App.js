import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar';
import HomeView from './views/HomeView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import TodosView from './views/TodosView';
import Container from './components/Container';

const App = () => (
      <Container>
        <AppBar />

        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/register" component={RegisterView} />
          <Route path="/login" component={LoginView} />
          <Route path="/todos" component={TodosView} />
        </Switch>
      </Container>
);

export default App;
