import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import AppBar from './components/AppBar';
import TodosView from './views/TodosView';
import HomeView from './views/HomeView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import Container from './components/Container';
import { authOperations } from './redux/auth';
import { connect } from 'react-redux';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

class App extends Component {
  componentDidMount() {
    this.props.onGetCurretnUser();
  }

  render() {
    return (
      <Container>
        <AppBar />

        <Switch>
          <PublicRoute 
            exact 
            path="/" 
            component={HomeView} />
          <PublicRoute 
            path="/register" 
            resticted
            component={RegisterView}
            redirectTo="/home"
             />
          <PublicRoute 
            path="/login"
            restricted 
            component={LoginView} 
            redirectTo="/todos"/>
          <PrivateRoute 
            path="/todos" 
            component={TodosView} 
            redirectTo="/login"
            />
        </Switch>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  onGetCurretnUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
